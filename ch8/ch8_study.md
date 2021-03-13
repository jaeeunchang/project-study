## 8장 내용정리
___

### 지뢰 심기
```javascript
var num_list = Array(hor*ver).fill().map(function(element, index) {
        return index;
    });
```
1. hor*ver너비의 배열에 `.fill()`로 undefined 값을 채워넣는다. <br>
2. `.map(요소,인덱스)`로 배열안에 값을 채워넣는다.
3. `return index+1`은 1~100값을
4. `return index`는 0~99값을 리턴

피셔예이츠 셔플로 지뢰를 심을 20개의 위치를 뽑는다.

```javascript
//지뢰 심기
    for(var k=0; k<shuffle.length; k+=1) {
        var 가로 = Math.floor(shuffle[k] / 10);
        var 세로 = shuffle[k] % 10;
        console.log(세로, 가로);
        tbody.children[세로].children[가로].textContent = 'X'; //화면
        dataset[세로][가로] = 'X'; //우리가 관리하는 창
    }
```
1. 예시:59 → 6번째줄 9번째 칸(0부터 세기때문에 5번째줄 8번째 칸)<br>
floor(59/10) = floor(5.9) = 5<br>
2. tbody.children = tr

### 우클릭으로 깃발 꼽기
1. `contextmenu()` : 마우스 오른쪽 클릭 이벤트

2. target/currentTarget 차이점
- `e.target` : 이벤트가 실제로 발생한 대상      
- `e.currentTarget`: 이벤트 리스너를 단 대상

3. Array.prototype를 사용하면 배열이 아닌 것에도 indexOf 사용가능

4. 데이터와 화면을 일치시키는것이 중요 → 쉽게 일치시키기 위해 리액트, 앵귤러, 뷰 사용

### 주변 지뢰 개수 세기

1. concat : 배열과 배열을 합쳐서 새로운 배열을 만든다

### 스코프(범위) 문제

function 안에 var로 선언한 변수는 function 밖에서는 접근할 수 없다.(var은 선언한 함수 내부에서만 유효)

→ 스코프 : 변수의 접근 가능한 범위라고 생각하면 된다.

같은 변수 이름을 사용할때 주의할 점
```javascript
var x ='a';
function ex() {
    var x = 'b';
    x = 'c';
}
```
예시1. ex(); window.alert(x);  → a

```javascript
var x ='a';
function ex() {
    x = 'b';
    x = 'c';
}
```
예시1.ex(); window.alert(x);  → c<br>
function안에 있던 x 변수를 밖에서 찾고 결국 함수 밖에서 선언한 x값을 수정 a→b→c.

### 스코프 체인/ 렉시컬 스코프

- 스코프 체인 : 스코프간의 상하관계

function inner함수에서 먼저 찾고, outer함수에서 찾고, 그 뒤에 밖으로 나가서 찾는다

- 렉시컬 스코프(=정적 스코핑) : 코드가 적힌 순간 스코프가 정해지는 것

var 말고 function 선언도 스코프 적용을 받는다

자바스크립트는 정적 스코핑 언어

### 클로저

1. 함수와 함수가 접근할 수 있는 스포크가 **클로저** 관계를 맺는다.

2. 반복문과 비동기 함수가 만날때 클로저 문제가 자주 발생한다.
```javascript
//예시
for(var i=0; i<100; i+=1) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
}
```
우리가 원한 것 : 1초부터 99초까지 진행되면서 1~99 숫자 출력

컴퓨터가 해석한 코드 : 1~99초 진행되면서 i 출력 (함수 실행이 안되었기 때문)
```javascript
//실행된 결과 코드
setTimeout(function() {
    console.log(i);
}, 0 * 1000);

setTimeout(function() {
    console.log(i);
}, 1 * 1000);

...

setTimeout(function() {
    console.log(i);
}, 99 * 1000);

```

### 클로저 문제 해결법

```javascript
//예시문제 해결법
for(var i=0; i<100; i+=1) {
    function 클로저(j) {
        setTimeout(function () {
        console.log(j);
    }, j * 1000);
 }
 클로저(i);  
}
```

```javascript
//로또추첨기코드 클로저 문제 해결
for(var i=0; i<당첨숫자들.length; i++) {
    function 클로저(j) {
        setTimeout(function () {
            color_ball(당첨숫자들[j], 결과창);
        }, (j+1) * 1000);
    }
    클로저(i);
}
```

```javascript
//로또추첨기코드 클로저 문제 해결(즉시실행함수로 수정)
for(var i=0; i<당첨숫자들.length; i++) {
    (function 클로저(j) {
        setTimeout(function () { //매개변수j와 이 줄의 function이 클로저 관계
            color_ball(당첨숫자들[j], 결과창);
        }, (j+1) * 1000);
    })(i);
}
```
1. 변수가 무엇인지 확인, 스코프체인 거슬러 올라가는 연습
2. 비동기 함수에서는 실행하는 순간에야 변수가 무엇인지 찾는다
3. 클로저의 특성
