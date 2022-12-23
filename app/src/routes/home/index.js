"use strict";
// 라우팅 페이지 -> 주소에 따른 뷰 불러오기

const express = require("express");
const fs = require("fs");
const router = express.Router();
const ctrl = require("./home.ctrl"); // home.ctrl 과 연결



router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/success", ctrl.output.success);
router.get("/logout", ctrl.output.logout);
router.get("/change", ctrl.output.change);
router.get("/reservation", ctrl.output.reservation);
router.get("/menu", ctrl.output.menu);
router.get("/coupon", ctrl.output.coupon);
router.get("/ownerReservation", ctrl.output.ownerReservation);
router.get("/customer", ctrl.output.customer);
router.get("/ai", ctrl.output.ai);
router.get("/time", ctrl.output.time);
router.get("/success_res", ctrl.output.success_res);
router.get("/date", ctrl.output.date);
router.get("/order", ctrl.output.order);
router.get("/board", ctrl.output.board);
router.get("/toOwner", ctrl.output.toOwner);
router.get("/toPublic", ctrl.output.toPublic);
router.get("/writeReview", ctrl.output.writeReview);
router.get("/writePublicReview", ctrl.output.writePublicReview);
router.get("/handleInformation", ctrl.output.handleInformation);
router.get("/handleBoard", ctrl.output.handleBoard);
router.get("/handleOwner", ctrl.output.handleOwner);
router.get("/handlePublic", ctrl.output.handlePublic);
router.get("/handleOwnerNoComment", ctrl.output.handleOwnerNoComment);
router.get("/handlePublicNoComment", ctrl.output.handlePublicNoComment);
router.get("/selectStore", ctrl.output.selectStore);
router.get("/contact", ctrl.output.contact);
router.get("/profit", ctrl.output.profit);
router.get("/predictCustomer", ctrl.output.predictCustomer);
router.get("/analyzeWork", ctrl.output.analyzeWork);
router.get("/analyzeCustomer", ctrl.output.analyzeCustomer);
router.get("/analyzeLocation", ctrl.output.analyzeLocation);
router.get("/profitDay", ctrl.output.profitDay);
router.get("/profitMonth", ctrl.output.profitMonth);
router.get("/writeData", ctrl.output.writeData);








// ejs와 연결된 js로부터 post 요청이 오면 실행됨.
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post("/change", ctrl.process.change);
router.post("/reservation", ctrl.process.reservation);
router.post("/reservation_time", ctrl.process.reservation_time);
router.post("/reservation_date", ctrl.process.reservation_date);
router.post("/cancelReservation", ctrl.process.cancelReservation);
router.post("/confirmReservation", ctrl.process.confirmReservation);
router.post("/customerOrder", ctrl.process.customerOrder);
router.post("/toOwner", ctrl.process.toOwner);
router.post("/writeReview", ctrl.process.writeReview);
router.post("/toPublic", ctrl.process.toPublic);
router.post("/writePublicReview", ctrl.process.writePublicReview);
router.post("/handleBlacklist", ctrl.process.handleBlacklist);
router.post("/handlePublic", ctrl.process.handlePublic);
router.post("/handleOwner", ctrl.process.handleOwner);
router.post("/writeData", ctrl.process.writeData);


// 현재 라우터를 외부에서 사용할 수 있도록 설정.
module.exports = router;