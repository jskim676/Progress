
// * 기명함수방식, 함수 선언 방식

// function textMachine (startValue, endValue, textValue) {

//   let result = textValue;


//   for (let i = startValue; i <= endValue; i++) {
    
//   }

//   return result;
//   // return 값이 없어도 실행은 된다.
//   // 위에 것들이 실행이 되야 return 이 실행된다.
// }

// console.log(textMachine(1,2,"콘솔"));


// function a () {
//   console.log('test');
//   // return "메롱";
// }

// a();
// console.log(a());


function b (first,second) {
  if(typeof first === "number") {
    // "타입체크"
    return first - second;
  } else {
    console.log("첫번째 매개변수가타입이 숫자가 아닙니다.");
  }
}

console.log(b(1,2));
