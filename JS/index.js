const rolagem = document.querySelector(".rolagem");
const direita = document.querySelector("#direita");
const esquerda = document.querySelector("#esquerda");

const cardsOriginais = document.querySelectorAll(".card");

const total = cardsOriginais.length;

let cards;
let movimento;
let mover = 0;

let animando = false;


// Cria clones no começo (últimos cards)
for(let i = total - 2; i < total; i++){

    const clone = cardsOriginais[i].cloneNode(true);

    rolagem.insertBefore(clone, rolagem.firstChild);

}


// Cria clones no final (primeiros cards)
for(let i = 0; i < 2; i++){

    const clone = cardsOriginais[i].cloneNode(true);

    rolagem.appendChild(clone);

}


cards = document.querySelectorAll(".card");


// Atualiza tamanho do movimento
function atualizarTamanho(){

    movimento = cards[0].offsetWidth;

    mover = movimento * 2;

    rolagem.style.transition = "none";

    rolagem.style.transform = `translateX(-${mover}px)`;

}


atualizarTamanho();


// Botão direita
direita.addEventListener("click", () => {

    if(animando) return;

    animando = true;

    mover += movimento;

    rolagem.style.transition = "transform 0.5s ease";

    rolagem.style.transform = `translateX(-${mover}px)`;

});


// Botão esquerda
esquerda.addEventListener("click", () => {

    if(animando) return;

    animando = true;

    mover -= movimento;

    rolagem.style.transition = "transform 0.5s ease";

    rolagem.style.transform = `translateX(-${mover}px)`;

});


// Loop infinito
rolagem.addEventListener("transitionend", () => {


    if(mover >= (total + 2) * movimento){

        rolagem.style.transition = "none";

        mover = movimento * 2;

        rolagem.style.transform = `translateX(-${mover}px)`;

    }


    if(mover <= 0){

        rolagem.style.transition = "none";

        mover = total * movimento;

        rolagem.style.transform = `translateX(-${mover}px)`;

    }


    animando = false;

});


// Ajusta quando muda a resolução
window.addEventListener("resize", () => {

    atualizarTamanho();

});