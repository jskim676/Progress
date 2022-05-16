1
// forEach()
// 주어진 함수를 배열 요소 각각에 대해 실행

// const arr = ['a', 'b', 'c'];

// arr.forEach(function(element){
//   console.log(element); 
// }); 

// arr.forEach(element => console.log(element));


2
// push()
// 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows');
// console.log(count);
// console.log(animals);


3
// pop()
// 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// console.log(plants.pop());

4
// shift ()
// 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.

// const array1 = [1, 2, 3];

// const firstElement = array1.shift();

// console.log(array1);

5
// unshift ()
// 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.

// const array1 = [1, 2, 3];

// console.log(array1.unshift(4, 5));

// console.log(array1);

6
// indexOf ()
// 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));

// // start from index 2
// console.log(beasts.indexOf('bison', 2));
// // expected output: 4

// console.log(beasts.indexOf('giraffe'));

7
// splice ()
// 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]


8
// slice
// 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


9
// from ()
// 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다.

// console.log(Array.from('foo'));
// // expected output: Array ["f", "o", "o"]

// console.log(Array.from([1, 2, 3], x => x + x));
// // expected output: Array [2, 4, 6]

10
// isArray ()
// 인자가 Array인지 판별합니다.

// Array.isArray([1, 2, 3]);  // true
// Array.isArray({foo: 123}); // false
// Array.isArray('foobar');   // false
// Array.isArray(undefined);  // false

11
// at ()
// 정수 값을 받아, 배열에서 해당 값에 해당하는 인덱스의 요소를 반환합니다. 양수와 음수 모두 지정할 수 있고, 음수 값의 경우 배열의 뒤에서부터 인덱스를 셉니다.

// const array1 = [5, 12, 8, 130, 44];

// let index = 2;

// console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// // expected output: "Using an index of 2 the item returned is 8"

// index = -2;

// console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// // expected output: "Using an index of -2 item returned is 130"

12
// concat ()
// 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다. 

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// // expected output: Array ["a", "b", "c", "d", "e", "f"]

13
// every ()
// 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다. Boolean 값을 반환합니다.

// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));
// // expected output: true

14
// filter ()
// 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]

15
// findIndex ()
// 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다

// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));
// // expected output: 3

16
// includes ()
// 배열이 특정 요소를 포함하고 있는지 판별합니다.

// const array1 = [1, 2, 3];

// console.log(array1.includes(2));
// // expected output: true

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // expected output: true

// console.log(pets.includes('at'));
// // expected output: false

17
// join ()
// 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.

// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // expected output: "FireAirWater"

// console.log(elements.join('-'));
// // expected output: "Fire-Air-Water"

18
// map ()
// 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]

19 
// reduce ()
// 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// expected output: 10

20
// some ()
// 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트합니다.

// const array = [1, 2, 3, 4, 5];

// // checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));
// // expected output: true

21
// sort ()
// 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. 정렬은 stable sort가 아닐 수 있습니다. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// // expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// // expected output: Array [1, 100000, 21, 30, 4]

22
// toString ()
// 지정된 배열 및 그 요소를 나타내는 문자열을 반환합니다.

// const array1 = [1, 2, 'a', '1a'];

// console.log(array1.toString());
// // expected output: "1,2,a,1a"

23
// values ()
// 배열의 각 인덱스에 대한 값을 가지는 새로운 Array Iterator 객체를 반환합니다.

// const array1 = ['a', 'b', 'c'];
// const iterator = array1.values();

// for (const value of iterator) {
//   console.log(value);
// }

// // expected output: "a"
// // expected output: "b"
// // expected output: "c"




