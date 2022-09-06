"use strict";

// 백 들여쓰기 shift + tab
// express(모듈)로 서버 열기 http://localhost:3000/

const express = require("express");
const app = express();


// 앱 세팅 (프론트, 지정파일에 있는 ejs프론트 연결)
app.set("views", "./views");
app.set("view engine", "ejs");


// 예를들어 '/'라는 요청 받을시 응답으로 "여기는 루트입니다."를 보냄
// 즉, html 문서를 문자처리해서 res.send 안에 넣어도 무방(탭위에)


// index.js와 연결
const home = require("./routes/home")
app.use("/", home); // use -> 미들웨어를 등록해주는 메소드


// 내보내기 
module.exports = app;

