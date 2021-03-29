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