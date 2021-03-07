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
