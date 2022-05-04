
// let current = 0;

// let timer = setInterval(function() {
//   console.log(current);
//   current++;
//   if(current === 60) {
//     console.log('1분이 경과되었습니다.');
//     clearInterval(timer);
//   }
// }, 1000);




// 왜 이렇게 작성하지?

let a = "똑";
let b = "딱";
let isStatus = true;
let current = 0;
const timer = setInterval(function(){
  if(isStatus === true) {
    console.log(a);
    isStatus = false;
  } else {
    console.log(b);
    isStatus = true;
    current++;
    console.log(`지금 똑딱이 횟수는 ${current} 입니다.`);
  }

  if(current >= 10) {
    clearInterval(timer);
  }
},500)

