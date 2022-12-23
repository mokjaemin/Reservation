const showday = document.querySelectorAll("#showday");
const hideday = document.querySelectorAll("#hideday");
const bowl = document.querySelectorAll("#bowl");
const blackbutton = document.querySelectorAll("#blackbutton");
const searchbutton = document.querySelector("#searchbutton");
const userid = document.querySelectorAll("#id");
const username = document.querySelectorAll("#name");
const usernumber = document.querySelectorAll("#number");
const searchText = document.querySelector(".search");


function filter(){

    let search = searchText.value.toLowerCase();
    for (let i = 0; i < showday.length; i++) {
        if(username[i].value.split(" ")[2].toLowerCase().indexOf(search) != -1 ||
        userid[i].value.split(" ")[2].toLowerCase().indexOf(search) != -1 || 
        usernumber[i].value.split(" ")[2].toLowerCase().indexOf(search) != -1){
            showday[i].style.display = ""
        } 
        else{
            showday[i].style.display = "none"
        }
    }
}

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
function blackButton(i){
    return function(){

        var reason = prompt("사유를 입력해주세요.")
        alert("블랙리스트 요청 중입니다.")
        if(reason){
            const req = {
                id : userid[i].value.split(" ")[2],
                reason : reason,
            }
            fetch("/handleBlacklist", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(req)
            })
            .then((res) => res.json())
            .then((res) => {
                if(res.success){
                    alert("블랙리스트 요청처리 되었습니다.")
                    location.href = "/handleInformation"
                }
                else{
                    alert("블랙리스트 등록 중 오류가 발생되었습니다.");
                }
            })
            .catch((err) => {
                console.error(new Error("블랙리스트 등록 중 에러발생"));
            });
            }
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
for(var i = 0; i < blackbutton.length; i ++){
    idx3[i] = blackButton(i);
}


for(var i = 0; i < showday.length; i ++){
    showday[i].addEventListener("click", idx1[i]);    
}
for(var i = 0; i < hideday.length; i ++){
    hideday[i].addEventListener("click", idx2[i]);    
}
for(var i = 0; i < blackbutton.length; i ++){
    blackbutton[i].addEventListener("click", idx3[i]);    
}