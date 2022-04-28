const lolchamp = ["가렌", "갈리오", "갱플랭크", "그라가스", "그레이브즈", "그웬", "나르", "나미", "나서스", "노틸러스", "녹턴", "누누누와 윌럼프", "니달리", "니코", "다리우스", "다이애나", "드레이븐", "라이즈", "라칸", "람머스", "럭스", "럼블", "레나타 글라스크", "레넥톤", "레오나", "렉사이", "렐", "렝가", "루시안", "룰루", "르블랑", "리신", "리븐", "리산드라", "릴리아", "마스터이", "마오카이", "말자하", "말파이트", "모데카이저", "모르가나", "문도박사", "미스포츈", "바드", "바루스", "바이", "베이가", "베인", "벡스", "벨코즈", "볼리베어", "브라움"," 브랜드", "블라디미르", "블리츠크랭크", "비에고", "빅토르", "뽀삐", "사미라", "사이온", "사일러스", "샤코", "세나", "세라핀", "세주아니", "세트", "소나" ,"소라카", "쉔", "쉬바나", "스웨인", "스카너", "시비르", "신짜오", "신드라", "신지드", "쓰레쉬" ,"아리", "아무무", "아우렐리온솔", "아이번", "아지르", "아칼리", "아크샨", "아트록스", "아펠리오스", "알리스타", "애니", "애니비아", "애쉬" , "야스오", "에코", "엘리스", "오공", "오른", "오리아나", "올라프", "요네", "요릭", "우디르", "우르곳", "워윅", "유미", "이렐리아", "이블린", "이즈리얼", "일라오이", "자르반4세", "자야", "자이라", "자크" ,"잔나", "잭스", "제드", "제라스", "제리", "제이스", "조이", "직스", "진", "질리언", "징크스", "초가스", "카르마", "카밀", "카사딘", "카서스", "카시오페아", "카이사", "카직스", "카타리나", "칼리스타", "케넨", "케이틀린" ,"케인", "케일", "코그모", "코르키", "퀸", "클레드", "키아나", "킨드레드", "타릭", "탈론" ,"탈리야", "탐켄치", "트런들", "트리스타나", "트린다미어", "트위스티드페이트", "트위치", "티모", "파이크", "판테온", "피들스틱", "피오라", "피즈", "하이머딩거", "헤카림"];

// console.log(lolchamp.length);

const categories = {
  top : ["가렌", "갱플랭크", "그라가스", "그레이브즈", "그웬", "나르", "나서스", "다리우스", "라이즈", "럼블", "레넥톤" ,"렝가" ,"리븐" ,"릴리아", "마오카이", "말파이트", "모데카이저", "문도박사", "베인", "볼리베어", "블라디미르", "빅토르", "뽀삐", "사이온", "사일러스", "세주아니", "세트", "쉔", "신짜오", "신지드", "아칼리", "아크샨", "아트록스", "야스오", "오공", "오른", "요네", "요릭", "우르곳", "워윅", "이렐리아", "일라오이", "자크", "잭스", "제이스", "초가스", "카밀", "카시오페아", "케넨", "케일", "퀸", "클레드", "탐켄치", "트런들", "트린다미어", "티모", "판테온", "피오라", "하이머딩거" ],
  jungle : ["렉사이", "니달리", "그레이브즈", "탈론", "카서스" ,"샤코", "녹턴", "다이애나", "리신", "뽀삐", "오공", "엘리스", "케인", "킨드레드", "비에고", "렝가", "자크", "누누와 윌럼프", "에코" ,"람머스", "카직스", "피들스틱", "신짜오", "제드", "볼리베어", "탈리야", "바이", "이블린", "키아나", "아이번", "워윅", "릴리아", "마스터이", "자르반4세", "헤카림", "쉬바나", "트런들", "세주아니", "럼블", "그라가스", "그웬", "잭스", "트위치 ", "올라프", "우디르", "아무무"],
  middle : ["아리", "제드", "벡스", "탈론", "루시안", "야스오", "카타리나", "파이크", "르블랑", "애니비아", "빅토르", "조이", "사일러스", "키아나", "아크샨", "니코", "아우렐리온솔", "베이가", "아칼리", "피즈", "이렐리아", "카시오페아", "다이애나", "럼블", "트위스티드페이트", "판테온", "요네", "갈리오", "애니", "제라스", "질리언", "신지드", "리산드라", "말파이트", "말자하", "블라디미르", "레넥톤", "아지르", "카사딘", "에코", "트린다미어", "신드라", "카이사", "럭스", "세트", "초가스", "오리아나", "누누와윌럼프", "가렌", "제이스", "사이온", "코르키", "라이즈"],
  bottom : ["루시안", "사미라", "자야", "이즈리얼", "미스포츈", "베인", "징크스", "카이사", "진", "트위치", "드레이븐", "야스오", "애쉬", "직스", "제라스", "시비르", "케이틀린", "칼리스타", "트리스타나", "코그모", "제리", "바루스", "아펠리오스"],
  support : ["블리츠크랭크", "노틸러스", "파이크", "유미", "레나타글라스크", "카르마", "룰루", "세나", "레오나", "나미", "제라스", "알리스타", "라칸", "소라카", "샤코", "모르가나", "럭스", "쓰레쉬", "렐", "질리언", "마오카이", "탈리야", "자이라", "탐켄치", "소나", "브라움", "니코", "애니비아", "브랜드", "신드라", "바드", "뽀삐", "타릭", "잔나", "자크", "벨코즈", "하이머딩거", "판테온", "베이가", "세트", "애쉬", "세라핀", "스웨인", "갈리오", "아무무", "그라가스", "쉔"],
}

