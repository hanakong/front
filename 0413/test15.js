// test15.js
'use strict';

let text1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcde';
let text2 = '   ABC   BCDEF   GHI   JKLMN..... ABC... OPQ';

// demo.innerHTML = 
// demo.innerHTML = text1;
// demo.innerHTML = text1.length;
// demo.innerHTML = text1.substring(10,0);
// demo.innerHTML = text1.slice(10,0);
// demo.innerHTML = text1.substr(0,10);
// demo.innerHTML = text1.replace('ABC','opq');
// demo.innerHTML = text2.toUpperCase();
// demo.innerHTML = text1.toLowerCase();
// demo.innerHTML = text2.concat("안녕","1234");
// demo.innerHTML = text2.trim()+"abc";
// demo.innerHTML = text2.trimStart()+"abc";
// demo.innerHTML = text2.trimEnd()+"abc";
// demo.innerHTML = text2.replaceAll(' ','');
// demo.innerHTML = text1.charAt(10);

// let mbc = text2.split('ABC');
// demo.innerHTML = mbc;
// demo.innerHTML = typeof(mbc);

// let temp = '';
// for(let item of mbc) {
//   console.log(item);
//   temp += item;
// }
// demo.innerHTML = temp;

// let title = ['지역번호','국번호','전화번호'];
// let telTemp = '010-3423-2704';
// let tels = telTemp.split('-');
// tels.array.forEach((tel, i) => {
//   console.log(title[i] + " : " + tel);
// });
// demo.innerHTML = text2.lastIndexOf('A');
// demo.innerHTML = text1.search('t');
// demo.innerHTML = text1.match('ABC');
// demo.innerHTML = text1.includes('ABC');

let price = 100; //가격
let vat = 0.25;
// total = 100
// let total = price * (1 + vat);
let str = `총금액 : ${price * (1 + vat)}원`; // EL표기법(Expression Language) = ${}

demo.innerHTML = str;
// demo.innerHTML = 
