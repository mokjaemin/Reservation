"use strict";



const date1 = document.querySelector("#date1");
const date2 = document.querySelector("#date2");
const date3 = document.querySelector("#date3");
const date4 = document.querySelector("#date4");


date1.addEventListener("click", firstDate);
date2.addEventListener("click", secondDate);
date3.addEventListener("click", thirdDate);
date4.addEventListener("click", fourthDate);

function check_day(day){
    if(day == 0){
        return "일요일"
    }
    if(day == 1){
        return "월요일"
    }
    if(day == 2){
        return "화요일"
    }
    if(day == 3){
        return "수요일"
    }
    if(day == 4){
        return "목요일"
    }
    if(day == 5){
        return "금요일"
    }
    if(day == 6){
        return "토요일"
    }
};

function firstDate(){
    let today  = new Date();
    let today_date = today.getDate()
    let today_month = today.getMonth()+1
    var today_day = today.getDay()
    var today_day = check_day(today_day)
    let date1 = today_month + "월" + today_date + "일"
    let day1 = today_day
    const req = {
        reservation_date : date1,
        reservation_day : day1,
    };
     
    fetch("/reservation_date", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/time"
        }
        else{
            alert("실행오류");
        }
    })
    .catch((err) => {
        console.error(new Error("에러발생"));
    });
}

function secondDate(){
    var today  = new Date();
    var today = new Date(today.setDate(today.getDate()+1))
    let today_date = today.getDate()
    let today_month = today.getMonth()+1
    var today_day = today.getDay()
    var today_day = check_day(today_day)
    let date1 = today_month + "월" + today_date + "일"
    let day1 = today_day
    const req = {
        reservation_date : date1,
        reservation_day : day1,
    };
    
    
    // 요청이 전달되는 경로와 형식
    fetch("/reservation_date", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/time"
        }
        else{
            alert("실행오류");
        }
    })
    .catch((err) => {
        console.error(new Error("에러발생"));
    });
}

function thirdDate(){
    var today  = new Date();
    var today = new Date(today.setDate(today.getDate()+2))
    let today_date = today.getDate()
    let today_month = today.getMonth()+1
    var today_day = today.getDay()
    var today_day = check_day(today_day)
    let date1 = today_month + "월" + today_date + "일"
    let day1 = today_day
    const req = {
        reservation_date : date1,
        reservation_day : day1,
    };
    
    
    // 요청이 전달되는 경로와 형식
    fetch("/reservation_date", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/time"
        }
        else{
            alert("실행오류");
        }
    })
    .catch((err) => {
        console.error(new Error("에러발생"));
    });
}

function fourthDate(){
    var today  = new Date();
    var today = new Date(today.setDate(today.getDate()+3))
    let today_date = today.getDate()
    let today_month = today.getMonth()+1
    var today_day = today.getDay()
    var today_day = check_day(today_day)
    let date1 = today_month + "월" + today_date + "일"
    let day1 = today_day
    const req = {
        reservation_date : date1,
        reservation_day : day1,
    };
    
    
    // 요청이 전달되는 경로와 형식
    fetch("/reservation_date", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/time"
        }
        else{
            alert("실행오류");
        }
    })
    .catch((err) => {
        console.error(new Error("에러발생"));
    });
}