// 나머지 매개변수(rest parameter)는 입력된 인수 중에서 정의된 매개변수 개수만큼을 제외한 나머지를 배열로 만들어 줍니다.
// 나머지 매개변수는 매개변수 개수가 가변적일 때 유용합니다.

function printLog(a, ...rest) {
  console.log({ a, rest });
}

printLog(1, 2, 3); // { a: 1, rest: [ 2, 3 ] }

// rest parameter는 ES5의 arguments와 흡사하다.
// arguements로 printLog를 구현하면 다음과 같다

function printLog1(a) {
  const rest = Array.from(arguments).splice(1);
  console.log({ a, rest });
}
printLog1(1, 2, 3);
