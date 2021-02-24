let m = require('./mathTools'); //js 확장자 생략가능
// 모듈 불러아서 상수 객체로 저장
// 상수로 받으면, 상수 m에 새로운 값을 다시 지정하려는 코드 자체에서 에러가 발생하기 때문에, 잘못된 코드를 작성하는 것을 미리 방지할 수 있죠.
console.log(m.PI);
console.log(m.author);
console.log(m.test.date);
console.log(m.test.types);
m.test.printTypes();
console.log(m.plus(1, 2));
