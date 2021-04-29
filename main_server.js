// build a web server
// http://127.0.0.1:3000/ ip address + port number
//// 컴퓨터 자기 자신을 나타내는 주소 -> 서버 테스트 용도로 많이 사용
const http = require('http');//set protocol
// https = http+secure


// 서버 객체에 요청이 올 때마다 실행되는 내용
// request = 클라이언트의 요청에 관한 객체
// response = 그 요청에 따른 응답에 관한 객체
let server = http.createServer(function (request, response) {
  response.end('<h1>Hello world!</h1>');
});
server.listen(3000); //port number
// 클라이언트가 서버에 요청할 때, 서버의 어느 프로그램과 통신할지
// 나타내기 위해 지정하는 번호
