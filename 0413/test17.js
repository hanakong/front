//test17.js
'use strict';

// 오늘날짜를 전역변수로 선언....
const today = new Date();
const year = today.getFullYear(); // 년도 4자리
const month = today.getMonth()+1; // 월(기존월보다 -1) // 0부터 시작하기 때문에
const date = today.getDate(); // 일
const hour = today.getHours(); //시
const minute = today.getMinutes(); //분
const second = today.getSeconds(); //초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

//표준 날짜 출력
function fCheck1() {
  console.log("표준날짜 : " + today);
  demo.innerHTML = today;
}

function fCheck2() {
  console.log("편집날짜 : " + yymmdd);
  demo.innerHTML = yymmdd;
}
// 편집날짜(요일) : 0(일), 1(월) // database는 1(일), 2(월)
function fCheck3() {
  let str = today.getDay();
  let week = ['일','월','화','수','목','금','토'];
  demo.innerHTML = week[str]+"요일";
}
function fCheck4() {
  let mon = prompt("마지막날짜를 출력할 '년-월'을 입력하세요.(yyyy-mm)");
  let temp = mon.split("-"); // temp 0번에 년도 1번에 월이 들어있다
  let yy = temp[0];
  let mm = temp[1];

  let str = new Date(yy, mm, 0); //이달의 시작을 기준으로 마지막날을 잘라옴
  //new Date(년, 월, 일, 시, 분, 초)
  // let strDate = str.getFullYear() + '-';
  // strDate += (str.getMonth()+1) + '-';
  // strDate += str.getDate();
  
  // strDate = "해당월의 마지막 일자" + strDate;
  let strDate = "해당월의 마지막 일자" + yy+"-"+mm+"-"+str.getDate();

  demo.innerHTML = strDate;
}