const rolagem = document.querySelector(".rolagem");
const direita = document.querySelector("#direita");
const esquerda = document.querySelector("#esquerda");

const cards = document.querySelectorAll(".card");

const movimento = 380;

let mover = 760;

cards.forEach((card, index) => {

    if(index >= cards.length - 2){

        const clone = card.cloneNode(true);

        rolagem.insertBefore(clone, rolagem.firstChild);

    }

});

cards.forEach((card, index) => {

    if(index < 2){

        const clone = card.cloneNode(true);

        rolagem.appendChild(clone);

    }

});

rolagem.style.transform = `translateX(-${mover}px)`;

direita.addEventListener("click", () => {

    mover += movimento;

    rolagem.style.transition = "transform 0.5s ease";

    rolagem.style.transform = `translateX(-${mover}px)`;

});

esquerda.addEventListener("click", () => {

    mover -= movimento;

    rolagem.style.transition = "transform 0.5s ease";

    rolagem.style.transform = `translateX(-${mover}px)`;

});

rolagem.addEventListener("transitionend", () => {


    const total = cards.length;

    if(mover >= (total + 2) * movimento){

        rolagem.style.transition = "none";

        mover = 760;

        rolagem.style.transform = `translateX(-${mover}px)`;

    }

    if(mover <= 0){

        rolagem.style.transition = "none";

        mover = total * movimento;

        rolagem.style.transform = `translateX(-${mover}px)`;

    }


});