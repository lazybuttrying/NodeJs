const EventEmitter = require('events');

const myEmitter = new EventEmitter();
const myEmitter2 = new EventEmitter();
//하나의 EventEmitter의 객체에 설정된 콜백함수는
//또다른 객체에 영향을 주지 않음. 서로 독립적임


//callback == listener == eventHandler
const callbacks = [];
callbacks[0] = () => { //배열에 이벤트핸들러를 담을 수 있음
  console.log('Success22');
};

//test라는 특정 메소드가 실행된 후에 콜백함수가 작동되도록 함
//특정 이벤트에 대한 이벤트 핸들러를 등록
myEmitter.on('test', () => { //on == addListener
  console.log('Success11');
});
myEmitter.on('test', callbacks[0]); //출력X - off 메소드에 의해서
myEmitter.off('test', callbacks[0]);
myEmitter2.on('test', () => { //하나의 이벤트에 여러개의 콜백함수 정의 가능
  console.log('Success33'); //출력X - eventemitter 객체가 달라서
});
myEmitter.once('test', () => { // 해당 이벤트에 대해 딱 한 번만 반응!!
  console.log('onceEventHandler');
});



//off - 이벤트 핸들러를 해제
//주의할 점 - 같은 콜백함수여야 함.


myEmitter.emit('test');
myEmitter.emit('test'); //emit으로 test 이벤트 실행
//중요!! ~ 그 이벤트에 대한 콜백함수까지 정의 후에 실행문 작성하라
// emit의 이벤트는 내가 아닌 node가 발생시켜주는 것!!
//- 파일 내용을 읽기 위해 데이터 스캔 시 발생하는 이벤트에서 사용
//- 외부에서 클라이언트 요청이 오면 발생하는 이벤트에서 사용


//node js는 이벤트를 기반으로 작동되는 것이 많으니 중요
//이벤트를 발생시키는 모든 객체는 EventEmitter 클래스의 객체!


console.log(myEmitter.listeners('test'));
//listenters - 특정 이벤트에 대한 이벤트 핸들러를 출력
//특정 이벤트에 어떤 이벤트핸들러가 설정되었는지 곧바로 조회 가능
//[ [Function (anonymous)], [Function (anonymous)] ]