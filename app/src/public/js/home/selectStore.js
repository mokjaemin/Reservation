const store = document.querySelectorAll(".button");
const storename = document.querySelectorAll(".storename");
const searchText = document.querySelector(".search");

function filter(){
    let search = searchText.value.toLowerCase();
    for (let i = 0; i < store.length; i++) {
        if(store[i].value.toLowerCase().indexOf(search) != -1){
            storename[i].style.display = ""
        } 
        else{
            storename[i].style.display = "none"
        }
    }
}