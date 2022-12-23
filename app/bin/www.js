// 주소 메인
// 불러오기 순서
// home.ctrl -> index -> app -> www
// 서버 가동 명령어 설정 -> package.json -> script -> start 설정.


"use strict";
const app = require("../app"); // app.js 불러오기
const PORT = 80;

app.listen(PORT, ()=>{
    console.log("서버가동");
});