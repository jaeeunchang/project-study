## 3장 내용정리
___

### window 객체
window는 브라우저, document는 페이지(탭)

`window`는 전역객체라서 생략가능

```javascript
> var name = 'jae'
> window.name
< "jae"
```
→ 전역변수는 전역객체의 속성이 된다<br>
다만, 함수 안의 변수(지역변수)는 window에 등록되지X

### document객체와 DOM
![DOM객체이미지_위키백과](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/330px-DOM-model.svg.png)

### script 태그 사용법
.textContent/.value

### 이벤트 리스너 맛보기
- `.focus` : 입력하고 입력창에 커서가 가있도록 함.

- form에서 엔터를 치면 다른페이지로 넘어가거나 새로고침 된다<br>
(submit의 기본동작이 새로고침이기 때문)<br>
→ 이 기본동작을 바꿔주고싶을때는 `.preventDefault()` 사용
