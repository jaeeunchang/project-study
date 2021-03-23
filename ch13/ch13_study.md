## 13강 내용정리
___

### 2048 게임 기본 세팅

핵심 기능
- 1. 스와이프 기능
- 2. 숫자 합치는 기능

### mousedown, mouseup, mousemove
- mousedown : 마우스 누를 때
- mousemove : 마우스 움직임
- mouseup : 마우스 뗄 때

``` javascript
var drag_start = false; //플래그 변수 → mousemove 통제

window.addEventListener('mousedown', function(event) {
    console.log('mousedown', event);
    drag_start = true;
});
window.addEventListener('mousemove', function(event) {
    if(drag_start) {
        console.log('mousemove', event);
    }
});
window.addEventListener('mouseup', function(event) {
    console.log('mouseup', event);
    drag_start = false;
});
```
플래그 변수를 둬서 mousemove가 mousedown후의 상태에서만 인식될 수 있게 통제<br>
다시 마우스를 떼면 플래그변수값이 false가 되서 mousemove 콘솔에서 보이지 않게 한다.

- screenX : 모니터 기준 좌표
- pageX : 페이지(스크롤 포함)
- clientX : 브라우저 화면 기준
- offsetX : 이벤트 타겟 기준
