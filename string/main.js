const str = "hello world | ^^ ~~";
const matchstr = "~~";
console.log(str.startsWith(matchstr));      //앞에 있는 문자가 똑같은지 검사하는 메소드
console.log(str.endsWith(matchstr));        //뒤에 있는 문자가 똑같은지 검사하는 메소드
console.log("include test", str.includes(" "));     // 입력인자가 str에 들어있는지 검사하는 메소드