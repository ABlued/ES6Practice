const SETTING = {
    name : "LUCKY LOTTO",
    count : 8,
    maxNumber : 10
}
const {name,count,maxNumber} = SETTING;
let theNumbers = new Set();
function getRandomNumber(maxNumber){
    let selectedNumber = (parseInt)(Math.random()*maxNumber + 1);
    if(theNumbers.has(selectedNumber) == false){
        theNumbers.add(selectedNumber);
    } else {
        while((theNumbers.has(selectedNumber))){
            selectedNumber = selectedNumber = (parseInt)(Math.random()*maxNumber + 1);
        }
        theNumbers.add(selectedNumber);
    }

};
console.log(theNumbers);
for(let i = 0; i < count; i++){
    getRandomNumber(maxNumber);
}

// 더욱 멋있는 풀이가 있다.

const SETTING = {

    name: 'lotto',

    count: 6,

    maxNumber: 45,

    lotto : new Set()

}



;(function ({ maxNumber, count, lotto }) {

    

    while(lotto.size < count) {

        lotto.add(Math.round(Math.random() * maxNumber));

    }



    const result = Array.from(lotto).sort((a, b) => a - b);



    console.log(result);

}(SETTING));