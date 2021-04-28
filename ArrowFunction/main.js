// 화살표 함수는 함수를 더욱 간결하게 표현하기 위해 쓰인다.
let newArr = [1,2,3,4,5].map((v) => {
    return v * 2;
});
console.log("arraw newArr", newArr);

// 한 줄만 있을 경우 {} 가 필요없다.
newArr = [1,2,3,4,5].map(v => v * 2);
console.log("arraw newArr", newArr);

const el = document.querySelector('p');

const myObj = {
    register(){
        el.addEventListener("click", (e) =>{
            this.printData(e.target);
        });
    },

    printData(el) {
        console.log("clicked!", el.innerText);
    }
}
// myObj.register();

// 강의 참조 : https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/lecture/7009?tab=note&speed=1.5

// default prameters

function sum(value, size) { //(value, size = 1) 로 해도 된다.
    size = size || 1;       // 인자 값을 받지 않으면 기본적으로 1이 되게 한다.
    return value * size;
}
console.log(sum(3));

// rest prameters

function checkNum(...arg) {
    const argArray = Array.from(arguments);     // arguments를 사용해 인자수가 가변적이여도 잘 받아낼 수 있다.
    const callArray = Array.prototype.slice.call(arguments);
    console.log(argArray);
    console.log(arg);
}
const result = checkNum(10,2,3,4,5,"55");

// 혹은 인자에 (...argArray) 를 사용해 복사할 수 있다.