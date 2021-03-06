## 12강 내용정리
___

### call by value

1. call by ~ : 인자와 매개변수 간의 관계를 의미한다.

2. 원시값은 복사가 되서 매개변수에 들어간다.(깊은 복사)

3. call by reference는 자바스크립트에 없다.

4. 객체의 속성을 수정할때는 참조이지만, 객체 자체를 수정할때는 참조 관계가 깨진다.<br>
→ 수정할때는 참조, 그 외에는 따로노는 느낌
```javascript
function 함수(매개변수) {
    매개변수.a = 10;        //참조를 통해 객체의 내부 속성 수정(a:5 → a:10)
    console.log(매개변수);
}

var 인자 = {a : 5};
함수(인자);                //{a : 10}
console.log(인자);         //{a : 10}
```
인자로 넣은값이 매개변수로 전달된다.


```javascript
//call by ref 아니라는 증거
function 함수(매개변수) {
    매개변수 = 8;          //매개변수를 통째로 수정함(a:5 → 8)
    console.log(매개변수);
}

var 인자 = {a : 5};
함수(인자);               //8
console.log(인자);        //{a : 5}
```
인자로 넣은값이 매개변수로 전달된다.
매개변수를 통째로 수정할때는 참조 관계가 끊긴다. → call by ref가 아니다.

### 생성자와 new

1. 생성자 함수의 이름의 첫글자는 대문자로 쓰는 약속이 있다.

```javascript
//팩토리 패턴으로 만드는 방법
var prototype = {
    type: '카드';
}
function 카드공장 (name, att, hp) {
    var 카드 = Object.create(prototype);
    카드.name = name;
    카드.att = att;
    카드.hp = hp;
    return 카드;
}
```

```javascript
//생성자 패턴으로 만드는 방법
function Card(name, att, hp) {
    this.name = name;
    this.att = att;
    this.hp = hp;
}
Card.prototype = protorype;

var jae = new Card('재',5,10) //jae 객체 생성된다
```
만약 여기서 `var jae = Card('재',5,10)` 이것처럼 new를 안붙이면 함수가 되어버린다.<br>
→ new를 꼭 붙여줘야한다.

2. 실무에서는 팩토리 패턴, 생성자 패턴 둘다 많이 사용한다.<br>
객체 지향 프로그래밍 → 생성자 패턴 많이 사용

3. this는 기본적으로 window이고, strict모드에서는 undefined이다.

4. 함수 안에 "use strict" 넣으면 엄격모드가 되서 this가 undefined라서 new 안붙이면 에러가 뜬다.

### 자스스톤 스크립트 초기 세팅

1. 변수 선언을 함수에 넣어야할지 고민일때.<br>
→ 변수가 변할 것 같으면 지역변수로, 변할 것 같지 않으면 전역변수로 빼면 좋다.

2. 입력을 받지 않는 경우라면 굳이 팩토리패턴을 쓰지 않아도 된다.

### cloneNode와 생성자 활용

1. cloneNode로 기존 태그를 그대로 복사할 수 있다.
(인자에 true를 넣으면 내부까지 다 복사한다)

2. 생성자 활용
```javascript
function 카드공장(영웅) {
    return new Card(영웅)
}
```

### 삼항 연산자, 리팩토링
1. 조건 ? 참 : 거짓<br>
→ 삼항연산자로 if문 대체가 가능하다

```javascript
if(내턴) {
    객체 = 나;
} else {
    객체 = 상대;
}
```
```javascript
var 객체 = 내턴 ? 나 : 상대;
```
내턴일 경우에는 객체가 나, 내턴이 아닐경우엔 객체가 상대.

2. return문을 리팩토링할때는 어떤함수를 return하는것인지 조심하기.

3. innerHTML / innerText

자바스크립트 코드로 div 내부 글 p 태그 내부 등 내부의 글을 가져올때 innerText 또는 innerHTML 을 사용

- innerHTML : html구조까지 복사한다 → 내부 html 코드를 변경할 수 있다.
- innerText : 텍스트값만 가져온다


### 죽은 카드 정리하기
1. 데이터 제거하는 방법
```javascript
if(데이터.hp <=0) { //카드가 죽었을때
    var 인덱스 = 상대.필드data.indexOf(데이터); //필드data=쫄병data
    if(인덱스 > -1) { //쫄병이 죽었을때
        상대.필드data.splice(인덱스, 1);
    } else { //영웅이 죽었을때

    }
}
```
indexOf로 데이터가 몇번째 인덱스에 있는지 찾고, splice로 데이터 빼내기

+)함수명에 함수의 기능 잘 녹여내기

