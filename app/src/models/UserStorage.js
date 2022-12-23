"use strict"

// 데이터 저장소와 연결

// const fs = require("fs").promises; //users.json을 불러오기위한 모듈
const db = require("../config/db")


class UserStorage{
    

    static getUserInfo(id){
        // 에러시 resolve 성공시 reject
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query = "SELECT * FROM home_users WHERE id = ?;"
            db.query(query, [id], (err, data)=>{
                if(err)
                    reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static getUserInfoById(id){
        // 에러시 resolve 성공시 reject
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query = "SELECT * FROM users WHERE id = ?;"
            db.query(query, [id], (err, data)=>{
                if(err)
                    reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static getAllUsers(){
        // 에러시 resolve 성공시 reject
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query = "SELECT * FROM users;"
            db.query(query, (err, data)=>{
                if(err)
                    reject(`${err}`);
                resolve(data);
            });
        });
    }

    static getUserId(name){
        // 에러시 resolve 성공시 reject
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query = "SELECT id FROM users WHERE name = ?;"
            db.query(query, [name], (err, data)=>{
                if(err)
                    reject(`${err}`);
                resolve(data);
            });
        });
    }



    ////!!!!////
    static async save(userInfo){
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query = "INSERT INTO home_users(id, name, pwd, number) VALUES(?, ?, ?, ?);"
            const query2 = "INSERT INTO users(id, name, pwd, number) VALUES(?, ?, ?, ?);"
            db.query(query, 
                [userInfo.id, userInfo.name, userInfo.pw, userInfo.number], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
            db.query(query2, 
                [userInfo.id, userInfo.name, userInfo.pw, userInfo.number], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
        });
    }

    static async change(userInfo){
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query1 = "DELETE FROM users WHERE id = ?;"
            const query2 = "INSERT INTO users(id, name, pwd, number, coupon, ticket, visit, available_board, blacklist, reason, in_date) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"
            const query3 = "DELETE FROM home_users WHERE id = ?"
            const query4 = "INSERT INTO home_users(id, name, pwd, number, in_date) VALUES (?, ?, ?, ?, ?)"
            db.query(query1, 
                [userInfo.originalid], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
            db.query(query3, 
                [userInfo.originalid], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
            db.query(query2, 
                [userInfo.id, userInfo.name, userInfo.pw, userInfo.number, userInfo.originalcoupon, userInfo.ticket, 
                    userInfo.visit, userInfo.avilable_board, userInfo.blacklist, userInfo.reason, userInfo.in_date], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
            db.query(query4, 
                [userInfo.id, userInfo.name, userInfo.pw, userInfo.number, userInfo.in_date], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
        });
    }

    static checkReservation(date, time){
        // 에러시 resolve 성공시 reject
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query = "SELECT * FROM reservation WHERE res_date = ? and res_time = ?;"
            db.query(query, [date, time], (err, data)=>{
                if(err)
                    reject(`${err}`);
                resolve(data);
            });
        });
    }

    static ownerCheckReservation(){
        // 에러시 resolve 성공시 reject
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query = "SELECT * FROM reservation;"
            db.query(query, (err, data)=>{
                if(err)
                    reject(`${err}`);
                resolve(data);
            });
        });
    }

