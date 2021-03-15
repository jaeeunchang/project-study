
var screen = document.querySelector('#screen');

var start_time; //스코프 문제 해결
var end_time;
var record = [];
var time_out;

screen.addEventListener('click', function () {
    if (screen.classList.contains('waiting')) {
        screen.classList.remove('waiting');
        screen.classList.add('ready');
        screen.textContent = '초록색이 되면 클릭하세요';
        time_out = setTimeout(function () {
            start_time = new Date();
            screen.click();
        }, Math.floor(Math.random() * 1000) + 2000); //2000~3000사이의 수
        
    } else if (screen.classList.contains('ready')) {
        if(!start_time) { //빨간화면일때 클릭했을시(부정 클릭)
            clearTimeout(time_out);
            screen.classList.remove('ready');
            screen.classList.add('waiting');
            screen.textContent = '너무 성급하시군요!';
        } else {
            screen.classList.remove('ready');
            screen.classList.add('now');
            screen.textContent = '클릭하세요';
        }
        
    } else if (screen.classList.contains('now')) {
        end_time = new Date();
        console.log('반응속도',end_time - start_time,'ms');
        record.push(end_time-start_time);
        start_time = null; //한게임 끝나고 초기화
        end_time = null;
        screen.classList.remove('now');
        screen.classList.add('waiting');
        screen.textContent = '클릭해서 시작하세요';
    }
});

