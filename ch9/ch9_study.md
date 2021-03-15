## 9강 내용정리
___

### 반응속도 테스트
1. classList.contains로 현재 클래스를 파악 가능

### 시간체크와 예약어
1. new Date()를 하는 순간 그 시각이 저장된다.
```javascript
//방법1 : new Date 사용ver.
var start_time = new Date();

screen.addEventListener('click', function () {
    var end_time = new Date();
    console.log((end_time - start_time)/1000); //밀리초라서 1000으로 나누기
```
```javascript
//방법2 : console.time 사용ver.(주로 디버깅할때사용)
console.time('time');


screen.addEventListener('click', function () {
    console.timeEnd('time'); //앞에서 console.time()안에 들어간 이름 같게해줘야해

```
```javascript
//방법3 : performance.now 사용ver.
var start_time = performance.now();

screen.addEventListener('click', function () {
    var end_time = performance.now();
    console.log((end_time - start_time)/1000);
```
→ new Date와 performance.now의 차이점은?<br>
정밀한 시간을 측정해야할때 performance.now 사용 (소수점 아래자리까지 나오기때문)<br>
하지만 보통은 new Date 사용한다.

2. 예약어는 변수명으로 사용할 수 없다. ex)var, if, else, new, function

### 호출 스택(call stack)

1. Last In First Out : 후입선출(LIFO)구조

함수가 끝나면 빠져나간다.(}기준으로 생각하기)

### 타이머 제거

1. var 변수 = setTimeout()을 clearTimeout(변수)로 제거할 수 있다.

2. 비동기함수 스코프 밖에 변수선언하기

3. !는 true → false, flase → true로 바꾸는 연산자
```javascript
//빨간화면일때 클릭했을시(부정 클릭)
if(!start_time) {
            clearTimeout(time_out);
        }
```
start_time값이 undefined, 0, NaN, null, false중에 하나라도 해당된다면<br>
!start_time은 true가 된다.

### 재귀, 비동기와 호출 스택

1. maximum call stack exceeded : 호출 스택이 터진 에러

→ 재귀를 쓰다보면 이런 오류 발생가능

→ 비동기로 호출 스택을 비워줘서 문제 해결
