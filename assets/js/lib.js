//model//
let html;
let _app = document.getElementById('app');
let playerChoiceSpan;
let computerChoiceSpan;

let _showName = '';
let winner = '';
let turn = 0;
let clicks = 0;
let _beats = '';
let _loses = '';
let _hintsDiv;

let _player2choice = '';
let _player1choice = '';
let _player1score = 0;
let _player2score = 0;
let _player1undecided = '?';
let _player2undecided = '?';
let _player1hp = 100;
let _player2hp = 100;
let _player1name = 'Rolf';
let _player2name = 'Computer';

function lg(s) {
    console.log(s);
}

updateView();
//View//
function updateView() {
    html = '';

    _choices = '';

    for (i = 0; i < choices.length; i++) {
        _choices += `<span id="${choices[i].choice}" onclick="_select(this)" onmouseover="_showChoice(this);" onmouseout="hideChoice()" class="choice" style="background-image: url('assets/img/choices/${choices[i].choice}.png');"></span>`;
    }

    html += `
        <div id="app-inner">

            <div id="row1">
                <div id="row1-col1">
                <h1>${_player1name}</h1>
                    <div id="hp-border-left">
                        <div id="hp-container-left">
                            <span class="hp-bar" style="width:${_player1hp}%;"></span>
                        </div>
                    </div>
                    
                </div>
                <div id="row1-col2">
                <div class="score-container">
                <div id="score-top-border">
                    <div id="score-top">
                        <h1>${_player1score}</h1>
                        <div class="seperator">&nbsp;</div>
                        <h1>${_player2score}</h1>
                    </div>
                </div>
                </div>
                </div>
                <div id="row1-col3"style="text-align:right;">
                <h1>${_player2name}</h1>
                     <div id="hp-border-right">
                        <div id="hp-container-right">
                            <span class="hp-bar" style="width:${_player2hp}%;"></span>
                        </div>                        
                    </div>
                    
                </div>
            </div>
            <div id="row2">
                <div id="picks">

                <div class="abcd">
                    <span style="background-image: url('assets/img/choices/${_player1choice}.png')"  class="pickedHand">
                    <h1 id="playerChoiceSpan">${_player1undecided}</h1>
                </span>
                </div>
                <div id="result">
                    <h1>${winner}</h1>
                </div>
                <div class="abcd">
                    <span style="background-image: url('assets/img/choices/${_player2choice}.png')" id="computerChoiceSpan" class="pickedHand">
                        <h1 id="computerChoiceSpan">${_player2undecided}</h1>
                    </span>
                </div>
                <div>
                    ${ (_player1choice == '' ? `&nbsp;` : _player1choice) }
                </div>
                <div>
                
                </div>
                <div>
                    ${ (_player2choice == '' ? `&nbsp;` : _player2choice) }
                </div>
                </div>
            </div>
            <div id="row3">
                <div id="hints-container " class="row3-col1 ">
                ${_hintsDiv}
                </div>
                <div id="gameview" class="row3-col2 box">
                    <section id="info">
                    <h1>Pick: </h1>
                    <h1 id="hint">${_showName}</h1>
                    </section>
                    <div id="choices">
                    ${_choices}
                    </div>
                    
                
            

            </div>
        </div>
        `;

    _app.innerHTML = html;

}

updateView();


//controller//
function _showChoice(som) {
    _showName = som.id;
    document.getElementById('hint').innerHTML = _showName;


}

function _showHints(elem) {
    _hintsDiv = '';

    for (i = 0; i < choices.length; i++) {

        if (elem.id == choices[i].choice) {

            _beats = '';

            for (o = 0; o < choices.length; o++) {

                if (choices[i].beats[o] != undefined) {

                    _beats += `<span class="choiceHint" style="background-image: url('assets/img/choices/${choices[i].beats[o]}.png');"></span>`;

                }

            }

        }

    }

    for (i = 0; i < choices.length; i++) {

        if (elem.id == choices[i].choice) {

            _loses = '';

            for (o = 0; o < choices.length; o++) {

                if (choices[i].losesTo[o] != undefined) {

                    _loses += `<span class="choiceHint" style="background-image: url('assets/img/choices/${choices[i].losesTo[o]}.png');"></span>`;

                }

            }

        }

    }

    _hintsDiv = `
    <div id="hints" class="box">
        <h1>Beats</h1>
        <div>
        ${_beats}
        </div>
        <h1>Loses to</h1>
        <div>
         ${_loses}
        </div>  
    </div>
    `

    updateView();
}


function hideChoice() {
    document.getElementById('hint').innerHTML = '';
    _hintsDiv = '';
}

function _select(chosenHand) {

    _player1undecided = ' ';
    _player2undecided = ' ';
    _player1choice = chosenHand.id;

    aiRandom();
    _chkWinAgainstComputer(_player1choice, _player2choice, aiThinkingTime());

}

function aiRandom() {
    return _player2choice = choices[Math.floor(Math.random() * choices.length)].choice;
}

function aiThinkingTime() {
    return Math.random() * 9 + 0.5;
}



function _chkWinAgainstComputer(player, ai, aiThink) {

    for (i = 0; i < choices.length; i++) {

        // teller opp og kjører en if statement hver gang den teller til den finner player i choices.choice


        if (player === choices[i].choice) {

            // fant "player" i choices[i].choice 
            //       ^-> er f.eks tree ^-> i er da 5 og i femte posisjon i json er "tree"

            // logger "i" for og vise posisjonen til player i json

            // siden vi fant "player" for eksempel tree i femte posisjon skal vi nå sjekke om AI vinner eller ikke med å 
            // telle opp i choice[i].beats eller i choices[i].losesTo[o]
            // 
            for (o = 0; o < choices.length; o++) {
                // teller opp 
                // sjekker funnet 'O'
                // 
                if (ai == choices[i].beats[o]) {
                    

                    let x = _player2hp - Math.random() * 31;
                    _player2hp = x;
                    winner = `${_player1name} wins`;
 

                    console.log(20);

                    if (_player2hp <= 0) {
                        _player1score++
                        _player2hp = 100;
                        _player2hp = 100;
                        updateView();
                    }

                }

                if (ai == choices[i].losesTo[o]) {
                    let x = _player1hp - Math.random() * 31;
                    _player1hp = x;
                    winner = `${_player2name} wins`;

                    if (_player1hp <= 0) {
                        _player2score++
                        _player1hp = 100
                        updateView();
                    }

                }

            }

            if (ai == choices[i].tie[0]) {
                let x = player1hp    + 10;
                let y = _player2hp + 10;

                _player2hp = y;
                winner = '<img src="assets/img/tie.png" height="70px" width="auto">';

            }

        }
    }

    updateView();

}

// for (i = 0; i < choices.length; i++) {
//     if (choices[i].choice === som.id) {
//         return true + console.log('true');
//     }
// }
