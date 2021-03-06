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
