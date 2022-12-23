const answerbutton = document.querySelectorAll("#answerbutton");
const showbutton = document.querySelectorAll("#showdown");
const showsearch = document.querySelectorAll("#showsearch");
const hidebutton = document.querySelectorAll("#hidebutton");
const comment = document.querySelectorAll(".answerContext");
const bowl = document.querySelectorAll("#bowl");
const date = document.querySelectorAll(".date");
const time = document.querySelectorAll(".time");
const table = document.querySelectorAll(".table");
const id = document.querySelectorAll(".id");
const searchText = document.querySelector(".search");


function filter(){
    let search = searchText.value.toLowerCase();
    for (let i = 0; i < showbutton.length; i++) {
        if(id[i].value.toLowerCase().indexOf(search) != -1){
            showsearch[i].style.display = ""
        } 
        else{
            showsearch[i].style.display = "none"
        }
    }
}

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
            date : date[i].value,
            time : time[i].value,
            table : table[i].value, 
            comment : comment[i].value,
        }
        fetch("/handleOwner", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(req)
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                location.href = "/handleOwner"
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

