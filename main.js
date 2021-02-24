const EventEmitter = require('events');

const myEmitter = new EventEmitter();

//test라는 특정 메소드가 실행된 후에 콜백함수가 작동되도록 함
myEmitter.on('test', () => {
  console.log('Success!!');
});
myEmitter.emit('test');