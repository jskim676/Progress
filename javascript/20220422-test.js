let food = ["김치찌개","된장찌개","부대찌개"];

let count = 0;
let indexValue = 0;


let timer = setInterval(function() {

  if (indexValue < food.length) {
    console.log(food[indexValue]);
    indexValue++;
  } else {
    indexValue = 0;
    count++;
  }

  if (count > 2) {
    clearInterval(timer);
  }

  
}, 1000);