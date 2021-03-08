## 5장 내용정리
___

### 이차원 배열
배열안에 배열이 들어있는 형태
```
var a =[
 [1, 2, 3]
 [4, 5, 6]
 [7, 8, 9]
]
```

### e.target & parentNode
target : 이벤트를 발생시킨 객체
```javascript
var ASynchronous = function(event) {
    console.log(event.target);                       //클릭된 애
    console.log(event.target.parentNode);            //클릭된 애 부모태그
    console.log(event.target.parentNode.parentNode); //클릭된 애 부모태그의 부모태그
    console.log(event.target.children);              //클릭된 애 자식태그
};
```

### forEach와 중첩반복문
forEach : 배열의 반복문
```javascript
칸들.forEach(function (줄) {
  줄.forEach(function (칸) {
    console.log(칸);
  })
});
```
2차원 배열에는 배열의 반복문 forEach가 두번 필요하다

3번 이상 중첩된 반복문은 그다지 좋은 알고리즘이 아니다 → 최대한 중첩반복문 횟수를 줄이는게 실력

