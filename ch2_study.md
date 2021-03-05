## 2장 내용정리
___

### 객체 기본
객체는 함수와 배열을 포함하는 큰 개념
~~~javascript
var 학생 = {}
var 학생 = {
    이름 : "jae",
    키 : 180,
    먹다 : function 먹다() {
      console.log("냠냠")
      }
    }
~~~
여기서 이름과 키는 '속성(property)'에 해당되고, 먹다는 '함수인 속성(method)'에 해당된다.
~~~
객체 ={
속성(프로퍼티): 값
속성(메서드) : 함수
}
~~~

### 객체의 속성
~~~javascript
> var 학생 = {}
> var 학생 = {
     이름 : "jae",
     키 : 180,
     먹다 : function 먹다() {
       console.log("냠냠")
      }
    } 
> var 값 = '이름'
< 학생.값
> undefined
< 학생.[값]
> "jae"
~~~
대괄호 안에는 변수 사용가능, 점 뒤에는 변수 사용 불가능.

### 배열 기본
값 그룹화는 하고싶지만 속성 이름을 따로주고싶지 않을때 배열 사용

`Array.isArray(배열이름)`으로 배열과 배열이 아닌것을 구별할 수 있음

이 외에도 `Math, Numver, String, Boolean, window`등의 객체를 지원.


