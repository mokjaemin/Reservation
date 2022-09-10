"use strict";

// 로그인 처리

//UserStorage에서 정보 가져옴
const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    }
    login(){
        const body = this.body; //타입받은 정보
        const {id, pw} = UserStorage.getUserInfo(body.id); 
        // 모든 정보가 들어오지만 아이디와 비번만 저장
        if(id){
            if(id == body.id && pw == body.pw){
                return {success : true};
            }
            return {success : false, msg : "비밀번호가 틀렸습니다."};
        }
        return {success : false, msg : "존재하지않는 아이디입니다."};
    }
}

module.exports = User;