const PI = 3.14;
let author = 'codeIt Teacher';
add((a, b) => {
  a + b;
});

let test = {
  date: "2020-09-20",
  types: ['safetyTest', 'performanceTest'],
  printTypes() {
    for (const i in this.types) {
      console.log(this.types[i]);
    }
  }
};

// exports.PI = PI;
// exports.test = test;
// exports.author = author;
// exports.plus = add;
//외부로 공개 허용

//exports.프로퍼티 이름 = 프로퍼티 값
//module.exports = 객체


//공개하고 싶은 것들을 모아서 하나의 객체로 만들어 공개
module.exports = calculator;
