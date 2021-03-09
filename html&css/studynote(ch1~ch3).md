## 강의 내용정리

### ch1
1. `document.head.parentNode.removeChild(document.head);` : <head> 지우는 코드(css지워진 상태를 볼 수 있음)

2. `<!-- 주석 -->`
3. legend는 박스, checkbox는 여러개선택O, radio는 여러개선택X
```html
<fieldset>
            <legend>검색</legend>
            <input />
            <button>검색</button>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="radio" name="group" />
            <input type="radio" name="group" />
</fieldset>
```

4. 탭처리가 중요하다.
5. ul은 비정렬된 리스트, ol은 정렬된 리스트
6. alt로 이미지 설명을 달아주기
```
<li><img src="./한국일보.png" alt="한국일보"></li>
<li><img src="./한국경제.png" alt="한국경제"></li>
```

### ch2
1. 구역은 `<div>로 나누고, `<div id="header">`이런식으로 구분함

→ 큰 구역은`<header>,<nav>,<main>,<footer>` 태그 이용하기

2. 구역 가운데 정렬 설정하기
`<div style="margin: 0 auto; width: 1080px;">`

3. 여러태그에 같은 디자인 설정하는법 : ,로 연결하기
```css
div#header, div#footer {
    margin: 0 auto;
    width: 1080px;
}
```

4. `div#header-center`를 `#header-center`처럼 div 생략해서 써도 된다.

다만, `<header>,<nav>,<main>,<footer>`이 태그들은 꼭 앞에 붙여줘야한다.

5. `<head>`부분에 `<link rel="stylesheet" href="./naver.css">` 넣어서 css 연결해줘야 함

6. css에서 자식태그와 자손태그 차이
```css
#header-search > h1 {
    width: 280px;        /*자식태그*/
}

#header-center h1 {
    width: 280px;        /*자손태그*/
}
```
보통 자손태그를 더 많이 사용

7. dispaly block 속성을 inline-block으로 바꿔줘야 margin 줄일 수 있음 → 로고와 검색창 나란히 배치 가능

- block : 너비 100% 다 차지
- inline : 콘텐츠 부분만 차지
- inline-block : width와 height 지정해줄 수 있다.

div태그는 inline-block, span태그는 inline 사용

### ch3
1. `.blind` css : 태그에 blind css 적용하면 화면에서는 사라지지만, 스크린리더에서는 읽힌다.

2. css 에서 class는 앞에 . 사용 id는 앞에 # 사용
- class : 하나의 태그에 여러 클래스 적용가능, 같은 클래스 여러 태그에 적용가능

`<h2 class = "blind num1 babo"></h2>`: 하나의 태그에 여러개 적용하는법(띄어쓰기)
- id : 한번만 사용

3. 이미지 스트라이프 : 관련있는 이미지를 하나로 묶어놓은것 → 서버로의 요청 횟수를 최소화
```css
background-image: url(./sp_search.png);  /*이미지 url 링크를 붙여도 되고, 현재 이미지 파일이 있는 위치를 적어도 된다.*/
background-position: -4px -10px;         /*background-position : 좌우 상하; (좌-/우+ 상-/하+)*/
background-repeat: norepeat;             /*할당된 이미지공간 남아서 반복되는걸 막아줌*/

background: url(./sp_search.png) -4px -10px no-repeat;  /*3줄코드 한번에 압축해서도 사용가능*/
```

4. blind/ display:none 이외에 숨기는 방법
```css
#header-search > h1 {
 text-indent: 100%;    /*글자들여쓰기, 100%면 h1에게 주어진 공간을 넘어선 맨끝으로 간다*/
 overflow: hidden;     /*주어진 공간을 넘어선 것을 숨기는것*/
 }
```
처음에는 display:none 사용해도 되지만 나중의 웹 접근성을 고려하면 위와 같은 방법이 좋다.

5. 항상 a태그 공간이 제대로 적용되어있는지 확인하기!

`text-decoration: none;` : a태그로 생긴 밑줄 없애기

6. margin border padding context
```css
padding: 12px 0 12px 10px;  /*padding: 위 오른쪽 아래 왼쪽 (시계방향)*/
border: 2px solid #03cf5d;  /*border: 굵기 선의형태 색상(hex표기법)*/
```

7. width를 content에서 border 기준으로 바꾸기

`box-sizing: border-box;` : width를 content~border까지 포함한 값으로 만들어준다. → 최대한 모든항목에 적용하는것을 추천
```css
* {
    box-sizing: border-box;
}
```
box-sizing: border-box 전체에 적용하기

8. 기본css 브라우저마다 다 다르게 보일 수 있음 → 없애주는것이 좋다

ex) button/input 태그는 아웃라인이 기본으로 생성된다 

9. vertical-align은 display가 inline, inline-block 이어야만 적용된다

10. span의 기본 `display: inline` → 가로세로 높이를 마음대로 바꿀 수 없다(자기contents 영역만큼 차지하기때문)<br>
이것을 `display: inline-block`으로 바꿔주면 가로세로 높이를 지정해줄 수 있다.

