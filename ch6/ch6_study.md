## 6장 내용정리
___

### array & fill
Array(숫자) : 빈 배열 만들기
배열이 empty일때는 반복문 불가
→ fill()로 채워주고 반복문 돌리기

### map 메서드
`배열.map(function(요소, 인덱스) => { return 요소 });`

map : 반복문을 돌면서 배열 안의 요소들을 1대1로 짝지어주는 것

for문은 몇번 반복해야하는지 정확히 알때, while문은 그걸 모를때나 기준값이 계속 바뀔때 사용하면 좋다.

실제 로또추첨기에는 random() 사용하면 안된다 → 수학적으로 엄밀하게 따지면 random()은 랜덤이 아니기때문

### slice & sort
.slice(시작, 끝) ex) `a.slice(0,6)` : 0 ~ 5

```javascript
> var lotto_num = [28,42,2,7,1,10]
> console.log(lotto_num.sort())
< lotto_num=[1,10,2,28,42,7]

> console.log(lotto_num.sort(function (p,c) { return p-c; }))  //p-c : 오름차순
< lotto_num=[1,2,7,10,28,42]

> console.log(lotto_num.sort(function (p,c) { return c-p; }))  //c-p : 내림차순
< lotto_num=[1,2,7,10,28,42]
```
작은 수 부터 차례로 정렬하려면 `.sort(function (p,c) { return p-c; })` 사용해야한다.

*원리 : p-c/c-p 뺀 결과가 0보다 크면 순서를 바꾼다.

### JS로 HTML 태그 선택하기
- .getElementById : html 태그를 id로 찾기(element = html 태그)
- .getElemntsByTagName : 태그 이름으로 찾기
- `.getElementsByClassName('보너스')[0];`
class는 여러개 사용할 수 있기때문에 뒤에 [0] 붙여줘야해

### 클로저
```javascript
for(var i=0; i<lotto_num.length; i+=1) {
    setTimeout(function 비동기콜백함수() {
        var ball = document.createElement('div');
        ball.textContent = lotto_num[i];
        result.appendChild(ball);
    }, 1000); //1000밀리초 = 1초
}
```
클로저 문제로 오류생김(중급시간에 다시배우고 이해하기)

```javascript
for(var i=0; i<lotto_num.length; i+=1){
    (function(j){
        setTimeout(function callback(){
            var ball = document.createElement('div');
            ball.textContent = lotto_num[j];
            result.appendChild(ball);
        }, j*1000);
    })(i);
}
```
클로저 문제를 해결한 코드(참고하기)

### JS로 CSS 조작하기
css 에서는 border-radius로 작성하는것을 js에서는 중간 '-'를 빼기로 인식 → js에서는 borderRadius

ex)abc-def-gh → abcDefGh

```javascript
setTimeout(function 비동기콜백함수() {
    var ball = document.createElement('div');
    ball.textContent = lotto_num[0];
    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '10px';
    ball.style.width = '20px';
    ball.style.height = '20px';
    ball.style.textAlign = 'center';
    result.appendChild(ball);
}, 1000); //1000밀리초 = 1초
```
ball과 bonus_ball에 쓰이는 css 디자인함수를 최대한 비슷하게 해서,
다른 부분은 매개변수로, 겹치는 부분은 다 함수로 만들어준다.

### 로또추첨기 마무리 & querySelector
html에서는 class로 쓰이는걸 js에서는 class사용 못해서 className 이런식으로 써야함

`.getElementById`에는 Element
`.getElementsByClassName`에서는 Elements

→ 이런차이 주의하기, querySelector로 바꿔서도 사용가능

`var result = document.getElementById('결과창');`
→ `var result = document.querySelector('#결과창');`

`var bonus_result = document.getElementsByClassName('보너스')[0];`
→ `var bonus_result = document.querySelector('.보너스')[0];`
