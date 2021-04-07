function rulesWindow() {
    const rules = document.querySelector("main .rules_content");
    rules.classList.toggle("show_rules");
}

function totalCards() {
    
    const buttons = document.querySelector(".buttons");
    
    
    let number = 0;
    
    
    
    do{
        number = Number(prompt("Digite o número de cartas: "));
    } while(number < 4 || number > 14 || number%2 !== 0 || number === null)

    buttons.classList.add("hide_buttons");

}

