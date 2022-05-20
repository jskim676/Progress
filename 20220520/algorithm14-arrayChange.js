// const arr = [ "a", "b", "c"];
// 위와 같은 배열이 있다.
// 1. 원소값 중 "a"를 "c" 다음으로 놓는 방법이 있을까?
// 2. 원소값중 "c"를 "a" 앞으로 놓는 방법이 있을까?
// 3. 혹은 ["b", "a", "c"] 형태로 바꿀 수 있을까?

const arr = [ "a", "b", "c"];

1.
// let el = arr.shift();
// console.log(el);
// arr.push(el);
// console.log(arr);

2.
// let el = arr.pop();
// console.log(el);
// arr.unshift(el);
// console.log(arr);

3.
// let el = arr.shift();
// console.log(el);
// arr.splice(1,0,el);
// console.log(arr);


let temp;
temp = arr[0];
console.log(temp); // a
arr.shift();
console.log(arr);
arr.push(temp);
console.log(arr);