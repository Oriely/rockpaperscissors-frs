//model//
let html;
let _app = document.getElementById('app');
let _computerMove = '';
let _playerChoice = '';
let _hint;
let winner = '';
let turn = 0;
let _playerScore = 0;
let _computerScore = 0;
let clicks = 0;
let playerChoiceSpan = document.getElementById('playerChoiceSpan');
let computerChoiceSpan = document.getElementById('computerChoiceSpan');

let _choices = '';
let _beats = '';
let _loses = '';

function lg(s) {
    console.log(s);
}


//View//
function updateView() {
    html = '';


    _choices = '';
    for (i = 0; i < choices.length; i++) {

        _choices += `<span id="${choices[i].choice}" onclick="_select(this)" onmouseover="_showChoice(this)" onmouseout="hideChoice()"class="choice" style="background-image: url('assets/img/choices/${choices[i].choice}.png');"></span>`;

    }

    html += `
        <div id="col1">
        <span id="computerPic"></span>
        </div>
        <div id="col2">
        
            <div></div>
            <div id="picks">
            <div></div>
            <div></div>
            <div></div>
            <div>
            <span style="background-image: url('assets/img/choices/${_playerChoice}.png')" id="playerChoiceSpan" class="pickedHand">
            <h1>?</h1>
            </span>
            </div>
            <div id="result">
            <h1>${winner}</h1>
            </div>
            <div>
            <span style="background-image: url('assets/img/choices/${_computerMove}.png')" id="computerChoiceSpan" class="pickedHand">
            <h1>?</h1>
            </span>
            </div>
            <div>${_playerChoice}</div>
            <div></div>
            <div>${_computerMove}</div>
            </div>
            <div class="box">
            <h1>Player wins: ${_playerScore}</h1>
            <br>
            <h1>Computer wins: ${_computerScore}</h1>
            </div>
        </div>
        <div id="col3">
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
                <h1 id="hint">${_hint}</h1>
                </section>
                <div id="choices">
                ${_choices}
                </div>
                
            </div>

        </div>
                `

    _app.innerHTML = html;
}
updateView();





//controller//

function _showChoice(som) {
    _hint = som.id;



    document.getElementById('hint').innerHTML = _hint;
    for (i = 0; i < choices.length; i++) {
        if (som.id == choices[i].choice) {
            _beats = '';
            for (o = 0; o < choices.length; o++) {
                if (choices[i].beats[o] != undefined) {
                    _beats += `<span onclick="_select(this)" onmouseover="_showChoice(this)" onmouseout="hideChoice()"class="choiceHint" style="background-image: url('assets/img/choices/${choices[i].beats[o]}.png');"></span>`;
                }
            }
        } else console.log('3');
    }
    for (i = 0; i < choices.length; i++) {
        if (som.id == choices[i].choice) {
            _loses = '';
            for (o = 0; o < choices.length; o++) {
                if (choices[i].losesTo[o] != undefined) {
                    _loses += `<span onclick="_select(this)" onmouseover="_showChoice(this)" onmouseout="hideChoice()"class="choiceHint" style="background-image: url('assets/img/choices/${choices[i].losesTo[o]}.png');"></span>`;
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

    _playerChoice = chosenHand.id;
    aiRandom();
    testWin(_playerChoice, _computerMove);

    updateView()

}

function aiRandom() {
    return _computerMove = choices[Math.floor(Math.random() * choices.length)].choice;
}

function aiThinkingTime() {
    return Math.random() * 9 + 0.5;
}



function testWin(player, ai) {
    document.getElementById('gameview').classList.toggle('disabled')
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
                    winner = "Player Wins!";
                    _playerScore++

                }

                if (ai == choices[i].losesTo[o]) {
                    winner = "Computer wins!";
                    _computerScore++
                }

            }

            if (ai == choices[i].tie[0]) {
                winner = '<img src="assets/img/tie.png" height="70px" width="auto">';
            }

        }
    }
    updateView()
}

// for (i = 0; i < choices.length; i++) {
//     if (choices[i].choice === som.id) {
//         return true + console.log('true');
//     }
// }