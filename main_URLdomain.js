let url = new URL('https://www.youtube.com/results?search_query=iu+aphu')

// url : 웹 상의 특정 자원의 위치를 나타내는 문자열
// uniform resource locator
// 1. scheme = 프로토콜 이름
// 2. host = 특정 서버를 나타냄 = domain name
// 3. path = 원하는 자원의 위치의 경로
// 4. query = 서버 요청 시 원하는 것을 상세히 표현하기 위해 사용

// domain; root domain -> top-level domain(정부) -> second-level -> third level
// domain name resolution 과정!!, DNS service!! 면접질문
// 도메인 네임을 IP주소로 변환하는 작업 - name server의 도움 필요

console.log(url.protocol);
console.log(url.host);
console.log(url.pathname);
console.log(url.search);
// https:
// www.youtube.com
// /results
// ?search_query=iu+aphu


// url에 포트번호를 명시하지 않는 이유
// 특정 프로토콜로 통신하는 서버는 특정 포트 번호가 정해져 있기 때문
// ex - http=80, htttps = 443
// 원래는 protocol:포트번호로 써야 정확함

// !! 테스트는 3000에서
// 서비스 배포는 무조건 80, 433!!