// filter, includes, from을 사용해서 문자열 'e'가 포함된 노드로 구성된 배열을 만들어서 반환하기
const li = document.querySelectorAll('li');
const liList = Array.from(li);
function print(){
    const result = liList.filter((v) => v.innerText.includes('e'));
    
    console.log(result);
}

print();
