const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// myEmitter.on('test', (arg1, arg2) => {
//   console.log(arg1);
//   console.log(arg2);
//   //console.log(arg3);
//   //console.log(arg4); //
// });

//이벤트에 추가 정보와 함께 전달하기
//지정한 parameter보다 더 많이 와도 알아서 무시해준다.
//적게 왔다면 undefined로 인지하니깐
// myEmitter.emit('test', 'apple', 'banana', 'pear');

//인자가 여러 개인 것보다 객체로 넘기는 것이 좋다
const obj = { type: 'text', data: 'Hello', date: '2021-03-02' }
myEmitter.on('test', (info) => {
  console.log(info);
});
myEmitter.emit('test', obj);