//별찍기(반복문 연습)

//1.별트리
for(var star=1; star<=5 ; star+=1) {
  console.log("*".repeat(star));
}


//2.역순
for(var star=5; star>=1 ; star-=1) {
  console.log("*".repeat(star));
}


//3.별트리 2배수
for(var star=1; star<=16; star*=2) {
  console.log("*".repeat(star));
}


//4.앞에 공백이 있는 역순
for(var star=5; star>=1 ; star-=1) {
  console.log(" ".repeat(5-star)+"*".repeat(star));
}


//5.역순 가운데정렬(9-7-5-3-2-1)
for(var star=9; star>=1 ; star-=2) {
  console.log(" ".repeat((9-star)/2)+"*".repeat(star)+" ".repeat((9-star)/2));
}

//+) 보통 star 초기값을 0으로 많이 잡기때문에 개수 조심하기.
