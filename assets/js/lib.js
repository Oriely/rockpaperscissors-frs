//model//
let html;
let _app = document.getElementById('app');
let _moves = ["rock", "paper", "scissor", "fire", "gun", "lightning", "snake", "human", "tree", "wolf", "sponge", "air", "water", "dragon", "devil"];
let _numberOfMoves;
let _randomMovePosition;
let _randomMove;
let _playerChoice;
let _player2Choice;
let _hint = '';
let _condition




//View//
function updateView() {
    html = '';

    html += `
            <div id="gameview">
                <section id="info">
                <h1>Pick: </h1>
                <h1 id="hint">${_hint}</h1>
                </section>
                <div id="choices">
                    `
    for (i = 0; i < choices.length; i++) {

        html += `<span 
        id="${choices[i].choice}" 
        onclick="_select(this)" 
        onmouseenter="_showChoice(this)" 
        class="choice" 
        style="background-image: url('assets/img/choices/${choices[i].choice}.png');">
        </span>`;

    }
    `  
                </div>
            </div>
        
    `;

    _app.innerHTML = html;
}


updateView();





//controller//

function _showChoice(som) {
    if (!_hint && _hint == _hint) {
        _hint = som.id;

    } else {
        _hint = '';
    }
}

function _select(chosenHand) {
    _playerChoice = chosenHand.id;
    aiRandom()
    testWin(_playerChoice, _randomMove);
}

function aiRandom() {
    let num = Math.floor(Math.random() * choices.length);
    _randomMove = choices[num].choice;
}

function testWin(player, ai) {
    for (i = 0; i < choices.length; i++) {

        // teller opp og kjører en if statement hver gang den teller til den finner player i choices.choice


        if (player === choices[i].choice) {

            // fant "player" i choices[i].choice 
            //       ^-> er f.eks tree ^-> i er da 5 og i femte posisjon i json er "tree"
            let foundPlayer = i;

            // logger "i" for og vise posisjonen til player i json
            console.log(i + ' FOUND PLAYER IN LIST');

            // siden vi fant "player" for eksempel tree i femte posisjon skal vi nå sjekke om AI vinner eller ikke med å 
            // telle opp i choice[i].beats eller i choices[i].losesTo[o]
            // 
            for (o = 0; o < choices.length; o++) {
                // teller opp 
                // sjekker funnet 'O'
                // 
                if (ai == choices[i].beats[o]) {
                    console.log(choices[i].beats[o] + ' player wins');

                } else console.log(choices[i].beats[o] + ' winning');

                if (ai == choices[i].losesTo[o]) {

                    console.log(choices[i].losesTo[o] + ' player loses');
                } else console.log(choices[i].losesTo[o] + ' losing');



            }

            if (ai == choices[i].tie[0]) {

                console.log('its a tie');

            }

        }
    }
}


function aiMove() {
    numberOfMoves = moves.length;
    randomMovePosition = Math.floor(Math.random() * numberOfMoves);
    randomMove = moves[randomMovePosition];
    updateView();
}

// for (i = 0; i < choices.length; i++) {
//     if (choices[i].choice === som.id) {
//         return true + console.log('true');
//     }
// }