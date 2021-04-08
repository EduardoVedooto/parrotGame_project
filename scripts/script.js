const imagesName = ["bobrossparrot.gif", 
                    "explodyparrot.gif",
                    "fiestaparrot.gif",
                    "metalparrot.gif",
                    "revertitparrot.gif",
                    "tripletsparrot.gif",
                    "unicornparrot.gif"
                    ];

let imagesArray = [];


function rulesWindow() {
    const rules = document.querySelector("main .rules_content");
    rules.classList.toggle("show_rules");
}

function initGame() {
    
    let number = 0; // N° de cartas que o jogador escolher
    const buttons = document.querySelector(".buttons"); // tag que engloba os botões Iniciar e Regras
    const board = document.querySelector("main .game"); // Tela inicial do jogo (sem cartas)
    
    
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
        createCard(number/2);    
    }



    board.classList.add("init_game");
}


// O parâmetro desta função servirá para saber quantos pares de gifs terei que pegar do array "images"
function createCard(numberOfGIFs){
    const board = document.querySelector("main .game");
    const card = document.createElement("li");
    const cardContent = document.createElement("div");
    const cardFrontFace = document.createElement("div");
    const cardBackFace = document.createElement("div");
    const frontImg = document.createElement("img");
    const backImg = document.createElement("img");
    const nameGIF = imagesArray[imagesArray.length - 1];
    imagesArray.pop();
    console.log(imagesArray);

    card.className = "card";
    
    
    cardContent.className = "card_content";
    cardContent.setAttribute("onclick", "turnCard(this)");
    
    cardFrontFace.className = "card_face";
    cardFrontFace.classList.add("front");
    
    cardBackFace.className = "card_face";
    cardBackFace.classList.add("back");

    frontImg.setAttribute("src", "./images/front.png");
    
    backImg.setAttribute("src", `./images/${nameGIF}`);

    cardFrontFace.appendChild(frontImg);
    cardBackFace.appendChild(backImg);

    cardContent.appendChild(cardFrontFace);
    cardContent.appendChild(cardBackFace);

    card.appendChild(cardContent);
    
    board.appendChild(card);
}

function turnCard(card){
    
    card.classList.toggle("isFlipped");
}
