
let material = {
  kim : 300,
  rice : 400,
  crab : 400,
  ham : 600,
  egg : 500,
  cheese : 500,
  pickledradish : 300
}

let kimbab = {
  one : material.kim,
  two : material.rice,
  three : material.crab,
  four : material.ham,
  five : material.egg,
  six : material.cheese,
  seven : material.pickledradish
}

let kimbabPrice = kimbab.one + kimbab.two + kimbab.three + kimbab.four + kimbab.five + kimbab.six + kimbab.seven;

console.log(kimbabPrice);