//끝말잇기 구현

var word = "칼륨";
alert("첫 제시어는"+word+"입니다.");

while(true) {
  var answer = prompt(word)
  if(word[word.length-1] === answer[0]){
    word = answer;
    alert("딩동댕");
  }
  else {
    alert("땡!");
    break;
  }
}
