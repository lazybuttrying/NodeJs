const http = require('http');
// split()말고 Express 서브 파티 모듈로 Rounting 해보기
const express = require('express');
const { request, response } = require('express');
const app = express();

const users = ['Tom', 'Andy', 'Mika', 'Paul']


// 라우팅 경로에 따른 순서 배치 중요 
app.get('/', (request, response) => {
  response.end('<h1>Welcome!</h1>')
});

app.get('/users', (request, response) => {
  response.end(`<h1>${user}</h1>`);
});
app.get('/user/:id', (request, response) => {
  //console.log(request.params) //{ id: '3' }
  const userName = users[request.params.id - 1];
  response.end(`<h1>${userName}</h1>`);
});

// * : 나머지 모든 url
app.get('*', (request, response) => {
  response.end('<h1>Page is not available!</h1>');
});

app.listen(3000);
