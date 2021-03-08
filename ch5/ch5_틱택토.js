var body = document.body;
var table = document.createElement('table');
var lines = [];
var squares = [];

var turn = 'x';
var result = document.createElement('div');

var ASynchronous = function(event) {
    var num_line = lines.indexOf(event.target.parentNode);
    var num_square = squares[num_line].indexOf(event.target);


    if(squares[num_line][num_square].textContent !== '') { //칸이 이미 채워져 있는가?
        console.log('빈칸이 아닙니다.');
    } else {
        console.log('빈칸입니다.');
        squares[num_line][num_square].textContent = turn;

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
        //대각선 검사
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
        if (all_full) { //다 찼을때
            result.textContent = turn + '님의 승리!';

            turn = 'x';
            squares.forEach(function (line) {
                line.forEach(function (square) {
                    square.textContent = '';
                });
            });
        } else {
            if (turn ==='x') {
                turn = 'o';
            } else {
                turn = 'x'
            }
        }
    }
};
    

for(var i=1; i<=3; i+=1) {
    var line = document.createElement('tr');
    lines.push(line);
    squares.push([]);
    for(var j=1; j<=3; j+=1) {
        var square = document.createElement('td');
        square.addEventListener('click',ASynchronous);
        squares[i-1].push(square);
        line.appendChild(square);
    }
    table.appendChild(line);
}
body.appendChild(table);
body.appendChild(result);