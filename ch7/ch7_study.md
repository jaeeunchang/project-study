## 7장 내용정리
___

### setInterval, querySelectorAll

- setTimeout() : 타임아웃 지연 시간 후 타임아웃 코드 실행(1번 실행)<br>
- setInterval() : 타임아웃 시간 주기로 타임아웃 코드를 무한 반복 실행

- `.querySelector()` : 요소 선택(단, 선택자에 해당하는 **첫번째** 요소만 선택)
- `.querySelectorAll()` : 요소 전부 선택, `.forEach`라는 반복문 지원


→ html에서 비슷한 기능을 가진 버튼들을 같은 class로 묶고,
  querySelectorAll의 forEach 사용해서 반복문 돌려서 이벤트리스너 넣고 버튼기능 활성화

### 딕셔너리 자료구조
자바스크립트 객체는 딕셔너리 자료구조 역할을 할 수 있다.

### Object.entries, find, findIndex
`Object.entries(객체)`: 객체를 배열로 바꾸기, [키, 값] 쌍을 담은 배열 반환

배열.find는 반복문이지만 원하는 것을 찾으면(return이 true) 멈춘다.

→ 오늘배운 반복문 
1.`document.querySelect('#a').forEach` 2.`Object.entries(a).find`

1차원 배열에서는 indexOf를 주로 사용, 2차원 배열에서는 find, findIndex를 자주 쓴다.

### 변수를 사용해 중복 제거하기

배열.includes : || 관계를 줄일 수 있다

