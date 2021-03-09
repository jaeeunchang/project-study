//45개 숫자 섞어서 나열한뒤 앞에서 6개, 보너스 숫자는 맨마지막에서 뽑기
//뽑힌 숫자를 1초에 한개씩 보여주는

// var num_list = Array(45);
// var fill = num_list.fill();
// var map = fill.map(function(element, index) {
//     return index + 1;
// });


var num_list = Array(45).fill().map(function(element, index) {
    return index + 1;
});
console.log(num_list);

var shuffle = [];
while(num_list.length > 0) {
    var a = num_list.splice(Math.floor(Math.random() * num_list.length),1)[0];
    shuffle.push(a);
}
console.log(shuffle);

var bonus = shuffle[shuffle.length - 1];
var lotto_num = shuffle.slice(0,6);
console.log('당첨 숫자 : ',lotto_num.sort(function (p,c) { return p-c; }),'보너스 숫자 : ',bonus);

var result = document.getElementById('결과창');

function color_ball(num, result) {
    var ball = document.createElement('div');
    ball.textContent = num;
    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '10px';
    ball.style.width = '20px';
    ball.style.height = '20px';
    ball.style.textAlign = 'center';
    ball.style.marginRight = '18px';
    var back_color;
    if (num < 10) {
        back_color = 'red';
    } else if (num <=20) {
        back_color = 'orange';
    } else if (num <=30) {
        back_color = 'yellow';
    } else if (num <=40) {
        back_color = 'blue';
    } else {
        back_color = 'green';
    }
    ball.style.background = back_color;
    result.appendChild(ball);
}

setTimeout(function 비동기콜백함수() {
    color_ball(lotto_num[0],result);
}, 1000); //1000밀리초 = 1초
setTimeout(function 비동기콜백함수() {
    color_ball(lotto_num[1],result);
}, 2000);
setTimeout(function 비동기콜백함수() {
    color_ball(lotto_num[2],result);
}, 3000);
setTimeout(function 비동기콜백함수() {
    color_ball(lotto_num[3],result);
}, 4000);
setTimeout(function 비동기콜백함수() {
    color_ball(lotto_num[4],result);
}, 5000);
setTimeout(function 비동기콜백함수() {
    color_ball(lotto_num[5],result);
}, 6000);


setTimeout(function 비동기콜백함수() {
    var bonus_result = document.getElementsByClassName('보너스')[0];
    color_ball(bonus,bonus_result);
}, 7000);

