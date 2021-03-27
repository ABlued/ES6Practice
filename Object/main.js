function getObj(){
    const name = "crong";

    const getName = function(){
        return name;
    }
    const setName = function(newname){
        name = new name;
    }
    const printNmae = function(){
        console.log(name);
    }

    return {
        // getName : getName,
        // setName : setName
        getName, setName, name        // 이름이 같으면 이렇게 쓸수도 잇음
    }
}

const obj = getObj();
console.log(obj);