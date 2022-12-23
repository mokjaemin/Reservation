const cancel1 = document.querySelectorAll(".cancel1");
const cancel2 = document.querySelectorAll(".cancel2");
const cancel3 = document.querySelectorAll(".cancel3");
const cancel4 = document.querySelectorAll(".cancel4");

const confirm1 = document.querySelectorAll(".confirm1");
const confirm2 = document.querySelectorAll(".confirm2");
const confirm3 = document.querySelectorAll(".confirm3");
const confirm4 = document.querySelectorAll(".confirm4");

const content1 = document.querySelectorAll(".content1");
const content2 = document.querySelectorAll(".content2");
const content3 = document.querySelectorAll(".content3");
const content4 = document.querySelectorAll(".content4");


const showday1 = document.querySelector("#showday1");
const hideday1 = document.querySelector("#hideday1");
const bowl1 = document.querySelector("#bowl1");

const showday2 = document.querySelector("#showday2");
const hideday2 = document.querySelector("#hideday2");
const bowl2 = document.querySelector("#bowl2");

const showday3 = document.querySelector("#showday3");
const hideday3 = document.querySelector("#hideday3");
const bowl3 = document.querySelector("#bowl3");

const showday4 = document.querySelector("#showday4");
const hideday4 = document.querySelector("#hideday4");
const bowl4 = document.querySelector("#bowl4");


if(showday1){
    showday1.addEventListener("click", showDay1);
    hideday1.addEventListener("click", hideDay1);
}
if(showday2){
    showday2.addEventListener("click", showDay2);
    hideday2.addEventListener("click", hideDay2);
}
if(showday3){
    showday3.addEventListener("click", showDay3);
    hideday3.addEventListener("click", hideDay3);
}
if(showday4){
    showday4.addEventListener("click", showDay4);
    hideday4.addEventListener("click", hideDay4);   
}

var idx1 = 0;
var idx2 = 0;
var idx3 = 0;
var idx4 = 0;

function showDay1(){
    if(idx1 == 0){
        bowl1.style.display = "";
        idx1 = 1;
    }
    else{
        bowl1.style.display = "none";
        idx1 = 0;
    }
}
function hideDay1(){
    bowl1.style.display = "none";
    idx1 = 0;
}

function showDay2(){
    if(idx2 == 0){
        bowl2.style.display = "";
        idx2 = 1;
    }
    else{
        bowl2.style.display = "none";
        idx2 = 0;
    }
}
function hideDay2(){
    bowl2.style.display = "none";
    idx2 = 0;
}

function showDay3(){
    if(idx3 == 0){
        bowl3.style.display = "";
        idx3 = 1;
    }
    else{
        bowl3.style.display = "none";
        idx3 = 0;
    }
}
function hideDay3(){
    bowl3.style.display = "none";
    idx3 = 0;
}

function showDay4(){
    if(idx4 == 0){
        bowl4.style.display = "";
        idx4 = 1;
    }
    else{
        bowl4.style.display = "none";
        idx4 = 0;
    }
}
function hideDay4(){
    bowl4.style.display = "none";
    idx4 = 0;
}

