"use strict";



const time1 = document.querySelector("#time1");
const time2 = document.querySelector("#time2");
const time3 = document.querySelector("#time3");
const time4 = document.querySelector("#time4");


time1.addEventListener("click", firstTime);
time2.addEventListener("click", secondTime);
time3.addEventListener("click", thirdTime);
time4.addEventListener("click", fourthTime);

function firstTime(){
    const req = {
        reservation_time: "6:00",
    };
     
    fetch("/reservation_time", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/reservation"
        }
        else{
            alert("실행오류");
        }
    })
    .catch((err) => {
        console.error(new Error("에러발생"));
    });
}

function secondTime(){
    const req = {
        reservation_time: "7:00",
    };
    
    
    // 요청이 전달되는 경로와 형식
    fetch("/reservation_time", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/reservation"
        }
        else{
            alert("실행오류");
        }
    })
    .catch((err) => {
        console.error(new Error("에러발생"));
    });
}

function thirdTime(){
    const req = {
        reservation_time: "8:00",
    };
    
    
    // 요청이 전달되는 경로와 형식
    fetch("/reservation_time", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/reservation"
        }
        else{
            alert("실행오류");
        }
    })
    .catch((err) => {
        console.error(new Error("에러발생"));
    });
}

function fourthTime(){
    const req = {
        reservation_time: "9:00",
    };
    
    
    // 요청이 전달되는 경로와 형식
    fetch("/reservation_time", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/reservation"
        }
        else{
            alert("실행오류");
        }
    })
    .catch((err) => {
        console.error(new Error("에러발생"));
    });
}