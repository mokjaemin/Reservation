const showday = document.querySelectorAll("#showday");
const hideday = document.querySelectorAll("#hideday");
const bowl = document.querySelectorAll("#bowl");
const reviewbutton = document.querySelectorAll("#reviewbutton");
const date = document.querySelectorAll("#date");
const time = document.querySelectorAll("#time");
const table = document.querySelectorAll("#table");



var idx = []
for(var i = 0; i < bowl.length; i ++){
    idx.push(0)
}

function showDay(i){
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
function hideDay(i){
    return function(){
        bowl[i].style.display = "none";
    }
}
function reviewButton(i){
    return function(){
        const req = {
            date : date[i].value.split(" ")[2],
            time : time[i].value.split(" ")[2],
            table : table[i].value.split(" ")[2],
        }
        fetch("/toOwner", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(req)
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                location.href = "/writeReview"
            }
            else{
                alert("후기 등록 중 오류가 발생되었습니다.");
            }
        })
        .catch((err) => {
            console.error(new Error("후기 등록 중 에러발생"));
        });
    }
}


var idx1 = [];
for(var i = 0; i < showday.length; i ++){
    idx1[i] = showDay(i);
}
var idx2 = [];
for(var i = 0; i < hideday.length; i ++){
    idx2[i] = hideDay(i);
}
var idx3 = [];
for(var i = 0; i < reviewbutton.length; i ++){
    idx3[i] = reviewButton(i);
}



for(var i = 0; i < showday.length; i ++){
    showday[i].addEventListener("click", idx1[i]);    
}
for(var i = 0; i < hideday.length; i ++){
    hideday[i].addEventListener("click", idx2[i]);    
}
for(var i = 0; i < reviewbutton.length; i ++){
    reviewbutton[i].addEventListener("click", idx3[i]);    
}