    static async registerReservation(userInfo){
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query = "INSERT INTO reservation(id, name, res_date, res_table, res_time, res_day) VALUES(?, ?, ?, ?, ?, ?);"
            db.query(query, 
                [userInfo.id, userInfo.name, userInfo.date, userInfo.table, userInfo.time, userInfo.day],
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
        });
    }


    static async cancelReservation(userInfo){
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query = "DELETE FROM reservation WHERE res_date = ? and res_time = ? and res_table = ?;"
            db.query(query, 
                [userInfo.date, userInfo.time, userInfo.table], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
        });
    }

    static confirmReservation(id){
        // 에러시 resolve 성공시 reject
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query1 = "UPDATE users set coupon = coupon +1 where id = ?";
            const query2 = "UPDATE users set available_board = 1 where id = ?";
            const query3 = "UPDATE users set visit = visit +1 where id = ?";
            db.query(query1, [id], (err)=>{
                if(err)
                    reject(`${err}`);
                resolve({success : true});
            });
            db.query(query2, [id], (err)=>{
                if(err)
                    reject(`${err}`);
                resolve({success : true});
            });
            db.query(query3, [id], (err)=>{
                if(err)
                    reject(`${err}`);
                resolve({success : true});
            });
        });
    }

    static userCheckReservation(name){
        // 에러시 resolve 성공시 reject
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query = "SELECT * FROM reservation WHERE name = ?;"
            db.query(query, [name], (err, data)=>{
                if(err)
                    reject(`${err}`);
                resolve(data);
            });
        });
    }

    static getTicketNumber(id){
        // 에러시 resolve 성공시 reject
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query = "SELECT ticket FROM users WHERE id = ?;"
            db.query(query, [id], (err, data)=>{
                if(err)
                    reject(`${err}`);
                resolve(data);
            });
        });
    }

    static async userOrder(userInfo){
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query1 = "UPDATE reservation set steak1 = ? where res_date = ? AND res_table = ? AND res_time = ?;"
            const query2 = "UPDATE reservation set steak2 = ? where res_date = ? AND res_table = ? AND res_time = ?;"
            const query3 = "UPDATE reservation set total = ? where res_date = ? AND res_table = ? AND res_time = ?;"
            db.query(query1, 
                [userInfo.input1, userInfo.date, userInfo.table, userInfo.time], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
            db.query(query2, 
                [userInfo.input2, userInfo.date, userInfo.table, userInfo.time], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
            db.query(query3, 
                [userInfo.sum, userInfo.date, userInfo.table, userInfo.time], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
        });
    }
    static async payReservation(userInfo){
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query1 = "UPDATE reservation set steak1 = ? where res_date = ? AND res_table = ? AND res_time = ?;"
            const query2 = "UPDATE reservation set steak2 = ? where res_date = ? AND res_table = ? AND res_time = ?;"
            const query3 = "UPDATE reservation set total = ? where res_date = ? AND res_table = ? AND res_time = ?;"
            const query4 = "UPDATE reservation set pay = ? where res_date = ? AND res_table = ? AND res_time = ?;"
            db.query(query1, 
                [userInfo.input1, userInfo.date, userInfo.table, userInfo.time], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
            db.query(query2, 
                [userInfo.input2, userInfo.date, userInfo.table, userInfo.time], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
            db.query(query3, 
                [userInfo.sum, userInfo.date, userInfo.table, userInfo.time], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
            db.query(query4, 
                ["1", userInfo.date, userInfo.table, userInfo.time], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
        });
    }

    static boardCheckReservation(name){
        // 에러시 resolve 성공시 reject
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query = "SELECT * FROM reservation WHERE id = ? AND pay = 1;"
            db.query(query, [name], (err, data)=>{
                if(err)
                    reject(`${err}`);
                resolve(data);
            });
        });
    }

    static couponNumber(id){
        // 에러시 resolve 성공시 reject
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query = "SELECT coupon FROM users WHERE id = ?;"
            db.query(query, [id], (err, data)=>{
                if(err)
                    reject(`${err}`);
                resolve(data);
            });
        });
    }

    static async writeReview(userInfo){
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query1 = "UPDATE reservation set review = ? where res_date = ? AND res_table = ? AND res_time = ?;"
            db.query(query1, 
                [userInfo.review, userInfo.date, userInfo.table, userInfo.time], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
        });
    }
    static async deleteTicket(id){
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query1 = "UPDATE users set ticket = ticket - 1 WHERE id = ?;"
            db.query(query1, 
                [id], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
        });
    }

    static getReview(id){
        // 에러시 resolve 성공시 reject
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query = "SELECT review, id, in_date FROM reservation WHERE id = ?;"
            db.query(query, [id], (err, data)=>{
                if(err)
                    reject(`${err}`);
                resolve(data);
            });
        });
    }

    static getTime(id){
        // 에러시 resolve 성공시 reject
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query = "SELECT id FROM reservation WHERE id = ? AND pay=1;"
            db.query(query, [id], (err, data)=>{
                if(err)
                    reject(`${err}`);
                resolve(data);
            });
        });
    }
    static checkAvailable(id){
        // 에러시 resolve 성공시 reject
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query = "SELECT available_board FROM users WHERE id = ?;"
            db.query(query, [id], (err, data)=>{
                if(err)
                    reject(`${err}`);
                resolve(data);
            });
        });
    }
    static async writePublicReview(userInfo){
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query1 = "INSERT INTO openreview(title, review, rating, id) values(?, ?, ?, ?);"
            db.query(query1, 
                [userInfo.title, userInfo.context, userInfo.rating, userInfo.id], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
        });
    }
    static bringPublicReview(){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM openreview;"
            db.query(query, (err, data)=>{
                if(err)
                    reject(`${err}`);
                resolve(data);
            });
        });
    }

    static bringPrivateReview(){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM reservation WHERE review is NOT NULL;"
            db.query(query, (err, data)=>{
                if(err)
                    reject(`${err}`);
                resolve(data);
            });
        });
    }

    static async handleBlacklist(userInfo){
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query1 = "UPDATE users set blacklist = 1 where id = ?;"
            const query2 = "UPDATE users set reason = ? where id = ?;"
            db.query(query1, 
                [userInfo.id], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
            db.query(query2, 
                [userInfo.reason ,userInfo.id], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
        });
    }

    static async ticketProcess(userInfo){
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query1 = "UPDATE users set ticket = ticket + 1 where id = ?;"
            const query2 = "UPDATE users set coupon = coupon - 9 where id = ?;"
            db.query(query1, 
                [userInfo], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
            db.query(query2, 
                [userInfo], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
        });
    }

    static async handlePublic(userInfo){
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query = "UPDATE openreview set answer = ? where title = ?;"
            db.query(query, 
                [userInfo.comment, userInfo.title], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
        });
    }
    static async handleOwner(userInfo){
        return new Promise((resolve, reject) => {
            // 에러시 err 성공시 data
            const query = "UPDATE reservation set answer = ? where res_date = ? AND res_time = ? AND res_table = ?;"
            db.query(query, 
                [userInfo.comment, userInfo.date, userInfo.time, userInfo.table], 
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
        });
    }

    static getReservationByMonth(){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM reservation WHERE pay = 1;"
            db.query(query, (err, data)=>{
                if(err)
                    reject(`${err}`);
                resolve(data);
            });
        });
    }
    

    static async writeData(userInfo){
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO profitMonth(year, month, electronicFee, waterFee, monthFee, partjobFee, total) VALUES(?, ?, ?, ?, ?, ?, ?);"
            db.query(query, 
                [userInfo.year, userInfo.month, userInfo.electronic, userInfo.water, userInfo.monthFee, userInfo.parttime, userInfo.total],
                (err)=>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
        });
    }
};

module.exports = UserStorage;