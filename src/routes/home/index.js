"use strict";
// 라우팅 페이지 -> 주소에 따른 뷰 불러오기

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl"); // home.ctrl 과 연결


router.get("/", ctrl.home);
router.get("/login", ctrl.login);

// 현재 라우터를 외부에서 사용할 수 있도록 설정.
module.exports = router;