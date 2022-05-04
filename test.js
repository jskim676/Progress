const btn = document.querySelector('button');
console.log(btn);

let count = 0;
btn.addEventListener('click', function() {
  for(i=0; i<55; i++) {
    console.log('hello')*i;
  }
  
  // if (count<55) {
  //   console.log('hello');
  //   count++;
  // } else {

  // }
});
