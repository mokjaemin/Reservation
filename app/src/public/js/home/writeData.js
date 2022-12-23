"use strict";

const electronic = document.querySelector("#electronicFee");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const water = document.querySelector("#waterFee");
const parttime = document.querySelector("#parttimeFee");
const monthFee = document.querySelector("#monthFee");

const sendBtn = document.querySelector("#send");

sendBtn.addEventListener("click", send);

function send(){
    if(year.value.length != 4){return alert("연도의 형식이 올바르지 않습니다.")}
    if(month.value.length != 1 && month.value.length != 2){return alert("월의 형식이 올바르지 않습니다.")}
    if(!Number(year.value)){return alert("연도 입력시 숫자만 가능합니다.")}
    if(!Number(month.value)){return alert("월 입력시 숫자만 가능합니다.")}
    if(!Number(electronic.value)){return alert("전기세 입력시 숫자만 가능합니다.") }
    if(!Number(parttime.value)){return alert("알바비 입력시 숫자만 가능합니다.")}
    if(!Number(water.value)){return alert("물세 입력시 숫자만 가능합니다.")}
    if(!Number(monthFee.value)){return alert("물세 입력시 숫자만 가능합니다.")}
    const req = {
        year : year.value,
        month : month.value,
        electronic : electronic.value,
        water : water.value,
        parttime : parttime.value,
        monthFee : monthFee.value,
    };

    fetch("/writeData", {
    method: "POST",
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            alert("등록완료")
            location.href = "/profit"
        }
        else{
            alert("해당 연월에 해당데이터가 이미 존재합니다.");
            alert("담당자에게 문의해주세요.");
        }
    })
    .catch((err) => {
        console.error(new Error("데이터 전송 중 에러발생"));
    });

}