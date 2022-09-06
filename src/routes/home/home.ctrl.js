"use strict"; // 항상 자바스크립트에 작성
// 페이지 이동에 따른 컨트롤러 분리

const home = (req, res)=>{
    res.render("home/index")
};

const login = (req, res)=>{
    res.render("home/login")
};

// 이 js를 사용할 수 있도록 외부로 송출
module.exports = {
    home,
    login
};