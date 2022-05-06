let arr = ["첫번째", "두번째", "세번째", "네번째", "다섯번째"];

function appear (array, interval) {
  let index = 0;
  let timer = setInterval(function() {
    if(index < array.length) {
      console.log(array[index]);
      index++;
    } else {
      console.log('loop end');
      clearInterval(timer);
    }
  },interval);
}

appear(arr,1000);