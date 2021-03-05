//구구단 구현

while(true) {
  var num1 = Math.ceil(Math.random() * 9);
  var num2 = Math.ceil(Math.random() * 9);
  var result = num1 * num2;
  while(true) {
    var answer = prompt (String(num1)+"*"+String(num2)+"= ?")
    if (result===Number(answer)) {
      alert("정답입니다.");
      break;
    }
    else {
      alert("오답입니다. 다시 입력해주세요.");
    }
  }
}