// play confirm
function playconfirm1(value){
    return function(){
        let today  = new Date();
        let today_date = today.getDate()
        let today_month = today.getMonth()+1
        let date1 = today_month + "월" + today_date + "일"

        const time = content1[value].value.split(" ")[0]
        const table = content1[value].value.split(" ")[1]
        const name = content1[value].value.split(" ")[2]
        const id = content1[value].value.split(" ")[3]

        
        var input1 = prompt("주문하실 등심의 수를 입력해주세요")
        var input2 = prompt("주문하실 안심의 수를 입력해주세요")
        var sum = input1 * 18000 + input2 * 19000
        let con = confirm("금액은 총 " + sum + "입니다. 주문하시겠습니까?")
        if(con){
            const req = {
                input1: input1,
                input2: input2,
                sum : sum,
                date : date1,
                time : time,
                table : table,
                name : name,
                id : id,
            }
            alert("주문 요청중입니다.")

            fetch("/customerOrder", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(req)
            })
            .then((res) => res.json())
            .then((res) => {
                if(res.success){
                    alert("주문 되었습니다.")
                    location.href = "/order"
                }
                else{
                    alert("주문요청 중 오류발생.");
                }
            })
            .catch((err) => {
                console.error(new Error("주문요청 중 에러발생"));
            });
        }
    }
};
function playconfirm2(value){
    return function(){
        var orientation = new Date();
        let tmr = new Date(orientation.setDate(orientation.getDate()+1))
        let tmr_date = tmr.getDate()
        let tmr_month = tmr.getMonth() + 1
        let date2 = tmr_month + "월" + tmr_date + "일"

        const time = content2[value].value.split(" ")[0]
        const table = content2[value].value.split(" ")[1]
        const name = content2[value].value.split(" ")[2]
        const id = content2[value].value.split(" ")[3]

        
        var input1 = prompt("주문하실 등심의 수를 입력해주세요")
        var input2 = prompt("주문하실 안심의 수를 입력해주세요")
        var sum = input1 * 18000 + input2 * 19000
        let con = confirm("금액은 총 " + sum + "입니다. 주문하시겠습니까?")
        if(con){
            const req = {
                input1: input1,
                input2: input2,
                sum : sum,
                date : date2,
                time : time,
                table : table,
                name : name,
                id : id,
            }
            alert("주문 요청중입니다.")

            fetch("/customerOrder", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(req)
            })
            .then((res) => res.json())
            .then((res) => {
                if(res.success){
                    alert("주문 되었습니다.")
                    location.href = "/order"
                }
                else{
                    alert("주문요청 중 오류발생.");
                }
            })
            .catch((err) => {
                console.error(new Error("주문요청 중 에러발생"));
            });
        }
    }
};
function playconfirm3(value){
    return function(){
        var orientation = new Date();
        let twoDays = new Date(orientation.setDate(orientation.getDate()+2))
        let twoDays_date = twoDays.getDate()
        let twoDays_month = twoDays.getMonth() + 1
        let date3 = twoDays_month + "월" + twoDays_date + "일"

        const time = content3[value].value.split(" ")[0]
        const table = content3[value].value.split(" ")[1]
        const name = content3[value].value.split(" ")[2]
        const id = content3[value].value.split(" ")[3]

        
        var input1 = prompt("주문하실 등심의 수를 입력해주세요")
        var input2 = prompt("주문하실 안심의 수를 입력해주세요")
        var sum = input1 * 18000 + input2 * 19000
        let con = confirm("금액은 총 " + sum + "입니다. 주문하시겠습니까?")
        if(con){
            const req = {
                input1: input1,
                input2: input2,
                sum : sum,
                date : date3,
                time : time,
                table : table,
                name : name,
                id : id,
            }
            alert("주문 요청중입니다.")

            fetch("/customerOrder", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(req)
            })
            .then((res) => res.json())
            .then((res) => {
                if(res.success){
                    alert("주문 되었습니다.")
                    location.href = "/order"
                }
                else{
                    alert("주문요청 중 오류발생.");
                }
            })
            .catch((err) => {
                console.error(new Error("주문요청 중 에러발생"));
            });
        }
    }
};
function playconfirm4(value){
    return function(){
        var orientation = new Date();
        let threeDays = new Date(orientation.setDate(orientation.getDate()+3))
        let threeDays_date= threeDays.getDate()
        let threeDays_month = threeDays.getMonth() + 1
        let date4 = threeDays_month + "월" + threeDays_date + "일"

        const time = content4[value].value.split(" ")[0]
        const table = content4[value].value.split(" ")[1]
        const name = content4[value].value.split(" ")[2]
        const id = content4[value].value.split(" ")[3]

        
        var input1 = prompt("주문하실 등심의 수를 입력해주세요")
        var input2 = prompt("주문하실 안심의 수를 입력해주세요")
        var sum = input1 * 18000 + input2 * 19000
        let con = confirm("금액은 총 " + sum + "입니다. 주문하시겠습니까?")
        if(con){
            const req = {
                input1: input1,
                input2: input2,
                sum : sum,
                date : date4,
                time : time,
                table : table,
                name : name,
                id : id,
            }
            alert("주문 요청중입니다.")

            fetch("/customerOrder", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(req)
            })
            .then((res) => res.json())
            .then((res) => {
                if(res.success){
                    alert("주문 되었습니다.")
                    location.href = "/order"
                }
                else{
                    alert("주문요청 중 오류발생.");
                }
            })
            .catch((err) => {
                console.error(new Error("주문요청 중 에러발생"));
            });
        }
    }
};

