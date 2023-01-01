"use strict"

const year1 = document.querySelector("#year1");
const year2 = document.querySelector("#year2");
const recap = document.querySelector("#recap");
const total = document.querySelector("#total");
const electro = document.querySelector("#electro");
const water = document.querySelector("#water");
const monthFee = document.querySelector("#monthFee");
const parttime = document.querySelector("#parttime");
const profit = document.querySelector("#profit");

year1.addEventListener("click", year_click1);
year2.addEventListener("click", year_click2);
recap.addEventListener("click", recap_click);
total.addEventListener("click", total_click);
electro.addEventListener("click", electro_click);
water.addEventListener("click", water_click);
monthFee.addEventListener("click", monthFee_click);
parttime.addEventListener("click", parttime_click);
profit.addEventListener("click", profit_click);

var year1_ava = 0;
var year2_ava = 0;
var recap_ava = 0;
var total_ava = 0;
var electro_ava = 0;
var water_ava = 0;
var monthFee_ava = 0;
var parttime_ava = 0;
var profit_ava = 0;

function year_click1(){
    if(year1_ava == 0){
        year1.style.background = 'black'
        year1_ava = 1
    }
    else if(year1_ava == 1){
        year1.style.background = '#86242a'
        year1_ava = 0
    }
}
function year_click2(){
    if(year2_ava == 0){
        year2.style.background = 'black'
        year2_ava = 1
    }
    else if(year2_ava == 1){
        year2.style.background = '#86242a'
        year2_ava = 0
    }
}
function recap_click(){
    if(recap_ava == 0){
        recap.style.background = 'black'
        recap_ava = 1
    }
    else if(recap_ava == 1){
        recap.style.background = '#86242a'
        recap_ava = 0
    }
}
function total_click(){
    if(total_ava == 0){
        total.style.background = 'black'
        total_ava = 1
    }
    else if(total_ava == 1){
        total.style.background = '#86242a'
        total_ava = 0
    }
}
function electro_click(){
    if(electro_ava == 0){
        electro.style.background = 'black'
        electro_ava = 1
    }
    else if(electro_ava == 1){
        electro.style.background = '#86242a'
        electro_ava = 0
    }
}
function water_click(){
    if(water_ava == 0){
        water.style.background = 'black'
        water_ava = 1
    }
    else if(water_ava == 1){
        water.style.background = '#86242a'
        water_ava = 0
    }
}
function monthFee_click(){
    if(monthFee_ava == 0){
        monthFee.style.background = 'black'
        monthFee_ava = 1
    }
    else if(monthFee_ava == 1){
        monthFee.style.background = '#86242a'
        monthFee_ava = 0
    }
}
function parttime_click(){
    if(parttime_ava == 0){
        parttime.style.background = 'black'
        parttime_ava = 1
    }
    else if(parttime_ava == 1){
        parttime.style.background = '#86242a'
        parttime_ava = 0
    }
}
function profit_click(){
    if(profit_ava == 0){
        profit.style.background = 'black'
        profit_ava = 1
    }
    else if(profit_ava == 1){
        profit.style.background = '#86242a'
        profit_ava = 0
    }
}
