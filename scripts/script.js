const imagesName = ["bobrossparrot.gif", 
                    "explodyparrot.gif",
                    "fiestaparrot.gif",
                    "metalparrot.gif",
                    "revertitparrot.gif",
                    "tripletsparrot.gif",
                    "unicornparrot.gif"
                    ];

let imagesArray = [];
let card1;
let card2;
let seconds = 0;
let number = 0;
let idClock;
let countCardsFlipped = 0;

function rulesWindow() {
    const rules = document.querySelector("main .rules_content");
    const header = document.querySelector("header");
    rules.classList.toggle("show_rules");
    header.classList.toggle("hide_header");
}

function initGame() {
    const buttons = document.querySelector(".buttons"); // tag que engloba os botões Iniciar e Regras
    const board = document.querySelector("main .game"); // Tela inicial do jogo (sem cartas)
    const clock = document.querySelector("main .clock"); // Relógio que conta segundos
    const secs = document.querySelector("main .clock .secs"); // Div segundos
    
    do{
        number = Number(prompt("Digite o número de cartas: "));
    } while(number < 4 || number > 14 || number%2 !== 0 || number === null)


    buttons.classList.add("hide_buttons");

    imagesArray = imagesName.sort(() => Math.random() - 0.5);

    for (let i = 7; i > number/2; i--){
        imagesArray.pop();
    }

    imagesArray = imagesArray.concat(imagesArray);
    imagesArray = imagesArray.sort(() => Math.random() - 0.5);

    

    for (let i = 0; i < number; i++) {
        createCard();    
    }

    secs.innerHTML = seconds;
    clock.classList.add("display_clock");
    idClock = setInterval(countSeconds, 1000, secs);

    board.classList.add("init_game");
}



function createCard(){
    const board = document.querySelector("main .game");
    const card = document.createElement("li");
    const cardContent = document.createElement("div");
    const cardFrontFace = document.createElement("div");
    const cardBackFace = document.createElement("div");
    const frontImg = document.createElement("img");
    const backImg = document.createElement("img");
    const GIFName = imagesArray[imagesArray.length - 1];
    

    card.className = "card";
    
    
    cardContent.className = "card_content";
    cardContent.setAttribute("onclick", "turnCard(this)");
    
    cardFrontFace.className = "card_face";
    cardFrontFace.classList.add("front");
    
    cardBackFace.className = "card_face";
    cardBackFace.classList.add("back");

    frontImg.setAttribute("src", "./images/front.png");
    
    backImg.setAttribute("src", `./images/${GIFName}`);

    cardFrontFace.appendChild(frontImg);
    cardBackFace.appendChild(backImg);

    cardContent.appendChild(cardFrontFace);
    cardContent.appendChild(cardBackFace);

    card.appendChild(cardContent);
    
    board.appendChild(card);
    imagesArray.pop();
}

function turnCard(card){
    
    countCardsFlipped++;

    card.classList.add("isFlipped")
    
    
    const cards = document.querySelectorAll(".isFlipped");


    if(cards.length === 2){
        if(cards[0].children[1].children[0].getAttribute("src") !== cards[1].children[1].children[0].getAttribute("src")){
            setTimeout(turnBackCard, 1000, cards);
        } else {
            pairFound(cards);
        }
    }
    
    endGame();

}

function endGame() {
    const cardsFound = document.querySelectorAll(".found");
    
    if(cardsFound.length === number) {
        clearInterval(idClock);
        setTimeout(showEndGame,2000);
    }

}

function showEndGame() {
    const endScreen = document.querySelector("main .end_screen");
    endScreen.classList.add("display_screen");
    const time = document.querySelector("main .end_screen .time");
    time.innerHTML += seconds-1 + " segundos";
    const cardsFlipped = document.querySelector("main .end_screen .cardsFlipped");
    cardsFlipped.innerHTML += countCardsFlipped + " cartas";
}

function turnBackCard(cards){
    cards[0].classList.remove("isFlipped");
    cards[1].classList.remove("isFlipped");
}

function countSeconds(secs){
    secs.innerHTML = seconds;
    seconds++;
}

function pairFound(cards){
    cards[0].classList.remove("isFlipped");
    cards[0].classList.add("found");
    cards[1].classList.remove("isFlipped");
    cards[1].classList.add("found");
}