document.body.style.width = "100vw";
document.body.style.height = "100vh";


const box = document.querySelector('.window');
const resize = document.querySelector('.resize');

box.style.width = "600px";
box.style.height = "400px";
box.style.border = "1px solid red";
box.style.position = "relative";

resize.style.width = "10px";
resize.style.height = "10px";
resize.style.border = "1px solid black";
resize.style.position = "absolute";
resize.style.bottom = 0;
resize.style.right = 0;



// window.addEventListener('click', e => {
//   // console.log(e.clientX);
//   // console.log(box.offsetLeft);
//   // console.log(box.offsetWidth);
//   let result = e.clientX - box.offsetLeft;
//   console.log(result);
//   box.offsetWidth = result;
//   // console.log(box.offsetWidth);
// });


// resize.addEventListener('click', function() {
//   box.style.width = "20vw";
// });



// --------------------------------------------------------
// console.log(box.style.width);
// let width = box.style.width;
// let height = box.style.height;

// window.addEventListener('mousemove', e =>{
//   let resultx = e.clientX;
//   let resulty = e.clientY;
//   // console.log(result);
//   width = `${resultx}px`;
//   height = `${resulty}px`;
//   box.style.width = width;
//   box.style.height = height;
// });
// --------------------------------------------------------

// let drag = true;
// resize.addEventListener('mousedown',function () {
//   if(drag === true) {
//     let width = box.style.width;
//     let height = box.style.height;
    
//     window.addEventListener('mousemove', e =>{
//       let resultx = e.clientX;
//       let resulty = e.clientY;
//       // console.log(result);
//       width = `${resultx}px`;
//       height = `${resulty}px`;
//       box.style.width = width;
//       box.style.height = height;
//     });
//   }
// });

// let drag = true;

// resize.addEventListener('mousedown',function () {
//   if(drag === true) {
//     let width = box.style.width;
//     let height = box.style.height;
    
//     window.addEventListener('mousemove', e =>{
//       let resultx = e.clientX;
//       let resulty = e.clientY;
//       // console.log(result);
//       width = `${resultx}px`;
//       height = `${resulty}px`;
//       box.style.width = width;
//       box.style.height = height;
//     });
//   }
// });

// resize.addEventListener('mouseup', function() {
//   drag = false;
//   window.addEventListener('click', e=> {
//     let resultx = e.clientX;
//     let resulty = e.clientY;
//     console.log(resultx, resulty);
//     box.style.width = `${resultx}px`;
//     box.style.height = `${resulty}px`;

//   });
// });



let drag = true;

resize.addEventListener('mousedown',function () {
  let width = box.style.width;
  let height = box.style.height;
  resize.addEventListener('mouseup', function() {
    drag = false;
    console.log(drag);
    window.addEventListener('click', e=> {
      let resultx = e.clientX;
      let resulty = e.clientY;
      console.log(resultx, resulty);
      box.style.width = `${resultx}px`;
      box.style.height = `${resulty}px`;
    });
  });

  
  if(drag === true) {
    window.addEventListener('mousemove', e =>{
      let resultx = e.clientX;
      let resulty = e.clientY;
      width = `${resultx}px`;
      height = `${resulty}px`;
      box.style.width = width;
      box.style.height = height;
    });
  } else {
    window.addEventListener('mousemove',e => {
      e.preventDefault();
    });
  }


});

