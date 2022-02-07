let thisAntes = [];
let thisAtual = [];
let primeiraCarta ;
let segundaCarta  ;
let numCards;
let thisBefore = []
let cartasCriadas = []
let firstCard;
let secondCard;
let makerCards;
let versoImg =
  ["<img class='gif' src='imagens/bobrossparrot.gif'",
    "<img class='gif ' src='imagens/explodyparrot.gif'",
    "<img class='gif ' src='imagens/fiestaparrot.gif'",
    "<img class='gif ' src='imagens/metalparrot.gif'",
    "<img class='gif ' src='imagens/revertitparrot.gif'",
    "<img class='gif ' src='imagens/tripletsparrot.gif'",
    "<img class='gif ' src='imagens/unicornparrot.gif'",
  ];
//embaralha as cartas
versoImg.sort(comparador);
function comparador() {
  return Math.random() - 0.5;
}

while (numCards % 2 != 0 || numCards > 14 || numCards < 4) {
  numCards = parseInt(prompt("Qual o número de cartas? Somente número par entre 4 a 14"));
}
// pra gerar a carta
makerCards = document.querySelector("nav")
for (let i = 0; i < (numCards / 2); i++) {
  const frontCardHtml = `   <div data-identifier="card" class="card "  onclick=" turnCard(this);" > 
   
  <img data-identifier="back-face" class="backFace" src="./imagens/parrot.png"/>
  <div data-identifier="front-face" class="frontFace">
  ${versoImg[i]}
 </div>  
</div>`
  cartasCriadas.push(frontCardHtml)
  cartasCriadas.push(frontCardHtml)
  cartasCriadas.sort(comparador);
}
for (let i = 0; i < cartasCriadas.length; i++) {
  makerCards.innerHTML += cartasCriadas[i];
}
const test = document.querySelectorAll(".card")
test.forEach(card => card.addEventListener('click', turnCard))
// faz a carta virar e tentando fazer o confirmador de cartas iguais
function turnCard() {
this.classList.add("turnCard")

}

function turnCard(diviSelecionada){
  diviSelecionada.classList.add('turnCard');
  if(!document.querySelector('.primeiraCarta')){
      diviSelecionada.classList.add('primeiraCarta');
      primeiraCarta = diviSelecionada;
      primeiraCarta.setAttribute('onclick','')
      console.log(primeiraCarta);
      return false;
  }
      diviSelecionada.classList.add('segundaCarta');
      segundaCarta = diviSelecionada;
      console.log(segundaCarta);
      setTimeout(compararCartas,1000);
      console.log(document.querySelectorAll('.estouComMeuPar').length);
      console.log(asCartas.length);
}
function compararCartas(){
  if(primeiraCarta.innerHTML !== segundaCarta.innerHTML){
      primeiraCarta.classList.remove('primeiraCarta');
      primeiraCarta.classList.remove('turnCard');
      segundaCarta.classList.remove('segundaCarta');
      segundaCarta.classList.remove('turnCard');
      primeiraCarta.setAttribute('onclick','virarCarta(this)');
  }
  else{
      primeiraCarta.classList.remove('primeiraCarta');
      primeiraCarta.classList.add('estouComMeuPar');
      primeiraCarta.setAttribute('onclick','');
      segundaCarta.classList.remove('segundaCarta');
      segundaCarta.setAttribute('onclick','');
      segundaCarta.classList.add('estouComMeuPar');
  }
} 
