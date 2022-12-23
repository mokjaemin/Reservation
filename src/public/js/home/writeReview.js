const time = document.querySelector("#time");
const date = document.querySelector("#date");
const table = document.querySelector("#table");
const review = document.querySelector("#review");
const submitButton = document.querySelector("#submit");


submitButton.addEventListener("click", submit);

function submit(){
    const req = {
        date : date.value.split(" ")[2],
        time : time.value.split(" ")[2],
        table : table.value.split(" ")[2],
        review : review.value,
    }
    fetch("/writeReview", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/toOwner"
        }
        else{
            alert("후기 등록 중 오류가 발생되었습니다.");
        }
    })
    .catch((err) => {
        console.error(new Error("후기 등록 중 에러발생"));
    });
}