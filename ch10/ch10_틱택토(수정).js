//틱택토 컴퓨터의 턴 구현

var body = document.body;
var table = document.createElement('table');
var lines = [];
var squares = [];

var turn = 'x';
var result = document.createElement('div');

function result_check(num_line, num_square) {
    var all_full = false; //세칸 다 채워졌는지 검사

    if( //가로줄 검사
        squares[num_line][0].textContent === turn &&
        squares[num_line][1].textContent === turn &&
        squares[num_line][2].textContent === turn 
    ) {
        all_full = true;
    }
    if( //세로줄 검사
        squares[0][num_square].textContent === turn &&
        squares[1][num_square].textContent === turn &&
        squares[2][num_square].textContent === turn
    ) {
        all_full = true ; 
    }
    //대각선 검사(모든 칸을 누를때마다 대각선 검사를 하도록 수정)
    if (
        squares[0][0].textContent === turn &&
        squares[1][1].textContent === turn &&
        squares[2][2].textContent === turn
    ) {
        all_full = true;
    }
    if (
        squares[0][2].textContent === turn &&
        squares[1][1].textContent === turn &&
        squares[2][0].textContent === turn
    ) {
        all_full = true;
    }

    return all_full;
};

function reset(무승부) {
    if(무승부) {
        result.textContent = '무승부!';
    } else {
        result.textContent = turn + '님의 승리!';
    }

    setTimeout(function() {
        result.textContent = '';
        squares.forEach(function (line) {
            line.forEach(function (square) {
                square.textContent = '';
            });
        });
    turn = 'x';
    }, 1000);
}

//칸 클릭했을때
var 비동기콜백 = function(event) {
    if(turn === 'o') { //컴퓨터의 턴일때 내가 클릭하지 않도록
        return;
    }

    var num_line = lines.indexOf(event.target.parentNode);
    var num_square = squares[num_line].indexOf(event.target);

    if(squares[num_line][num_square].textContent !== '') { //칸이 이미 채워져 있는가?
        console.log('빈칸이 아닙니다.');
    } else {
        console.log('빈칸입니다.');
        squares[num_line][num_square].textContent = turn;
        
        var 승리여부 = result_check(num_line, num_square);
        
        var 후보칸 = [];
        squares.forEach(function (line) {
            line.forEach(function (square) {
                후보칸.push(square);
            });
        });
        //textContent가 false인 값만 선택
        후보칸 = 후보칸.filter(function (square) { return !square.textContent });

        if (승리여부) { //다 찼을때
            reset(); //reset(false);이렇게 무승부값 넣는것도 가능
        } else  if (후보칸.length === 0) {
            reset(true);
        } else {
            if (turn ==='x') {
                turn = 'o';
            }
            setTimeout(function() {
                console.log('컴퓨터의 턴 입니다.');

                var 선택칸 = 후보칸[Math.floor(Math.random() * 후보칸.length)];
                선택칸.textContent = turn;

                var num_line = lines.indexOf(선택칸.parentNode);
                var num_square = squares[num_line].indexOf(선택칸);
                var all_full = result_check(num_line, num_square);
                if(승리여부) {
                    reset();
                }
                turn = 'x' //턴을 나에게로 넘기기
            }, 1000);
        }
    }
};
    

for(var i=1; i<=3; i+=1) {
    var line = document.createElement('tr');
    lines.push(line);
    squares.push([]);
    for(var j=1; j<=3; j+=1) {
        var square = document.createElement('td');
        square.addEventListener('click',비동기콜백);
        squares[i-1].push(square);
        line.appendChild(square);
    }
    table.appendChild(line);
}
body.appendChild(table);
body.appendChild(result);