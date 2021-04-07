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

    for (let i = 0; i < number; i++) {
        const card = document.createElement("li");
        const img = document.createElement("img");
        
        img.setAttribute("src","./images/front.png");
        card.className = "card";
        
        card.appendChild(img);
        board.appendChild(card);
    }


}

