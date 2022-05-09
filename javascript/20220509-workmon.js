
let a = 1;
let b = 1;
let c = 2;

function valueTest() {
  if (typeof a === "number") {
    console.log("변수 a는 데이터 타입이 숫자입니다.");
  } else {
    console.log("변수 a는 숫자타입이 아닙니다.")
  }
  if (typeof b === "number") {
    console.log("변수 b는 데이터 타입이 숫자입니다.");
  } else {
    console.log("변수 b는 숫자타입이 아닙니다.")
  }
}

// valueTest();



// if / else 중에 하나가 메인 알고리즘 인 경우가 많다.

function valueTestTwo() {
  if (typeof a === "string") {
    console.log('a는 string입니다.');
  } else {
    if(typeof a === "number") {
      console.log("a는 number입니다.");
      if (a === 1) {
        console.log("a는 1입니다.");
      } else {
        console.log("a는 1이 아닙니다.");
      }

    } else {
      console.log("a는 number가 아닙니다.");
    }
  }
}

// valueTestTwo ();

function valueTestThree () {
  if(a === c) {
    console.log("a 와 c 가 같습니다");
  } else {
    console.log("a 와 c 가 같지 않습니다");
    if (typeof a === "number") {
      console.log("a는 숫자 입니다.");
      if(a === 1 ) {
        console.log("a는 1입니다");
      } else {
        console.log("a는 1이 아닙니다");
      }

    } else {
      console.log("a는 숫자가 아닙니다.");
    }

    if (typeof c === "number") {
      console.log("c는 숫자 입니다.");
      if(c === 2 ) {
        console.log("c는 2입니다");
      } else {
        console.log("c는 2가 아닙니다");
      }

    } else {
      console.log("c는 숫자가 아닙니다.");
    }

  }
}

valueTestThree ();