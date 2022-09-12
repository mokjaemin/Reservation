"use strict";

// register.ejs와 연결된 js 파일
// register.ejs에 script 안에 defer를 써주어야 타이밍 맞음(콘솔과 입력간)

const id = document.querySelector("#id"); // ejs에 있는 선택자 불러옴 id로
const pw = document.querySelector("#pw");
const confirmpw = document.querySelector("#confirm-pw");
const username = document.querySelector("#name");
const registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
    if (!id.value) return alert("아이디를 입력해주세요.");
    if (!username.value) return alert("이름 입력해주세요.");
    if (!pw.value) return alert("비밀번호를 입력해주세요.");
    if (!confirmpw.value) return alert("비밀번호 확인을 입력해주세요.");
    if (pw.value !== confirmpw.value) return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id: id.value,
        name: username.value,
        pw: pw.value,
    };
    
    
    // 요청이 전달되는 경로와 형식
    fetch("/register", {
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
        console.error(new Error("회원가입 중 에러발생"));
    });
}