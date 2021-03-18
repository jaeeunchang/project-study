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

### 카드 짝 맞추기
1. `if(click_flag && !완성카드.includes(c))` : click_flag가 true이고, 완성카드가 아닐때만 클릭할 수 있게

### 참조와 복사
1. 객체의 참조관계 끊는법 : slice() (배열에서 slice 사용)

2. 대입할때 원시값(문자열, 숫자, 불린)은 복사가 되고, 객체는 참조관계가 된다.
(참조 관계가 되면 둘중 하나가 바뀌면 나머지도 같이 바뀐다)

참조관계인지 확인하는 법 if( a === b ) 값이 true가 나오면 참조관계이다.
(참조관계가 아닌 객체는 모양이 똑같아도 false값이 나온다.)

### 객체 복사하는 방법 
1. 객체에 대입하는것이 아닌 원시값을 넣는방법
```javascript
var a = {one : 1, two : 2, three : 3};
var b = {};
b.one = a.one;
b.two = b.two;
```

2. Object.keys 메서드 이용해 객체의 속성명들을 배열로 바꾸는 방법
```javascript
var a = {one : 1, two : 2, three : 3};
var b = {};
Object.keys(a).forEach(function(key) {
    b[key] = a[key];
})
```
→ 속성 개수가 많아도 다 복사할 수 있다.

하지만 이런경우에는 완전한 복사라고 할 수 없다.
```javascript
var a = {one : 1, two : { three : 3} };
var b = {};

Object.keys(a).forEach(function(key) {
    b[key] = a[key];
})
```
b.one = a.one (one이 원시값이라 복사O)
b.two = a.two (two에 연결된것이 객체라 복사X 참조O) → b.two값 변경하면 a.two값도 변경된다.

얕은복사 = 참조, 깊은복사 = 복사 라고 생각하기.

### 깊은 복사
```javascript
var a = {one : 1, two : { three : 3} };
var b = {};
b = JSON.parse(JSON.stringfy(a)) //괄호 안에 복사하고싶은 대상 넣기
```
→ 이 코드를 이용하면 참조관계를 끊고 그나마 완전한 복사 된다.(100%완전X)

slice는 배열의 깊은복사방법이라 생각하면 된다. (100% 완전한 복사X)

=> 1단계 : Object.keys 메서드 이용/ slice 이용<br>
2단계 이상(객체안의 객체 있는 경우) : JSON.parse이용

### 프로토타입을 쓰는 이유
프로토타입 : 객체들간에 공유되는 것<br>
(프로토 타입 쓰면 한번에 수정, 삭제, 추가하기 쉽다.)
```javascript
var 프로토타입 = {
    type: '카드',
    attack: function() {},
    defend: function() {}
};
function 카드공장(name, att, hp) {
    var 카드 = {
        name: name,
        att: att,
        hp: hp
    }
    카드.__proto__ = 프로토타입 //참조
    return 카드;
}

//여기서 type을 장난감으로 바꿔야할때
프로토타입.type = '장난감'; //한번에 수정가능
```

### Object.create()
1. 하지만 프로토(__proto__)를 업무에서는 사용하면 안돼(비표준) <br>
→ Object.create()로 프로토타입 적용하기

```javascript
var 프로토타입 = {
    type: '카드',
    attack: function() {},
    defend: function() {}
};
function 카드공장(name, att, hp) {
    var 카드 = Object.create(프로토타입);
    카드.name = name;
    카드.att = att;
    카드.hp = hp;
    return 카드;
}
```
2. Object.assign으로 1단계 복사가 가능하다.
```javascript
//1단계 복사 코드
Object.keys(a).forEach(function(key) {
    b[key] = a[key];
})
//위 코드를 아래처럼 한줄로 줄일 수 있다.
Object.assign(b, a);
```

