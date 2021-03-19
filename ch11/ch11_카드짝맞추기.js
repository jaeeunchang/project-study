var row = 4;
var column = 3;
var color_list = ['red', 'red', 'orange', 'orange', 'blue', 'blue', 'yellow', 'yellow', 'white', 'white', 'pink', 'pink'];
var color_list2 = color_list.slice();
var color = [];
var click_flag = true;
var click_card = [];
var complete_card = [];
var start_time;

function shuffle() {
    for (var i=0; color_list2.length>0 ; i+=1) {
        color = color.concat(color_list2.splice(Math.floor(Math.random() * color_list2.length), 1));
    }
}





function card_setting(row, column) {
    click_flag =false;
    for (var i=0; i<row*column; i+=1) {
        var card = document.createElement('div');
        card.className = 'card';

        var cardInner = document.createElement('div');
        cardInner.className = 'card-inner';

        var cardFront = document.createElement('div');
        cardFront.className = 'card-front';

        var cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.style.backgroundColor = color[i];

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);

        (function (c) {
            card.addEventListener('click', function() {
                if(click_flag && !complete_card.includes(c)){ //미리 카드클릭할 수 없게
                    c.classList.toggle('flipped');
                    click_card.push(c);
                    if(click_card.length === 2) {
                        if(click_card[0].querySelector('.card-back').style.backgroundColor
                            === click_card[1].querySelector('.card-back').style.backgroundColor) {
                            complete_card.push(click_card[0]);
                            complete_card.push(click_card[1]);
                            click_card = [];

                            if(complete_card.length === row*column) {
                                var end_time = new Date();
                                alert('축하합니다!'+(end_time - start_time)/1000+'초 걸렸습니다.');
                                document.querySelector('#wrapper').innerHTML = ''; //내부 태그 다 지우기
                                color_list2 = color_list.slice();
                                color = [];
                                complete_card =[];
                                start_time;
                                shuffle();
                                card_setting(row, column);
                            }
                        } else {
                            click_flag = false;
                            setTimeout(function() {
                                click_card[0].classList.remove('flipped');
                                click_card[1].classList.remove('flipped');
                                click_flag = true;
                                click_card = [];
                            }, 1000);
                        }
                    }
                }
            });
        })(card);
        document.querySelector('#wrapper').appendChild(card);
    }

    //처음에 카드 외울시간
    document.querySelectorAll('.card').forEach(function (card , index) {
        setTimeout(function() {
            card.classList.add('flipped');
        },1000 + 100 * index); //촤르륵 효과
    });

        setTimeout(function() {
            document.querySelectorAll('.card').forEach(function (card , index) {
            card.classList.remove('flipped');
        }); 
        click_flag = true;
        start_time = new Date();
    }, 5000); //5초 뒤에 닫음

}
shuffle();
card_setting(row, column);