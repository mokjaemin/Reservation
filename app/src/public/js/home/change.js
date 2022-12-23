"use strict";


const id = document.querySelector("#id"); // ejs에 있는 선택자 불러옴 id로
const pw = document.querySelector("#pw");
const username = document.querySelector("#name");
const number = document.querySelector("#number");
const registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", change);

function change(){
    if (!id.value) return alert("아이디를 입력해주세요.");
    if (!username.value) return alert("이름 입력해주세요.");
    if (!pw.value) return alert("비밀번호를 입력해주세요.");
    if (!number.value) return alert("전화번호 확인을 입력해주세요.");

    
    const req = {
        id: id.value,
        name: username.value,
        pw: pw.value,
        number: number.value
    };
    
    
    // 요청이 전달되는 경로와 형식
    fetch("/change", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/login"
        }
        else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원정보 변경 중 에러발생"));
    });
}