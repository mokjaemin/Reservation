"use strict";

// 로그인 처리

//UserStorage에서 정보 가져옴
const UserStorage = require("./UserStorage");



class User {
    constructor(body){
        this.body = body;
    }

    ////!!!!////
    async login(){
        const client = this.body; //타입받은 정보
        try{
            const { id, pwd, name, number } = await UserStorage.getUserInfo(client.id); 
            // await -> 데이터가 다 로딩될때까지 기다림, async 함수안에서만 사용가능
            // padding -> 데이터가 아직 다 준비가 안됐음을 의미
            // 모든 정보가 들어오지만 아이디와 비번만 저장
            if(id){
                if(id == client.id && pwd == client.pw){
                    return {
                        success : true, 
                        name : `${name}`,
                        pw : `${pwd}`,
                        id : `${id}`,
                        number : `${number}`,
                    };
                }
                return {success : false, msg : "비밀번호가 틀렸습니다."};
            }
            return {success : false, msg : "존재하지않는 아이디입니다."};
        }
        catch(err){
            return {success : false, msg : err};
        }
    }

    ////!!!!////
    async register(){
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }

    async getUserInfoById(){
        const client = this.body;
        try{
            const response = await UserStorage.getUserInfoById(client);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }

    async couponNumber(){
        const client = this.body;
        try{
            const response = await UserStorage.couponNumber(client);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }

    async getAllUsers(){
        try{
            const response = await UserStorage.getAllUsers();
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }

    async change(){
        const client = this.body;
        try{
            const response = await UserStorage.change(client);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }
    
    async checkReservation(){
        const client = this.body;
        try{
            var table = []
            const response = await UserStorage.checkReservation(client.date, client.time);
            for(var i=0; i < response.length; i++){
                table.push(response[i].res_table);
            }
            return table;
        } catch (err) {
            return {success : false, msg : err};
        }
    }

    async ownerCheckReservation(){
        try{
            const response = await UserStorage.ownerCheckReservation();
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }

    async registerReservation(){
        const client = this.body;
        try{
            const response = await UserStorage.registerReservation(client);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }

    async cancelReservation(){
        const client = this.body;
        try{
            const response = await UserStorage.cancelReservation(client);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }

    async confirmReservation(id){
        const client = this.body;
        try{
            const response = await UserStorage.confirmReservation(id);
            const coupon = await UserStorage.couponNumber(id);
            if(coupon[0].coupon >= 10){
                const ticket = await UserStorage.ticketProcess(id);    
            }
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }

    async userCheckReservation(){
        const client = this.body;
        try{
            const response = await UserStorage.userCheckReservation(client);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }

    async userOrder(){
        const client = this.body;
        try{
            const response = await UserStorage.userOrder(client);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }
    async payReservation(){
        const client = this.body;
        try{
            const response = await UserStorage.payReservation(client);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }
    async getTicketNumber(){
        const client = this.body;
        try{
            const response = await UserStorage.getTicketNumber(client.id);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }

    async TicketNumber(id){
        try{
            const response = await UserStorage.getTicketNumber(id);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }
    async deleteTicket(){
        const client = this.body;
        try{
            const response = await UserStorage.deleteTicket(client.id);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }

    async boardCheckReservation(){
        const client = this.body;
        try{
            const response = await UserStorage.boardCheckReservation(client);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }
    async writeReview(){
        const client = this.body;
        try{
            const response = await UserStorage.writeReview(client);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }
    async getReview(id){
        try{
            var response0 = []
            var response = []
            for(var i = 0; i<id.length; i++){
                response0.push(await UserStorage.getReview(id[i]));
            }
            for(var i = 0; i<response0.length; i++){
                for(var j = 0; j<response0[i].length; j++){
                    if(response0[i][j].review != null){
                        if(response0[i][j].review != ""){
                            response.push(response0[i][j]);
                        }
                    }
                }
            }
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }

    async getTime(id){
        try{
            var response0 = []
            var response = []
            for(var i = 0; i<id.length; i++){
                response0.push(await UserStorage.getTime(id[i]));
            }
            for(var i = 0; i<response0.length; i++){
                response.push(response0[i].length)
            }
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }
    async checkAvailable(){
        const client = this.body;
        try{
            const response = await UserStorage.checkAvailable(client);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }
    async writePublicReview(){
        const client = this.body;
        try{
            const response = await UserStorage.writePublicReview(client);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }

    async bringPublicReview(){
        try{
            const response = await UserStorage.bringPublicReview();
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }

    async bringPrivateReview(){
        try{
            const response = await UserStorage.bringPrivateReview();
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }


    async handleBlacklist(){
        const client = this.body;
        try{
            const response = await UserStorage.handleBlacklist(client);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }
    async handlePublic(){
        const client = this.body;
        try{
            const response = await UserStorage.handlePublic(client);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }
    async handleOwner(){
        const client = this.body;
        try{
            const response = await UserStorage.handleOwner(client);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }

    async getReservationByMonth(){
        const client = this.body;
        try{
            const response = await UserStorage.getReservationByMonth();
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }

    async writeData(data){
        const client = this.body;
        try{
            const response = await UserStorage.writeData(data);
            return response;
        } catch (err) {
            return {success : false, msg : err};
        }
    }
}

module.exports = User;