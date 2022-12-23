const reviewbutton = document.querySelector("#reviewbutton");
const showbutton = document.querySelectorAll("#showdown");
const hidebutton = document.querySelectorAll("#hidebutton");
const bowl = document.querySelectorAll("#bowl");

var idx = []
for(var i = 0; i < bowl.length; i ++){
    idx.push(0)
}

function show(i){
    return function(){
        if(idx[i] == 0){
            bowl[i].style.display = "";
            idx[i] = 1;
        }
        else{
            bowl[i].style.display = "none";
            idx[i] = 0;
        }
    }
}

var showidx = [];
for(var i = 0; i < showbutton.length; i ++){
    showidx[i] = show(i);
}

for(var i = 0; i < showbutton.length; i ++){
    showbutton[i].addEventListener("click", showidx[i]);    
}





reviewbutton.addEventListener("click", review); 

function review(){
    fetch("/toPublic", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify()
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/writePublicReview"
        }
        else{
            alert("방문 기록이 없어서 후기등록이 불가능합니다.");
        }
    })
    .catch((err) => {
        console.error(new Error("후기 등록 중 에러발생"));
    });
}