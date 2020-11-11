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

function lg(s) {
    console.log(s);
}



//View//
function updateView() {
    html = '';

    html += `
        <div id="col1">
        <span id="computerPic"></span>
        </div>
        <div id="col2">
        
            <div>Rock paper scissors..... etc..</div>
            <div id="picks">
            <div></div>
            <div></div>
            <div></div>
            <div>
            <span style="background-image: url('assets/img/choices/${_playerChoice}.png')" class="pickedHand">
            
            </span>
            </div>
            <div id="result">
            <h1>${winner}</h1>
            </div>
            <div>
            <span style="background-image: url('assets/img/choices/${_computerMove}.png')" class="pickedHand">
            
            </span>
            </div>
            <div>${_playerChoice}</div>
            <div></div>
            <div>${_computerMove}</div>
            </div>
            <div id="score">
            <h1>Player wins: ${_playerScore}</h1>
            <br>
            <h1>Computer wins: ${_computerScore}</h1>
            </div>
        </div>
        <div id="col3">
            <div id="gameview">
                <section id="info">
                <h1>Pick: </h1>
                <h1 id="hint">a</h1>
                </section>
                <div id="choices">
                    `
    for (i = 0; i < choices.length; i++) {

        html += `<span 
        id="${choices[i].choice}" 
        onclick="_select(this)" 
        onmouseover="_showChoice(this)" 
        onmouseout="hideChoice()"
        class="choice" 
        style="background-image: url('assets/img/choices/${choices[i].choice}.png');">
        </span>`;

    }
    `  
                </div>
            </div>
            </div>
        
    `;

    _app.innerHTML = html;
}
updateView();





//controller//

function _showChoice(som) {
    _hint = som.id;
   

    document.getElementById('hint').innerHTML = _hint;
}

function hideChoice() {
    document.getElementById('hint').innerHTML = '';
}

function _select(chosenHand) {
    if (clicks = 3) {
        _playerChoice = chosenHand.id;
        aiRandom();
        testWin(_playerChoice, _computerMove) 
        
    } else {
        clicks++
        updateView()
    }
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