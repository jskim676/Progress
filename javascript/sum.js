function sum (front, back) {
  
  if(typeof front === true) {
    let result = front + back;
    return result;  
  } else {
    console.log("당신이 작성한 front 매개변수는 타입이 숫자가 아닙니다.")
  }


}

console.log(sum("소희",3));