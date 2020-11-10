//model//
let html;
let _app = document.getElementById('app');
let _moves = ["rock", "paper", "scissor", "fire" ,"gun", "lightning","snake", "human", "tree", "wolf", "sponge", "air","water", "dragon","devil"];
let _numberOfMoves;
let _randomMovePosition;
let _randomMove;
let _pChoice;
let _choices;
let _hint = ' ';





//View//
function updateView() {
    html = '';

    html += `
            <div id="gameview">
                <section id="info"><h1>Pick: </h1><h1 id="hint">${_hint}</h1></section>
                <div id="choices">
                    `
                    for(i = 0; i < choices.length; i++){

                        html += `<span id="${choices[i].choice}" onmouseenter="_showHint(this)" class="choice" style="background-image: url('assets/img/choices/${choices[i].choice}.png');"></span>`;

                    }
                    `  
                </div>
            </div>
        
    `;

    _app.innerHTML = html;
}







//controller//
function something() {
    
    updateView()
}

function _showHint(som) {
    _hint = som.id;
    updateView()
}

function aiMove() {
    numberOfMoves = moves.length;
    randomMovePosition = Math.floor(Math.random() * numberOfMoves);
    randomMove = moves[randomMovePosition];
    updateView();
}
something()