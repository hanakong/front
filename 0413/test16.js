// test16.js
'use strict';

let su1 = 10;
let su2 = -20;
let su3 = 3.14;
let su4 = -3.14;
let su5 = -31.4;
let num = 0;

num = Math.min(su1, su2);
num = Math.min(su1, su2, su3, su4, su5);
num = Math.max(su1, su2, su3, su4, su5);

num = Math.ceil(su3); //올림
num = Math.floor(su3); //내림
num = Math.ceil(su4); //올림
num = Math.floor(su4); //내림

num = Math.trunc(su3); //무조건 자르기
num = Math.trunc(su4); //무조건 자르기

num = Math.pow(2,5); // 지수값(2^5)
num = Math.sqrt(4); // 제곱근
num = Math.abs(su3); //절대값
num = Math.random(); //난수(0(포함)~1(불포함)사이의 난수)
num = Math.random()*10; 
num = parseInt(Math.random()*10); /* 0~9까지 난수 */
num = parseInt(Math.random()*10)+1; /* 1~10까지 난수 */
num = Math.floor(Math.random()*10)+1;

// 소수 반올림 : toFixed ()
// num = su.toFixed(1); // 소수 첫째자리 반올림
// 매개변수가 없으면 정수 반올림, 매개변수가 있으면 소수이하 반올림

// num = Math.round(su3); // 정수 반올림결과를 보고자 한다.

demo.innerHTML = num;