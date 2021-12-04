/**
 * 제너레이터(generator)는 함수의 실행을 중간에 멈추고 재개할 수 있는 독특한 기능입니다.
 * 실행을 멈출 때 값을 전달할 수 있기 때문에 반복문에서 제너레이터가 전달하는 값을 하나씩 꺼내서 사용할 수 있습니다.
 * 이는 배열이 반복문에서 사용되는 방식과 같지만, 제너레이터는 보통의 컬렉션(collection)과 달리 값을 미리 만들어 놓지 않습니다.
 * 값을 미리 만들어 놓으면 불필요하게 매모리를 사용하기 때문입니다.
 * 제너레이터를 사용하면 필요한 순간에 값을 계산해서 전달할 수 있기 때문에 메모리 측면에서 효율적입니다.
 * 또한 제너레이터는 협업 멀티태스킹을 할 수 있습니다. 제너레이터가 실행을 멈추고 재개할 수 있기 때문입니다.
 */

// 제너레이터가 어떻게 실행을 멈추고 재개하는지 봅시다.
function* f1() {
  // function뒤에 *를 하면 제너레이터 함수입니다.
  yield 10; // yield 키워드를 사용하면 함수의 실행을 멈출 수 있습니다.
  yield 20;
  return 'finished';
}
const gen = f1(); // 제너레이터 함수를 실행하면 제너레이터 객체가 반환됩니다.

// 제너레이터 객체는 next, return, throw 메서드를 가지고 있습니다.

function* f2() {
  console.log('첫번째');
  yield 10;
  console.log('두번째');
  yield 20;
  console.log('세번째');
  return 'finished';
}

const gen2 = f2(); // 제너레이터 함수를 실행하면 제너레이터 객체만 반환되고 함수 내부코드는 실행되지 않는다.
console.log(gen2.next()); // next() 메소드를 호출하면 yield 키워드를 만날 때까지 실행되고 데이터 객체를 반환합니다
// 첫번째
// { value: 10, done: false };    // 여기서 반환되는 객체속성인 done은 yield키워드를 만나면 false가 된다. 만나지 못하면 true이다.
console.log(gen2.next());
// 두번째
// { value: 20, done: false };
console.log(gen2.next());
// 세번째
// { value: 'finisied', done: true }; // 여기서는 yield 키워드를 만나지 못했기 때문에 done 속성값이 true이다.
// 만약 yield 없이 return키워드만 존재하면 첫 번째 next 메서드의 호출에서 done 속성은 true이다.

// 제너레이터 객체가 next 메서드를 갖고 있다는 사실은 제너레이터 객체가 반복자(iterator)라는 것을 암시한다.

const gen2_1 = f2();
console.log(gen2_1.next());
// 첫번째
// { value: 10, done: false }
console.log(gen2_1.return('abc')); // return 메서드를 호출하면 데이터 객체의 done 속성값은 참이 된다.
// { value: 'abc', done: true }
console.log(gen2_1.next()); // return 이후에 next 메서드를 호출하면 done 속성값은 참이 되며 출력하는 value는 undefined이다.
// { value: undefined, done: true }

function* f3() {
  try {
    // 제너레이터 함수에서 try-catch 구문을 사용하여 예외 처리를 할 수 있다.
    console.log('첫번째');
    yield 10;
    console.log('두번째');
    yield 20;
  } catch (e) {
    console.log('error : ', e);
  }
}

const gen3 = f3();
console.log(gen3.next());
console.log(gen3.throw('some error')); // throw 메서드를 호출하면 예외가 발생한 것으로 처리되기 때문에 catch문으로 들어간다. 이 때 done속성은 true가 되며 이후에 반환되는 것도  value : undefined, true가 된다.
console.log(gen3.next());
