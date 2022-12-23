"use strict";



const table1 = document.querySelector("#table1");
const table2 = document.querySelector("#table2");
const table3 = document.querySelector("#table3");
const table4 = document.querySelector("#table4");


table1.addEventListener("click", firstTable);
table2.addEventListener("click", secondTable);
table3.addEventListener("click", thirdTable);
table4.addEventListener("click", fourthTable);


function firstTable(){
    const req = {
        reservation_table: "table1",
    };
    
    
    // 요청이 전달되는 경로와 형식
    fetch("/reservation", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/success_res"
        }
        else{
            alert("이미 예약된 자리입니다.");   
        }
    })
    .catch((err) => {
        console.error(new Error("에러발생"));
    });
}

function secondTable(){
    const req = {
        reservation_table: "table2",
    };
    

    
    // 요청이 전달되는 경로와 형식
    fetch("/reservation", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/success_res"
        }
        else{
            alert("이미 예약된 자리입니다.");
        }
    })
    .catch((err) => {
        console.error(new Error("에러발생"));
    });
}

function thirdTable(){
    const req = {
        reservation_table: "table3",
    };
    
    
    // 요청이 전달되는 경로와 형식
    fetch("/reservation", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/success_res"
        }
        else{
            alert("이미 예약된 자리입니다.");
            
        }
    })
    .catch((err) => {
        console.error(new Error("에러발생"));
    });
}

function fourthTable(){
    const req = {
        reservation_table: "table4",
    };
    
    
    // 요청이 전달되는 경로와 형식
    fetch("/reservation", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/success_res"
        }
        else{
            alert("이미 예약된 자리입니다.");
        }
    })
    .catch((err) => {
        console.error(new Error("에러발생"));
    });
}