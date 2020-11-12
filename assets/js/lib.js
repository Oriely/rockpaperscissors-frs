//model//
let html;
let _app = document.getElementById('app');
let playerChoiceSpan;
let computerChoiceSpan;
let _computerMove = '';
let _playerChoice = '';
let _showName;
let winner = '';
let turn = 0;
let _playerScore = 0;
let _computerScore = 0;
let clicks = 0;
let _choices = '';
let _beats = '';
let _loses = '';
let _playerUndecided = '?';
let _computerUndecided = '?';
let _hintsDiv;
let _playerHP = 100;
let _computerHP = 100;


function lg(s) {
    console.log(s);
}

updateView();
//View//
function updateView() {
    html = '';
    _choices = '';

    for (i = 0; i < choices.length; i++) {
        _choices += `<span id="${choices[i].choice}" onclick="_select(this)" onmouseover="_showChoice(this)" onmouseout="hideChoice()" class="choice" style="background-image: url('assets/img/choices/${choices[i].choice}.png');"></span>`;
    }

    html += `
        <div id="app-inner">

            <div id="row1">
                <div id="row1-col1">
                    <div class="hpbarOuter" id="playerHPouter">
                            <div id="playerHP" class="hpbar" ><span style="width:${_playerHP}%;"></span></div>
                    </div>
                    <h1>Player</h1>
                </div>
                <div id="row1-col2">
                <h1>
                ${_playerScore}
                |
                ${_computerScore}
                </h1>
                </div>
                <div id="row1-col3"style="text-align:right;">
                     <div class="hpbarOuter" id="computerHPouter">
                        <div id="computerHP" class="hpbar" >
                            <span style="width:${_computerHP}%;"></span>
                        </div>                        
                    </div>
                    <h1>Computer</h1>
                </div>
            </div>
            <div id="row2">
                <div id="picks">
                    <div> 
                    
                    </div>
                    <div>
                    
                    </div>
                    <div>
                    
                    </div>
                <div class="abcd">
                    <span style="background-image: url('assets/img/choices/${_playerChoice}.png')"  class="pickedHand">
                    <h1 id="playerChoiceSpan">${_playerUndecided}</h1>
                </span>
                </div>
                    <div id="result">
                    <h1>${winner}</h1>
                </div>
                <div class="abcd">
                    <span style="background-image: url('assets/img/choices/${_computerMove}.png')" id="computerChoiceSpan" class="pickedHand">
                        <h1 id="computerChoiceSpan">${_computerUndecided}</h1>
                    </span>
                </div>
                <div>
                    ${ (_playerChoice == '' ? 'Player hand?' : _playerChoice) }
                </div>
                <div>
                
                </div>
                <div>
                    ${ (_computerMove == '' ? 'Computer hand?' : _computerMove) }
                </div>
                </div>
                
            </div>
            <div id="row3">
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
                <div id="gameview" class="box">
                    <section id="info">
                    <h1>Pick: </h1>
                    <h1 id="hint">${_showName}</h1>
                    </section>
                    <div id="choices">
                    ${_choices}
                    </div>
                    
                </div>
                <div class="box">
                <h1>player</h1>
                
                    <h1>computer</h1>
                
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

    console.log('3');
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

    updateView();
}


function hideChoice() {
    document.getElementById('hint').innerHTML = '';
}

function _select(chosenHand) {

    _playerUndecided = ' ';
    _computerUndecided = ' ';
    _playerChoice = chosenHand.id;

    aiRandom();
    _chkWinAgainstComputer(_playerChoice, _computerMove, aiThinkingTime());

}

function aiRandom() {
    return _computerMove = choices[Math.floor(Math.random() * choices.length)].choice;
}

function aiThinkingTime() {
    return Math.random() * 9 + 0.5;
}



function _chkWinAgainstComputer(player, ai, aiThink) {
    document.getElementById('gameview').classList.toggle('disabled');

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


                    let x = _computerHP - 10;
                    _computerHP = x;
                    winner = "Player Wins!";

                    _playerScore++

                    console.log(20);
                    if (_computerHP == 0) _computerHP = 100;

                }

                if (ai == choices[i].losesTo[o]) {
                    let x = _playerHP - 10;
                    _playerHP = x;
                    winner = "Computer wins!";

                    _computerScore++
                    if (_playerHP == 0) _playerHP = 100;

                }

            }

            if (ai == choices[i].tie[0]) {
                let x = playerHP + 10;
                let y = _computerHP + 10;

                _computerHP = y;
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