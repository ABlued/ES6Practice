// Set은 중복이 없는 집합체이다.

let mySet = new Set();
console.log(toString.call(mySet));

mySet.add(1);       // add : 데이터 입력
mySet.add(1);       // 입력이 안됨
mySet.add(2);
mySet.add(3);
mySet.delete(3);    // delete : 데이터 삭제

mySet.forEach((v) => {
    console.log(v);
})

console.log(mySet.has(1));      // has : 배열안에 입력값이 있으면 true 없으면 false를 반환

// weakset : 참조를 가지고 있는 객체만 저장이 가능하다. 객체를 중복없이 저장할려고 할 때 쓰인다.

let arr = [1,2,3,4];
let myWeakSet = new WeakSet();

myWeakSet.add(arr);

myWeakSet.add(arr);
// myWeakSet.add(111);         // 참조를 가지는 타입이 아니라 저장 불가능
// myWeakSet.add("111");       // 참조를 가지는 타입이 아니라 저장 불가능
// myWeakSet.add(null);        // 유효하지 않은 값은 넣을 수 없다고 오류가 나온다
myWeakSet.add(function(){});   // 참조를 가지는 타입이라 저장이 가능

console.log(myWeakSet);

// WeakSet의 용도는 참조를 가졌던 객체가 null 또는 다양한 이유로 삭제가 되면 WeakSet 내에서도 삭제가 된다. 즉 객체가 참조를 가지고 있는지 모니터링 하는데 좋다.

let obj2 = {name:"안녕"};
myWeakSet.add(obj2);
console.log(myWeakSet.has(obj2));
obj2 = null;
console.log(myWeakSet.has(obj2));