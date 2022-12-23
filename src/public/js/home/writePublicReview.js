const reviewbutton = document.querySelector("#reviewbutton");
const title = document.querySelector("#reviewTitle");
const context = document.querySelector("#reviewContext");


reviewbutton.addEventListener("click", review); 


function review(){
    var rating = 0
    if(document.querySelector("input[name='rating']:checked")){
        pre_rating = document.querySelector("input[name='rating']:checked");
        rating = pre_rating.value
    }
    if(!title.value){return alert("제목을 입력해주세요")}
    if(!context.value){return alert("내용을 입력해주세요")}
    const req = {
        title : title.value,
        context : context.value,
        rating : rating,
    }


    fetch("/writePublicReview", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/toPublic"
        }
        else{
            alert("후기등록 중 오류발생.");
        }
    })
    .catch((err) => {
        console.error(new Error("후기 등록 중 에러발생"));
    });
}