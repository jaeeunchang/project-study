11강 내용정리
___
### 카드 뒤집기 구현
1. toggle은 스위치같은 개념 (불이 켜져있으면 끄고, 꺼져있으면 켜는)<br>
`card.classList.toggle('flipped');` :flipped라는 class가 없으면 넣고, 있으면 뺀다.

2. 스코프, 클로저 문제 -> 즉시실행함수
```javascript
//비동기, 클로저 발생
card.addEventListener('click',function() {
            card.classList.toggle('flipped');
        });
```
```javascript
//해결(즉시실행함수 사용)
(function (c) {
    card.addEventListener('clcik', function () {
        c.classList.toggle('flipped');
    });
})(card);
```

### 카드 색 부여하기

flag 변수 사용해서 세팅이 다 끝난뒤에 클릭가능하게 만든다.
```javascript
if(click_flag){ //미리 카드클릭할 수 없게
                    c.classList.toggle('flipped');
                }
```
