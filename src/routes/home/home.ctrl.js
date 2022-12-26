"use strict"; // 항상 자바스크립트에 작성
// 페이지 이동에 따른 컨트롤러 분리

// home.ctrl -> Users(로그인등 처리) -> UserStorage(데이터 저장소)


// User와 연결.
const User = require("../../models/User");
const db = require("../../config/db");

const {spawn} = require('child_process');
const { concatSeries } = require("async");

function check_day(day){
    if(day == 0){
        return "일요일"
    }
    if(day == 1){
        return "월요일"
    }
    if(day == 2){
        return "화요일"
    }
    if(day == 3){
        return "수요일"
    }
    if(day == 4){
        return "목요일"
    }
    if(day == 5){
        return "금요일"
    }
    if(day == 6){
        return "토요일"
    }
};

const output = {
    ////!!!!////
    home: (req, res)=>{   
        res.render("home/index")
    },
    selectStore: (req, res)=>{
        const info = {
            username : req.cookies.username,
        }
        res.render("home/selectStore", {info : info})
    },
    ////!!!!////
    login: (req, res)=>{
        res.render("home/login")
    },
    ////!!!!////
    register: (req, res)=>{
        res.render("home/register")
    },
    ////!!!!////
    success: async (req, res)=>{
        let session = req.session;

        session.cookie.username = req.cookies.username
        session.cookie.userid = req.cookies.userid
        session.cookie.userpw = req.cookies.userpw
        session.cookie.usernumber = req.cookies.usernumber
        if(session.cookie.userid){
            res.render("home/success", {session : session})
        }
        else{
            res.render("home/login")
        }
    },
    logout: (req, res)=>{
        // req.session.destroy();
        // res.clearCookie('sid');
        res.redirect("/login")
    },
    change: (req, res)=>{
        let session = req.session;
        session.cookie.username = req.cookies.username
        session.cookie.userid = req.cookies.userid
        session.cookie.userpw = req.cookies.userpw
        session.cookie.usernumber = req.cookies.usernumber
        res.render("home/change", {session : session})
    },
    reservation: async (req, res)=>{    
        const info = {
            date : req.cookies.reservation_date,
            time : req.cookies.reservation_time,
        }
        const user = new User(info);
        const test = await user.checkReservation();
        const info2 = {
            table1 : "",
            table2 : "",
            table3 : "",
            table4 : "",
        }
        if(test.includes("table1")){
            info2.table1 = "o"
        }
        if(test.includes("table2")){
            info2.table2 = "o"
        }
        if(test.includes("table3")){
            info2.table3 = "o"
        }
        if(test.includes("table4")){
            info2.table4 = "o"
        }
        res.render("home/reservation", {info2 : info2})
    },
    menu: (req, res)=>{
        res.render("home/menu")
    },
    coupon: async (req, res)=>{
        let session = req.session;
        const user0 = new User(req.cookies.userid);
        const coupon = await user0.couponNumber();
        session.cookie.usercoupon = coupon[0].coupon
        const user = new User();
        const ticketNumber = await user.TicketNumber(req.cookies.userid);
        session.cookie.ticket = ticketNumber[0].ticket;
        res.render("home/coupon", {session : session})
    },
    ownerReservation: async (req, res)=>{
        const user = new User();
        const response = await user.ownerCheckReservation();

        let today  = new Date();
        let today_date = today.getDate()
        let today_month = today.getMonth()+1
        var today_day = today.getDay()
        var today_day = check_day(today_day)

        var orientation = new Date();
        let tmr = new Date(orientation.setDate(orientation.getDate()+1))
        let tmr_date = tmr.getDate()
        let tmr_month = tmr.getMonth() + 1
        var tmr_day = today.getDay()
        var tmr_day = check_day(tmr_day)

        var orientation = new Date();
        let twoDays = new Date(orientation.setDate(orientation.getDate()+2))
        let twoDays_date = twoDays.getDate()
        let twoDays_month = twoDays.getMonth() + 1
        var twoDays_day = today.getDay()
        var twoDays_day = check_day(twoDays_day)

        var orientation = new Date();
        let threeDays = new Date(orientation.setDate(orientation.getDate()+3))
        let threeDays_date= threeDays.getDate()
        let threeDays_month = threeDays.getMonth() + 1
        var threeDays_day = today.getDay()
        var threeDays_day = check_day(threeDays_day)

        
        let date1 = today_month + "월" + today_date + "일"
        let date2 = tmr_month + "월" + tmr_date + "일"
        let date3 = twoDays_month + "월" + twoDays_date + "일"
        let date4 = threeDays_month + "월" + threeDays_date + "일"
        // console.log(today)
        // console.log(tmr)
        // console.log(twoDays)
        // console.log(threeDays)

        var day1 = []
        var day2 = []
        var day3 = []
        var day4 = []

        for(var i = 0; i < response.length; i++){
            if(response[i].res_date == date1){
                day1.push(response[i]);
            }
            else if(response[i].res_date == date2){
                day2.push(response[i]);
            }
            else if(response[i].res_date == date3){
                day3.push(response[i]);
            }
            else if (response[i].res_date == date4){
                day4.push(response[i]);
            }
        }
        day1.sort(function(a,b){
            return a.res_time[0] - b.res_time[0]
        })
        day2.sort(function(a,b){
            return a.res_time[0] - b.res_time[0]
        })
        day3.sort(function(a,b){
            return a.res_time[0] - b.res_time[0]
        })
        day4.sort(function(a,b){
            return a.res_time[0] - b.res_time[0]
        })

        const info = {
            day1 : day1,
            day2 : day2,
            day3 : day3,
            day4 : day4,
        }
        var id = []
        for(var i = 0; i < day1.length; i++){
            id.push(day1[i].id)
        }
        for(var i = 0; i < day2.length; i++){
            id.push(day2[i].id)
        }
        for(var i = 0; i < day3.length; i++){
            id.push(day3[i].id)
        }
        for(var i = 0; i < day4.length; i++){
            id.push(day4[i].id)
        }

        // 방문 리뷰 따기
        var id = Array.from(new Set(id));
        const getReview = await user.getReview(id);
        var del_idx = []
        for(var i = 0; i<getReview.length; i++){
            for(var j = 0; j<getReview.length; j++){
                if(getReview[i].id == getReview[j].id){
                    if(i != j){
                        if(getReview[i].in_date > getReview[j].in_date){
                            del_idx.push(j)
                        }
                    }
                }
            }
        }
        del_idx = Array.from(new Set(del_idx));
        var ok_idx = []
        var newgetReview = []
        for(var i = 0; i < getReview.length; i++){
            ok_idx.push(i)
        }
        ok_idx = ok_idx.filter(x=>!del_idx.includes(x))
        for(var i = 0; i < ok_idx.length; i++){
            newgetReview.push(getReview[ok_idx[i]])
        }
        info.review = newgetReview

        // 방문 회수 따기
        // const getTime = await user.getTime(id);
        // info.idlist = id
        // info.getTime = getTime
        // console.log(info)
        

        res.render("home/ownerReservation", {info : info})
    },
    ai: (req, res)=>{
        res.render("home/ai")
    },
    customer: (req, res)=>{
        res.render("home/customer")
    },
    time: (req, res)=>{       
        res.render("home/time")
    },
    success_res: (req, res)=>{
        res.render("home/success_res")
    },
    date: (req, res)=>{
        
        let today  = new Date();
        let today_date = today.getDate()
        let today_month = today.getMonth()+1
        var today_day = today.getDay()
        var today_day = check_day(today_day)

        var orientation = new Date();
        let tmr = new Date(orientation.setDate(orientation.getDate()+1))
        let tmr_date = tmr.getDate()
        let tmr_month = tmr.getMonth() + 1
        var tmr_day = today.getDay()
        var tmr_day = check_day(tmr_day)

        var orientation = new Date();
        let twoDays = new Date(orientation.setDate(orientation.getDate()+2))
        let twoDays_date = twoDays.getDate()
        let twoDays_month = twoDays.getMonth() + 1
        var twoDays_day = today.getDay()
        var twoDays_day = check_day(twoDays_day)

        var orientation = new Date();
        let threeDays = new Date(orientation.setDate(orientation.getDate()+3))
        let threeDays_date= threeDays.getDate()
        let threeDays_month = threeDays.getMonth() + 1
        var threeDays_day = today.getDay()
        var threeDays_day = check_day(threeDays_day)
        
        let date1 = today_month + "월" + today_date + "일"
        let date2 = tmr_month + "월" + tmr_date + "일"
        let date3 = twoDays_month + "월" + twoDays_date + "일"
        let date4 = threeDays_month + "월" + threeDays_date + "일"


        let session = req.session;
        session.cookie.reservation_date1 = date1;
        session.cookie.reservation_date2 = date2;
        session.cookie.reservation_date3 = date3;
        session.cookie.reservation_date4 = date4;

        res.render("home/date", {session : session})
    },
    order: async (req, res)=>{    
        const user = new User(req.cookies.username);
        const response = await user.userCheckReservation();

        let today  = new Date();
        let today_date = today.getDate()
        let today_month = today.getMonth()+1
        var today_day = today.getDay()
        var today_day = check_day(today_day)

        var orientation = new Date();
        let tmr = new Date(orientation.setDate(orientation.getDate()+1))
        let tmr_date = tmr.getDate()
        let tmr_month = tmr.getMonth() + 1
        var tmr_day = today.getDay()
        var tmr_day = check_day(tmr_day)

        var orientation = new Date();
        let twoDays = new Date(orientation.setDate(orientation.getDate()+2))
        let twoDays_date = twoDays.getDate()
        let twoDays_month = twoDays.getMonth() + 1
        var twoDays_day = today.getDay()
        var twoDays_day = check_day(twoDays_day)

        var orientation = new Date();
        let threeDays = new Date(orientation.setDate(orientation.getDate()+3))
        let threeDays_date= threeDays.getDate()
        let threeDays_month = threeDays.getMonth() + 1
        var threeDays_day = today.getDay()
        var threeDays_day = check_day(threeDays_day)
        
        let date1 = today_month + "월" + today_date + "일"
        let date2 = tmr_month + "월" + tmr_date + "일"
        let date3 = twoDays_month + "월" + twoDays_date + "일"
        let date4 = threeDays_month + "월" + threeDays_date + "일"

        var day1 = []
        var day2 = []
        var day3 = []
        var day4 = []

        for(var i = 0; i < response.length; i++){
            if(response[i].res_date == date1){
                day1.push(response[i]);
            }
            else if(response[i].res_date == date2){
                day2.push(response[i]);
            }
            else if(response[i].res_date == date3){
                day3.push(response[i]);
            }
            else if (response[i].res_date == date4){
                day4.push(response[i]);
            }
        }
        day1.sort(function(a,b){
            return a.res_time[0] - b.res_time[0]
        })
        day2.sort(function(a,b){
            return a.res_time[0] - b.res_time[0]
        })
        day3.sort(function(a,b){
            return a.res_time[0] - b.res_time[0]
        })
        day4.sort(function(a,b){
            return a.res_time[0] - b.res_time[0]
        })

        const info = {
            day1 : day1,
            day2 : day2,
            day3 : day3,
            day4 : day4,
        }
        res.render("home/order", {info : info})
    },
    board: (req, res)=>{
        res.render("home/board")
    },
    toOwner: async (req, res)=>{
        const user = new User(req.cookies.userid);
        const response = await user.boardCheckReservation();
        res.render("home/toOwner", {response : response})
    },
    writeReview: (req, res)=>{
        let info = {
            date : req.cookies.reviewDate,
            time : req.cookies.reviewTime,
            table : req.cookies.reviewTable,
        };
        res.render("home/writeReview", {info : info})
    },
    toPublic: async (req, res)=>{
        const user = new User();
        const response = await user.bringPublicReview();
        res.render("home/toPublic", {info : response})
    },
    writePublicReview: (req, res)=>{
        res.render("home/writePublicReview")
    },
    handleInformation: async (req, res)=>{
        const user = new User();
        var info = await user.getAllUsers();
        delete info[0]; // 빈 값 삭제
        res.render("home/handleInformation", {info : info})
    },
    handleBoard: (req, res)=>{
        res.render("home/handleBoard")
    },
    handleOwner: async (req, res)=>{
        const user = new User();
        const response = await user.bringPrivateReview();
        res.render("home/handleOwner", {info : response})
    },
    handlePublic: async (req, res)=>{
        const user = new User();
        const response = await user.bringPublicReview();
        res.render("home/handlePublic", {info : response})
    },
    handlePublicNoComment: async (req, res)=>{
        const user = new User();
        const response = await user.bringPublicReview();
        const info = []
        for(var i = 0; i < response.length; i++){
            if(response[i].answer == "아직 답변이 없습니다."){
                info.push(response[i]);
            }
        }
        res.render("home/handlePublicNoComment", {info : info})
    },
    handleOwnerNoComment: async (req, res)=>{
        const user = new User();
        const response = await user.bringPrivateReview();
        const info = []
        for(var i = 0; i < response.length; i++){
            if(response[i].answer == null){
                info.push(response[i]);
            }
        }
        res.render("home/handleOwnerNoComment", {info : info})
    },
    contact: async (req, res)=>{
        res.render("home/contact")
    },
    writeData: async (req, res)=>{
        res.render("home/writeData")
    },
    profit: async (req, res)=>{
        const user = new User();
        const response = await user.profitMonth();

        var month = []
        var year = []
        var total = []
        var electronicFee = []
        var waterFee = []
        var monthFee = []
        var partjobFee = []

        for(var i=0; i<response.length; i++){
            month[i] = response[i].month
            year[i] = response[i].year
            total[i] = response[i].total
            electronicFee[i] = response[i].electronicFee
            waterFee[i] = response[i].waterFee
            monthFee[i] = response[i].monthFee
            partjobFee[i] = response[i].partjobFee
        }


        const result = spawn('python3', ['src//public/python/home/profit_month.py', month, year, total, electronicFee, waterFee, monthFee, partjobFee]);
        result.stdout.on('data', function(data) {
            console.log(data.toString());
        });
        result.stderr.on('data', function(data) {
            console.log(data.toString());
        });
        res.render("home/profit")
    },
    profitMonth: async (req, res)=>{
        // const result = spawn('python3', ['src//public/python/home/test.py', month12_total, "수익"]);
        // result.stdout.on('data', function(data) {
        //     console.log(data.toString());
        //     // const info = data.toString();
        // });
        // result.stderr.on('data', function(data) {
        //     console.log(data.toString());
        // });
        res.render("home/profitMonth")
    },
    profitDay: async (req, res)=>{
        // const result = spawn('python3', ['src//public/python/home/test.py', month12_total, "수익"]);
        // result.stdout.on('data', function(data) {
        //     console.log(data.toString());
        //     // const info = data.toString();
        // });
        // result.stderr.on('data', function(data) {
        //     console.log(data.toString());
        // });
        res.render("home/profitDay")
    },
    predictCustomer: async (req, res)=>{
        res.render("home/predictCustomer")
    },
    analyzeCustomer: async (req, res)=>{
        res.render("home/analyzeCustomer")
    },
    analyzeLocation: async (req, res)=>{
        res.render("home/analyzeLocation")
    },
    analyzeWork: async (req, res)=>{
        res.render("home/analyzeWork")
    },
};

