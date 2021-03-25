const data = [1,2,undefined,NaN,null,""];

for(let i = 0; i < data.length; i++){
    console.log(i + ":" + data[i]);
}

data.forEach(function(value,index){
    console.log(index + ":" + value);
})

// Array
for(let value in data){
    console.log(data[value]);
}       // for in에는 프로토타입에 있는 것도 포함되는 문제가 있다.
// data.prototype.getIndex = function(){}; //예로들면 이렇게 프로토타입의 함수를 지정하면 for in 에서도 이 함수가 출력도니다.

for(let value of data){
    console.log(value);
}

// spread operator 펼침연산자.

let pre = ["apple", "orange", 100];
let newData = [...pre];
console.log(pre, newData);
console.log(pre === newData);       // 하지만 두 개의 배열은 서로 같은 배열이 아니다. 즉 같은 메모리를 가리키게 되는 것이 아닌 자체를 복사한 것이다.

let pre1 = [100,200,"hello",null];
let newData1 = [1,2,3, ...pre1, 4];
console.log(pre1, newData1);

function sum(a,b,c){
    return a + b + c;
}

let pre2 = [100,200,300];

console.log(sum.apply(null, pre2));     // apply 각각 함수인자를 배열형태로 줄 때 사용하는 API이다.
console.log(sum(...pre2));      // 이런 식으로도 함수 파라미터를 전달할 수 있다.

// ES2015 from method

function addMark(){
    let newArray = Array.from(arguments);            // arguments는 함수 입력인자들이다.
    let newData = newArray.map(function(value){
        return value + "!";
    });
    console.log(newArray, newData);
}
addMark(1,2,3,4,5);