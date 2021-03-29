// Map & WeakMap
// Array -> set, weakset
// Object -> map, weakmap

// map은 key와 value가 매칭되는 자료구조이다. 그리고 여기서 weakmap의 key는 참조가 되어있는 객체이여야한다.

let wm = new WeakMap();
let myFunc = function(){};
// 이 함수가 얼마나 실행됐지? 를 알려고 할 때
wm.set(myFunc,0);       // weakmap의 값추가는 set으로 해결된다
console.log(wm);

let count = 0;
for(let i = 0; i < 10; i++){
    count = wm.get(myFunc); //get value
    count++;
    wm.set(myFunc, count);
}

console.log(wm.get(myFunc));
myFunc = null;      // 역시 객체를 null로 비우면 weakmap내에서도 사라진다.
console.log(wm.get(myFunc));

// set과 같이 object의 중복을 방지하기 위해서 사용되는 자료구조이다. 

// WeakMap 활용
function Area(height, width){
    this.height = height;
    this.width = width;
}

Area.prototype.getArea = function(){
    return this.width * this.height;
}
let myArea = new Area(10, 20);
console.log(myArea.getArea());

// WeakMap 활용 두번째 (이런 식으로도 할 수 있다.)
// 앞의 방법과 다른 점은 Area1이 wm1에 의해 전역공간에 저장이 된다.
const wm1 = new WeakMap();
function Area1(height, width){
    wm1.set(this, {height, width});
}

Area1.prototype.getArea = function(){
    const {height, width} = wm.get(this);
    return width * height;
}
let myArea1 = new Area1(20, 40);

console.log(myArea1.height);        // 이 방식으로 만들면 private으로 설정하지 않아도 밖에서 접근 불가능하다. (getter,setter를 만들어야 한다.)
console.log(wm1.get(myArea1));        // 이 방식으로 만들면 private으로 설정하지 않아도 밖에서 접근 불가능하다. (getter,setter를 만들어야 한다.)
myArea1 = null;
console.log(wm1);        // 이 방법 역시 객체의 참조가 사라지면 weakmap에서 사라진다
 
// js weakmap 공식 문서 참조 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap