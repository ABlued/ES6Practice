var name = "global var";

function home(){
    var homevar = "homevar";
    for(var i = 0; i < 100; i++){
    }
    console.log(i);     //var로 선언한 변수에 접근할 경우 for문밖에 있을지라도 접근이 가능하다.
}       //var를 let으로 바꾸어서 for문내에 생성된 변수가 밖에서는 사용할 수 없게 만들어야 한다.
home();

let list = document.querySelectorAll("li");
for(let i = 0; i< list.length; i++){        // 여기서 i가 let이 아닌 var를 사용했으면 클릭이벤트리스너에 콜백함수에서
    list[i].addEventListener("click", function(){
        console.log(i + "번째 리스트 입니다.");     // 이미 for문 함수를 떠난상태에서의 콜백함수가 동작하므로 i가 계속 4(list.length값)로 나온다.
    })                                          // 이런 문제를 해결하기 위해 let을 사용한다.
}

function home1(){
    const list = ["apple", "orange", "watermelon"];
    list.push("banana");        // const를 썻다고해서 push함수를 사용할 수 없는 것은 아니다. 배열과 오브젝트의 값을 변경하는 것은 가능하다.
}
home1();

// 그럼 immutable array 를 어떻게 만들까?

const list1 = ["apple", "orange", "watermelon"];
list2 = [].concat(list1, "banana");
console.log(list1, list2);
console.log(list1 === list2);