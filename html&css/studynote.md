### ch4.

1. css나 html은 기본적인 구조에서 위치가 정해져있는데 그 위치에서 벗어나고싶으면
position으로 위치 조정 가능

2. 
`position: static;` : 초기값
`position: relative;` : 위치를 계산할때 static의 원래위치부터 계산 (화면을 기반해서 위치)
`position: absolute;` : 원래 위치 상관없이 위치 지정 가능 (top, right, bottom, left를 주지 않아도 기존배치 흐름에서 벗어남)
`position: fixed;` : 스크롤을 내려도 계속 따라오는것

3. css공통으로 적용되는것은 id대신 class를 사용해서 묶어주면 좋다

4. 이미지 넣을때 항상 이미지를 설명하는 글도 넣어줘야한다.

5. css에서 공통적인 속성 3개 이상 겹치면 공통되는것을 뽑아서 묶어준다.

6. nth-child는 실무에서 사용 지양(나중에 유지/보수 힘들기 때문) 
→ 차라리 class를 주는게 더 좋을 수도 있다.

7. 기본적으로 뒤에 나오는 css가 우선순위가 높다
(important > inline style attribue > id > class = 다른 attribute > tag element순으로  우선순위가 높다.)

### chapter5

1. 블록 포맷 컨텍스트를 만드는 방법중에 inline-block, float, overflow가 visible이 아니다.

2. float : 공중에 뜨게 만들어서 그 다음 컨텐츠가 사이로 들어간다기 보다, 그 주변을 감싼다. (피해서 들어간다고 생각하면 된다)

3. 
- `overflow: auto;` : 자식이 부모보다 길이가 더 길때 스크롤박스를 만든다.
- `overflow: hidden;` : 자식이 부모보다 길이가 더 길때 넘치는 만큼 자른다.

4. 블록포맷 컨텍스트가 사용하기 어려우면 float 사용하고, 아래에 `clear: both;` 추가해주기

5. line-height 값을 너무 작게 주면 글자가 겹칠 수 있다.

6. float 어려우면 `dispaly: inline-block;` 사용해도 좋다.

7. computed에서 사용된 font 알 수 있다. → font-family로 폰트 수정 가능

`font-family: '돋움', Helvetica, sans-serif`
만약 돋움이 없으면 Helvetica, 그것도 없으면 sans-serif폰트가 적용된다.

8. `padding: 0 6px` = `padding: 0 6px 0 6px;`
