const privatebutton = document.querySelector("#private");
const bowl1 = document.querySelector("#bowl1");
const publicbutton = document.querySelector("#public");
const bowl2 = document.querySelector("#bowl2");

privatebutton.addEventListener("click", show1);   
publicbutton.addEventListener("click", show2);   

var idx1 = 0;
function show1(){
    if(idx1 == 0){
        bowl1.style.display = "";
        idx1 = 1;
    }
    else{
        bowl1.style.display = "none";
        idx1 = 0;
    }
}

var idx2 = 0;
function show2(){
    if(idx2 == 0){
        bowl2.style.display = "";
        idx2 = 1;
    }
    else{
        bowl2.style.display = "none";
        idx2 = 0;
    }
}