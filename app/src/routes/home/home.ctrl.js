"use strict"; // 항상 자바스크립트에 작성
// 페이지 이동에 따른 컨트롤러 분리

// home.ctrl -> Users(로그인등 처리) -> UserStorage(데이터 저장소)


// User와 연결.
const User = require("../../models/User");

const output = {
    home: (req, res)=>{
        res.render("home/index")
    },
    login: (req, res)=>{
        res.render("home/login")
    },
    register: (req, res)=>{
        res.render("home/register")
    },
};

const process = {
    login: (req, res)=>{
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
    register: (req, res)=>{
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};


// 이 js를 사용할 수 있도록 외부로 송출
module.exports = {
    output,
    process,
};