// 템플릿은 json으로 응답을 받고, javascript object로 변환한 후에 어떠한 데이터처리 조작을 한 후에 dom에 추가
// 데이터 + HTML문자열의 결합이 필요하기 때문에 사용되는 것!

const data = [
    {
        name : 'coffee-bean',
        order : true,
        items: ['아메리카노', '우유', '그린티']
    },
    {
        name : 'starbucks',
        order : false,
    },
    {
        name : 'coffee-king',
        order : true,
        items : ['americano', 'latte']
    },
]
function fn(tags, name, items) {
    console.log(tags);
    if(typeof items === "undefined"){
        items = "주문가능한 상품이 없습니다.";
    }
    return (tags[0] + name + tags[1] + items + tags[2]);
}
data.forEach((v) => {
    const template = fn`<div>welcome ${v.name} !!</div>
                        <h2>주문가능항목</h2><div>${v.items}</div>`;
    console.log(template);
})
