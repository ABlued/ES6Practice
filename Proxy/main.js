const myObj = {name: 'crong', changedValue: 0};
const proxy = new Proxy(myObj, {
    get: function (target, property, receiver) {        //target은 myObj, receiver는 proxy를 가리킨다.
        console.log('get value');
        // return target[property];
        // return Reflect.get(target, property);   // target값을 이렇게 반환할수도 있다.
        return (property in target) ? target[property] : "anonymous";       // 없는 프로퍼티 값을 받게 되면 anonymous 오류처리를 하는 코드
    },
    set: function (target, property, value) {
        console.log('set value');
        target['changedValue']++;
        target[property] = value;
    }
});

proxy.name = "hi"       // set함수가 자동실행된다.
console.log(proxy.name); //get함수가 자동실행된다.
console.log(myObj);