const process = {

    ////!!!!////
    login: async (req, res)=>{
        const user = new User(req.body);
        const response = await user.login();
        //쿠키설정
        res.cookie("username", response.name, {
                expires: new Date(Date.now() + 900000),
                httpOnly: false
        });
        res.cookie("userid", response.id, {
            expires: new Date(Date.now() + 900000),
            httpOnly: false
        });
        res.cookie("userpw", response.pw, {
            expires: new Date(Date.now() + 900000),
            httpOnly: false
        });
        res.cookie("usernumber", response.number, {
            expires: new Date(Date.now() + 900000),
            httpOnly: false
        });
        return res.json(response);
    },

    ////!!!!////
    register: async (req, res)=>{
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },

    ////!!!!////
    change: async (req, res)=>{
        const user0 = new User(req.cookies.userid);
        const pre_info = await user0.getUserInfoById();
        let session = req.session;
        session.cookie.userid = req.cookies.userid;
        req.body.originalid = session.cookie.userid;
        req.body.originalcoupon = pre_info.coupon;
        req.body.ticket = pre_info.ticket;
        req.body.visit = pre_info.visit;
        req.body.available_board = pre_info.available_board;
        req.body.blacklist = pre_info.blacklist;
        req.body.reason = pre_info.reason;
        req.body.in_date = pre_info.in_date;
        const user = new User(req.body);
        const response = await user.change();
        return res.json(response);
    },
    reservation_date: (req, res)=>{
        res.cookie("reservation_day", req.body.reservation_day, {
            expires: new Date(Date.now() + 900000),
            httpOnly: false
        });
        res.cookie("reservation_date", req.body.reservation_date, {
            expires: new Date(Date.now() + 900000),
            httpOnly: false
        });
        const response = {
            success : true
        }
        return res.json(response);
    },
    reservation_time: (req, res)=>{
        res.cookie("reservation_time", req.body.reservation_time, {
            expires: new Date(Date.now() + 900000),
            httpOnly: false
        });
        const response = {
            success : true
        }

        return res.json(response);
    },
    reservation: async (req, res)=>{
        res.cookie("reservation_table", req.body.reservation_table, {
            expires: new Date(Date.now() + 900000),
            httpOnly: false
        });
        const info = {
            id : req.cookies.userid,
            name : req.cookies.username,
            date : req.cookies.reservation_date,
            table : req.body.reservation_table,
            day : req.cookies.reservation_day,
            time : req.cookies.reservation_time,
        }
        const user = new User(info);
        const response = await user.registerReservation();
        return res.json(response);
    },
    cancelReservation: async (req, res)=>{
        const user = new User(req.body);
        const test = await user.ownerCheckReservation();
        var con = 0;
        for(var i = 0; i < test.length; i++){
            if(test[i].res_date == req.body.date){
                if(test[i].res_time == req.body.time){
                    if(test[i].res_table == req.body.table){
                        const response = await user.cancelReservation();
                        return res.json(response);
                    }
                }
            }
        }
        const response = {
            success : false,
        }
        return res.json(response);
    },
    confirmReservation: async (req, res)=>{
        const user = new User(req.body);
        if(req.body.cnumber == 1){
            const ticketNumber = await user.getTicketNumber();
            if(ticketNumber[0].ticket >= 1){
                const ticketDelete = await user.deleteTicket();
            }
            else{
                const response = {
                    success : false,
                }
                return res.json(response); 
            } 
        }
        const test = await user.ownerCheckReservation();
        var con = 0;
        for(var i = 0; i < test.length; i++){
            if(test[i].res_date == req.body.date){
                if(test[i].res_time == req.body.time){
                    if(test[i].res_table == req.body.table){
                        const change = await user.confirmReservation(req.body.id);
                        if(change){
                            const changePay = await user.payReservation();
                            return res.json(changePay);
                        }
                    }
                }
            }
        }
        const response = {
            success : false,
        }
        return res.json(response);
    },
    customerOrder: async (req, res)=>{
        const user = new User(req.body);
        const response = await user.userOrder();
        return res.json(response);
    },
    toOwner: async (req, res)=>{
        res.cookie("reviewDate", req.body.date, {
            expires: new Date(Date.now() + 900000),
            httpOnly: false
        });
        res.cookie("reviewTime", req.body.time, {
            expires: new Date(Date.now() + 900000),
            httpOnly: false
        });
        res.cookie("reviewTable", req.body.table, {
            expires: new Date(Date.now() + 900000),
            httpOnly: false
        });
        const response = {
            success : true,
        } 
        return res.json(response);
    },
    writeReview: async (req, res)=>{
        const user = new User(req.body);
        const response = await user.writeReview();
        return res.json(response);
    },
    toPublic: async (req, res)=>{
        const response = {
            success : false,
        }
        if(req.cookies.userid){
            const user = new User(req.cookies.userid);
            const response0 = await user.checkAvailable();
            console.log(response0)
            if(response0[0].available_board == 1){
                response.success = true
            }
            return res.json(response);
        }
        else{
            return res.json(response);
        }
    },
    writePublicReview: async (req, res)=>{
        if(req.cookies.userid){
            const id = req.cookies.userid;
            req.body.id = id;
            const user = new User(req.body);
            const response = await user.writePublicReview();
            return res.json(response);
        }
        else{
            const response = {
                success : false,
            }
            return res.json(response);
        }
    },
    handleBlacklist: async (req, res)=>{
        const user = new User(req.body);
        const response = await user.handleBlacklist();
        return res.json(response);
    },
    handlePublic: async (req, res)=>{
        const user = new User(req.body);
        const response = await user.handlePublic();
        return res.json(response);
    },
    handleOwner: async (req, res)=>{
        const user = new User(req.body);
        const response = await user.handleOwner();
        return res.json(response);
    },
    writeData: async (req, res)=>{
        const user = new User(req.body);
        const data = await user.getReservationByMonth();
        const month = req.body.month
        const year = req.body.year

        var month_data = []
        var month_total = 0

        for(var i=0; i<data.length; i++){
            if(month.length == 2){
                if(data[i].res_year == year){
                    if(data[i].res_date.slice(0,2) == month){
                        month_data.push(data[i])
                        month_total += parseInt(data[i].total)
                    }
                }
            }
            if(month.length == 1){
                if(data[i].res_year == year){
                    if(data[i].res_date.slice(0,1) == month){
                        month_data.push(data[i])
                        month_total += parseInt(data[i].total)
                    }
                }
            }
        }
        req.body.total = month_total;
        const response = await user.writeData(req.body);
        return res.json(response);
    },
};


// 이 js를 사용할 수 있도록 외부로 송출
module.exports = {
    output,
    process,
};