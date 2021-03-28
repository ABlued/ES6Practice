// Destructuring Array

const data = ["crong", "honux", "jk", "jinny"];
const [jisu, , jung] = data;
// console.log(jisu, jung);

// Destructuring Object

const obj = {
    name: "crong",
    address : "korea",
    age : 10
}

const {name, age} = obj;
// console.log(name, age);

const {name:myName, age:myAge} = obj;       // 자기가 원하는 이름으로 사용할 수 있다
// console.log(myName, myAge);

// JSON 파싱
const news = [
    {
        "title" : "sbs",
        "imageURL" : "https://naver.net/newstand/1",
        "newslist" : [
            "[가보니] 가상 경주도 즐기고, 내 손으로 자동차도 만들고",
            "리캡차가 사라진다?",
            "갤럭시S8 출시? 갤노트7 처리 계획부터 밝혀야",
            "블로코-삼성SDS, 블록체인 사업 맞손",
            "[블록체인 알아보기] 퍼블릭 블록체인의 한계와 프라이빗 블록체인"
        ]
    },
    {
        "title" : "mbc",
        "imageURL" : "http://naver.net/newstand/2",
        "newslist" : [
            "Lorem ipsum dolor sit amet, consec..",
            "consectetur, adipisicin",
            "dolor sit amet",
            "amet, consectetur"
        ]
    }
];

const [sbs,mbc] = news;
// console.log(sbs);
// const {title, imageURL} = sbs;
// console.log(title, imageURL);

// console.log(mbc);
const {title1, imageURL1} = mbc;
// console.log(title1, imageURL1);

const [{title:title2,imageURL:imageURL2}] = news;
// console.log(title2, imageURL2);

function getNewsList([,{newslist}]) {
    // console.log(newslist);
}

getNewsList(news);