// play cancel
function playcancel1(value){
    return function(){
        let today  = new Date();
        let day = today.getDate()
        let month = today.getMonth() +1
        let date1 = month + "월" + day + "일"
        const time = content1[value].value.split(" ")[0]
        const table = content1[value].value.split(" ")[1]
        const name = content1[value].value.split(" ")[2]
        const id = content1[value].value.split(" ")[3]
        let con = confirm("날짜:" +  date1 + ", 시간:" + time + ", 테이블:" + table + ", 이름:" + name + ", 아이디:" + id)
        if(con){
            const req = {
                date : date1,
                time : time,
                table : table,
                name : name,
                id : id,
            }
            alert("예약취소 요청중입니다.")

            fetch("/cancelReservation", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(req)
            })
            .then((res) => res.json())
            .then((res) => {
                if(res.success){
                    alert("삭제되었습니다.")
                    location.href = "/order"
                }
                else{
                    alert("해당 예약이 없습니다.");
                }
            })
            .catch((err) => {
                console.error(new Error("예약삭제 중 에러발생"));
            });
        }
    }
};
function playcancel2(value){
    return function(){
        let today  = new Date();
        let day = today.getDate()
        let month = today.getMonth() +1
        let date2 = month + "월" + (day+1) + "일"
        const time = content2[value].value.split(" ")[0]
        const table = content2[value].value.split(" ")[1]
        const name = content2[value].value.split(" ")[2]
        const id = content2[value].value.split(" ")[3]
        let con = confirm("날짜:" +  date2 + ", 시간:" + time + ", 테이블:" + table + ", 이름:" + name + ", 아이디:" + id)
        if(con){
            const req = {
                date : date2,
                time : time,
                table : table,
                name : name,
                id : id,
            }
            alert("예약취소 요청중입니다.")

            fetch("/cancelReservation", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(req)
            })
            .then((res) => res.json())
            .then((res) => {
                if(res.success){
                    alert("삭제되었습니다.")
                    location.href = "/order"
                }
                else{
                    alert("해당 예약이 없습니다.");
                }
            })
            .catch((err) => {
                console.error(new Error("예약삭제 중 에러발생"));
            });
        }
    }
};
function playcancel3(value){
    return function(){
        let today  = new Date();
        let day = today.getDate()
        let month = today.getMonth() +1
        let date3 = month + "월" + (day+2) + "일"
        const time = content3[value].value.split(" ")[0]
        const table = content3[value].value.split(" ")[1]
        const name = content3[value].value.split(" ")[2]
        const id = content3[value].value.split(" ")[3]
        let con = confirm("날짜:" +  date3 + ", 시간:" + time + ", 테이블:" + table + ", 이름:" + name + ", 아이디:" + id)
        if(con){
            const req = {
                date : date3,
                time : time,
                table : table,
                name : name,
                id : id,
            }
            alert("예약취소 요청중입니다.")

            fetch("/cancelReservation", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(req)
            })
            .then((res) => res.json())
            .then((res) => {
                if(res.success){
                    alert("삭제되었습니다.")
                    location.href = "/order"
                }
                else{
                    alert("해당 예약이 없습니다.");
                }
            })
            .catch((err) => {
                console.error(new Error("예약삭제 중 에러발생"));
            });
        }
    }
};
function playcancel4(value){
    return function(){
        let today  = new Date();
        let day = today.getDate()
        let month = today.getMonth() +1
        let date4 = month + "월" + (day+3) + "일"
        const time = content4[value].value.split(" ")[0]
        const table = content4[value].value.split(" ")[1]
        const name = content4[value].value.split(" ")[2]
        const id = content4[value].value.split(" ")[3]
        let con = confirm("날짜:" +  date4 + ", 시간:" + time + ", 테이블:" + table + ", 이름:" + name + ", 아이디:" + id)
        if(con){
            const req = {
                date : date4,
                time : time,
                table : table,
                name : name,
                id : id,
            }
            alert("예약취소 요청중입니다.")

            fetch("/cancelReservation", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(req)
            })
            .then((res) => res.json())
            .then((res) => {
                if(res.success){
                    alert("삭제되었습니다.")
                    location.href = "/order"
                }
                else{
                    alert("해당 예약이 없습니다.");
                }
            })
            .catch((err) => {
                console.error(new Error("예약삭제 중 에러발생"));
            });
        }
    }
};

// confirm idx
var idx1 = [];
for(var i = 0; i < confirm1.length; i ++){
    idx1[i] = playconfirm1(i);
}
var idx2 = [];
for(var i = 0; i < confirm2.length; i ++){
    idx2[i] = playconfirm2(i);
}
var idx3 = [];
for(var i = 0; i < confirm3.length; i ++){
    idx3[i] = playconfirm3(i);
}
var idx4 = [];
for(var i = 0; i < confirm4.length; i ++){
    idx4[i] = playconfirm4(i);
}


// cancel idx
var cidx1 = [];
for(var i = 0; i < cancel1.length; i ++){
    cidx1[i] = playcancel1(i);
}
var cidx2 = [];
for(var i = 0; i < cancel2.length; i ++){
    cidx2[i] = playcancel2(i);
}
var cidx3 = [];
for(var i = 0; i < cancel3.length; i ++){
    cidx3[i] = playcancel3(i);
}
var cidx4 = [];
for(var i = 0; i < cancel4.length; i ++){
    cidx4[i] = playcancel4(i);
}

// confirm click
for(var i = 0; i < confirm1.length; i ++){
    confirm1[i].addEventListener("click", idx1[i]);    
}
for(var i = 0; i < confirm2.length; i ++){
    confirm2[i].addEventListener("click", idx2[i]);    
}
for(var i = 0; i < confirm3.length; i ++){
    confirm3[i].addEventListener("click", idx3[i]);    
}
for(var i = 0; i < confirm4.length; i ++){
    confirm4[i].addEventListener("click", idx4[i]);    
}

// cancel click
for(var i = 0; i < cancel1.length; i ++){
    cancel1[i].addEventListener("click", cidx1[i]);    
}
for(var i = 0; i < cancel2.length; i ++){
    cancel2[i].addEventListener("click", cidx2[i]);    
}
for(var i = 0; i < cancel3.length; i ++){
    cancel3[i].addEventListener("click", cidx3[i]);    
}
for(var i = 0; i < cancel4.length; i ++){
    cancel4[i].addEventListener("click", cidx4[i]);    
}






