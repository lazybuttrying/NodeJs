const http = require('http');
// 문자열은 ''로 표현

const users = ['Tom', 'Andy', 'Mika', 'Paul']
// let server = http.createServer(function (request, response) {

// use arrow function
// 새로 대입할 일이 없는 변수는 상수로 설정하자
const server = http.createServer((request, response) => {
  //console.log(request.url);//접속 주소가 console에 나옴

  // routing
  if (request.url === '/') {
    response.end('<h1>Welcome!</h1>');
  } else if (request.url === '/users') {
    response.end('<h1>' + users + '</h1>');
  } else if (request.url.split('/')[1] === 'users') {
    // -> /users/1, /users/2 ... 
    let userIdx = request.url.split('/')[2];
    let userName = users[userIdx - 1];
    response.end(`<h1>${userName}</h1>`);
  } else {
    response.end('<h1>Page is not available!</h1>');
  }

  //response.end('<h1>Hello world!</h1>');

});
server.listen(3000);
