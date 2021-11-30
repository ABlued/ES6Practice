// 함수 매개변수의 기본값을 줄 수 있다.

function printLog(a = 1) {
  console.log(a);
}
printLog(); // 1

// 인수 없이 함수를 호출하게 되면 기본적으로 undefined가 나오는데 이 함수는 매개변수의 기본값을 1로 정의했기 때문에 1이 출력된다.

// ----- 매개변수를 콜백함수로 넘겨주어도 된다. -----

function getDefault() {
  return 1;
}

function printLog1(a = getDefault()) {
  console.log(a);
}

printLog1(); // {a : 1}

function required() {
  throw new Error('no parameter');
}

function printLog(a = required()) {
  console.log(a);
}

printLog(); // 에러 발생 : no parameter
