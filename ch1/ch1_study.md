## 1장 내용정리
___

### 비교 연산자
```
> S == 'S'
< true
> S === 'S'
< false
```
→ 더 정확한 비교를 하기 위해 == 대신 ===, !=대신 !==사용 권장

```
> NaN == NaN
< false
> NaN === NaN
< false
```
→ 예외의 경우

### 변수(var) 
변수 이름으로 영어, 한국어, $, _만 사용 가능<br>
(숫자는 변수명 첫 글자에만 사용 불가능)

### null, undefined
undefined 대신 null을 쓰는 게 좋다.<br>
(undefined는 컴퓨터가 넣어준 빈 값, null은 내가 넣어준 빈 값으로 구별하기)
```
> ''
< ""
```
→ 빈 값이 아닌 문자열이라 큰따옴표 반환함

### 조건문(if)
```
var 답 = prompt('답?')
if (5*5 === Number(답)) {
		'딩동댕'
		} else {
		'땡'
		}
```
→ 사용자에게 값을 받아서 결과를 출력하는 조건문

### 연산자 심화
```
> '문자2' + 5 
< "문자25"
> String(5)
< "5"
> Number('5')
< 5
```

### 함수
```
function 더하기(x, y) {
return x+y;
	}
```
→ 반복을 최소화하기 위해 사용

### 반복문(while,for)
```
처음
while(조건) {
      실행
      끝
}
```
```
for (처음; 조건; 끝) {
     실행
}
```
→ for 쓰면 코드를 짧게 줄일 수 있다.
