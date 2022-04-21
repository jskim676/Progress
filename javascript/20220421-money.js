/*

* 커피원두 : 20000
* 우유 : 30000
* 물 : 100
* 설탕 : 3000
* 시럽 : 200
* 시나몬 : 500
* 빨대 : 1000
* 머그컵 : 300000
* 플라스틱컵 : 1000000
* 얼음 : 200000

*/

// const materialObj = {
//   coffee : 20000,
//   milk : 30000,
//   water : 100,
//   sugar : 3000,
//   syrup : 200,
//   cinnamon : 500,
//   straw : 1000,
//   mugcup:300000,
//   takeoutcup:1000000,
//   ice : 20000
// } 

// const americano = {
//   one : materialObj.coffee,
//   two : materialObj.water,
//   three : materialObj.takeoutcup
// }

// let americanoPrice = americano.one + americano.two + americano.three;

// console.log(americanoPrice);

// console.log(americanoPrice + materialObj.ice);


const burgerkingObj = {
  bread : 500,
  patty : 1500,
  lettuce : 300,
  sauce : 500,
  toamto : 300, 
  shrimp : 1000,
  chickenpatty : 1000,

  coke : 1400,
  potatochip: 1000
}

const whopper = {
  one : burgerkingObj.bread,
  two : burgerkingObj.patty,
  three : burgerkingObj.lettuce,
  four : burgerkingObj.sauce,
  five : burgerkingObj.toamto
}

const shrimpwhopper = {
  one : burgerkingObj.bread,
  two : burgerkingObj.patty,
  three : burgerkingObj.lettuce,
  four : burgerkingObj.sauce,
  five : burgerkingObj.toamto,
  six : burgerkingObj.shrimp
}

const whopperPrice = whopper.one + whopper.two + whopper.three + whopper.four + whopper.five + whopper.one;

const whoppersetPrice = whopper.one + whopper.two + whopper.three + whopper.four + whopper.five + whopper.one + burgerkingObj.coke + burgerkingObj.potatochip;

const shrimpwhopperPrice = shrimpwhopper.one + shrimpwhopper.two + shrimpwhopper.three + shrimpwhopper.four + shrimpwhopper.five + shrimpwhopper.six + shrimpwhopper.one;

console.log(whopperPrice);

console.log(whoppersetPrice);

console.log(shrimpwhopperPrice);

if(whopperPrice > 3700 ) {
  console.log(`와퍼 값은 ${whopperPrice}원 입니다. 구매하시겠습니까?`)
} else {
  console.log(`와퍼 값은 ${whopperPrice}원 입니다. 구매 불가능합니다.`)
}