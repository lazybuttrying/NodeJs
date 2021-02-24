const fs = require("fs"); //file system

console.log('Start');


//동기 - 순서대로
//let content = fs.readFileSync('./new','utf8');
//console.log(content);


//비동기 - callback 함수 내용이 
//readFile 비동기 함수가 실행되어 파일을 읽은 후에 실행됨.
fs.readFile('./new', 'utf8', (error, data) => {
  console.log(data);
})

console.log('Finish');

// Start
// Finish  -> 비동기 실행이기에 finish가 먼저 출력됨
// Nice to meet you


//비동기 실행
//특정 작업 완료 후 실행할 콜백을 등록해두고
//바로 다음 코드로 실행을 넘기는 것