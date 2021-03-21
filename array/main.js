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