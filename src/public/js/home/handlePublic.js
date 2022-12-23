const answerbutton = document.querySelectorAll("#answerbutton");
const showbutton = document.querySelectorAll("#showdown");
const hidebutton = document.querySelectorAll("#hidebutton");
const comment = document.querySelectorAll(".answerContext");
const title = document.querySelectorAll(".reviewTitle");
const bowl = document.querySelectorAll("#bowl");



function show(i){
    return function(){
        bowl[i].style.display = "";
    }
}

var showidx = [];
for(var i = 0; i < showbutton.length; i ++){
    showidx[i] = show(i);
}

for(var i = 0; i < showbutton.length; i ++){
    showbutton[i].addEventListener("click", showidx[i]);    
}




function hide(i){
    return function(){
        bowl[i].style.display = "none";
    }
}

var hideidx = [];
for(var i = 0; i < hidebutton.length; i ++){
    hideidx[i] = hide(i);
}


for(var i = 0; i < hidebutton.length; i ++){
    hidebutton[i].addEventListener("click", hideidx[i]);    
}




function answer(i){
    return function(){
        const req = {
            title : title[i].value, 
            comment : comment[i].value,
        }
        fetch("/handlePublic", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(req)
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                location.href = "/handlePublic"
            }
            else{
                alert("댓글 작성중 오류 발생.");
            }
        })
        .catch((err) => {
            console.error(new Error("댓글 작성중 에러발생"));
        });
    }
}

var answeridx = [];
for(var i = 0; i < answerbutton.length; i ++){
    answeridx[i] = answer(i);
}


for(var i = 0; i < answerbutton.length; i ++){
    answerbutton[i].addEventListener("click", answeridx[i]);    
}

