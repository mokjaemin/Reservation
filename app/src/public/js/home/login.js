"use strict";

const { application } = require("express");


// login.ejs와 연결된 js 파일
// login.ejs에 script 안에 defer를 써주어야 타이밍 맞음(콘솔과 입력간)

const id = document.querySelector("#id"); // ejs에 있는 선택자 불러옴 id로
const pw = document.querySelector("#pw");
const loginBtn = document.querySelector("button"); // 얘는 태그 자체로 불러왔음.


loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        pw: pw.value,
    };
    
    // 요청이 전달되는 경로와 형식
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req)
    })
}