const answer = "제드"
const yes = true
const no = false



// const rand = Math.floor(Math.random()*lolchamp.length);

// console.log(lolchamp[rand]);

// console.log(lolchamp[Math.floor(Math.random()*lolchamp.length)]);

console.log("이번에 하실 챔피언은 탑 " + categories.top[Math.floor(Math.random()*categories.top.length)] + "입니다");

console.log("이번에 하실 챔피언은 정글 " + categories.jungle[Math.floor(Math.random()*categories.jungle.length)] + "입니다");

console.log("이번에 하실 챔피언은 미드 " + categories.middle[Math.floor(Math.random()*categories.middle.length)] + "입니다");

console.log("이번에 하실 챔피언은 원딜 " + categories.bottom[Math.floor(Math.random()*categories.bottom.length)] + "입니다");

console.log("이번에 하실 챔피언은 서포터 " + categories.support[Math.floor(Math.random()*categories.support.length)] + "입니다");


// console.log(categories.yordle.includes(answer));


// console.log(categories.top.includes(answer))
// console.log(categories.jungle.includes(answer))
// console.log(categories.middle.includes(answer))
// console.log(categories.bottom.includes(answer))
// console.log(categories.support.includes(answer))



// if (categories.top.includes(answer)) {
//   console.log(`${answer}라는 챔피언은 탑에 갑니다`)
// } else {
//   console.log(`${answer}라는 챔피언은 탑에 가지 않습니다`)
// }

// if (categories.jungle.includes(answer)) {
//   console.log(`${answer}라는 챔피언은 정글에 갑니다`)
// } else {
//   console.log(`${answer}라는 챔피언은 정글에 가지 않습니다`)
// }

// if (categories.middle.includes(answer)) {
//   console.log(`${answer}라는 챔피언은 미드에 갑니다`)
// } else {
//   console.log(`${answer}라는 챔피언은 미드에 가지 않습니다`)
// }

// if (categories.bottom.includes(answer)) {
//   console.log(`${answer}라는 챔피언은 바텀에 갑니다`)
// } else {
//   console.log(`${answer}라는 챔피언은 바텀에 가지 않습니다`)
// }

// if (categories.support.includes(answer)) {
//   console.log(`${answer}라는 챔피언은 서폿에 갑니다`)
// } else {
//   console.log(`${answer}라는 챔피언은 서폿에 가지 않습니다`)
// }


// const rand1 = Math.random();
// console.log(rand1);

// const rand2 = Math.floor(Math.random());
// console.log(rand2);

// const rand3 = Math.floor(Math.random()*10);
// console.log(rand3);








// console.log(categories);



// const junsick = ["나르","럼블"];
// junsick.push("yordle");

// console.log(junsick);