// test1.js

'use strict';

function regexCheck() {
  // 정규표현식변수를 먼저 만들어 놓는다.
  const regex1 = /atom/g; // atom이라는 문자열이 포함되어 있다면 true 없으면 false
  const regex2 = /mbc|kbs|sbs/g; //mbc 또는 kbs 또는 sbs 문자열을 포함하고 있는가를 물어보는 것
  const regex3 = /홍길(동|순)/g; // 홍길동 or 홍길순을 포함하고 있는가?
  const regex4 = /[a-z]/gm; //영문소문자를 포함하고 있는가?
  const regex5 = /[^a-z]/gm; //영문소문자만을 포함하고 있는가?
  const regex6 = /[A-Z]/gm; //영문대문자를 포함하고 있는가?
  const regex7 = /[^A-Z]/gm; //영문대문자만을 포함하고 있는가?
  const regex8 = /[0-9]/gm; //숫자를 포함하고 있는가?
  const regex9 = /[^0-9]/gm; //숫자만 포함하고 있는가?
  const regex10 = /[가-힣]/gm; //한글을 포함하고 있는가?
  const regex11 = /[^가-힣]/gm; //한글만을 포함하고 있는가?
  const regex12 = /[a-zA-Z0-9]/gm; //영문자 외 숫자를 포함하고 있는가?
  const regex13 = /[^a-zA-Z0-9]/gm; //영문자와 숫자만을 포함하고 있는가?
  const regex14 = /[^a-zA-Z0-9_]/gm; //영문자와 숫자와 밑줄만을 포함하고 있는가?
  
  const regex21 = /\./g; // .을 포함하고 있는가?
  const regex22 = /\d/g; // 숫자를 포함하고 있는가?
  const regex23 = /\D/g; // 22번의 부정 숫자 포함X를 물어봄
  const regex24 = /\w/g; // 영문자/숫자/_를 포함하고 있는가?
  const regex25 = /\W/g; // 영문자/숫자/_ 포함X?
  const regex26 = /\s/g; // 스페이스(탭 포함)를 포함하고 있는가?
  
  // 와일드카드 : 1개 글자의 포함유무(?), 복수개의 문자 포함유무(+, *)
  const regex31 = /홍길동?/g; //'홍길동'의 '동' 0개 글자의 포함 유무    ????????????????????????????
  const regex32 = /홍길동+/g; // 홍길동'의 '동' 1개 이상 글자의 포함 유무 ???????????????????????????
  const regex33 = /홍길동*/g; // 홍길동'의 '동' 0개 이상 글자의 포함 유무 ???????????????????????????

  let content = document.getElementById("content").value.trim();

  if(content === "") alert("문자열을 입력하세요");
  // else if(!content.match(regex1)) alert("atom문자열을 포함하고 있지 않습니다.");
  // else if(!content.match(regex2)) alert("방송국을 선택하세요");
  // else if(!content.match(regex3)) alert("홍길동/홍길순이 아닙니다.");
  // else if(!content.test(content)) alert("영문 대문자를 포함하고 있지 않습니다.");
  // else if(!regex8.test(content)) alert("숫자를 포함하고 있지 않습니다.");
  // else if(!regex10.test(content)) alert("한글을 포함하고 있지 않습니다.");
  // else if(!regex11.test(content)) alert("한글 외 다른 문자를 포함하고 있습니다..");
  // else if(!regex12.test(content)) alert("영문자나 숫자를 포함하고 있지 않습니다.");
  // else if(!regex13.test(content)) alert("영문자와 숫자 외 다른 문자를 포함하고 있습니다");
  // else if(!regex14.test(content)) alert("영문자와 숫자와 밑줄 외 다른 문자를 포함하고 있습니다");
  // else if(!regex21.test(content)) alert("입력 데이터 중에 .을 포함하고 있지않습니다.");
  // else if(!regex22.test(content)) alert("입력 데이터 중에 숫자를 포함하고 있지않습니다.");
  // else if(!regex23.test(content)) alert("입력 데이터 중에 숫자를 포함하고 있습니다.");
  // else if(!regex23.test(content)) alert("입력 데이터 중에 영문자 or 숫자 or _만을 포함하고 있지 않습니다.");
  // else if(!regex24.test(content)) alert("입력 데이터 중에 영문자 or 숫자 or _만을 포함하고 있습니다.");
  // else if(!regex25.test(content)) alert("입력 데이터 중에 공백이 포함되어 있습니다.");
  else if(!regex31.test(content)) alert("입력 데이터 중에 'a'을 포함하고 있습니다.");

  else alert('정상적으로 통과!!');
}