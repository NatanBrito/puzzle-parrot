let numCards;
let cartasCriadas=[]
let texteFor;
let makerCards;
let versoImg =
  ["<img class='gif' src='imagens/bobrossparrot.gif' alt='papagaio de chapéu'",
    "<img class='gif ' src='imagens/explodyparrot.gif' alt='papagaio indo pro lado'",
    "<img class='gif ' src='imagens/fiestaparrot.gif' alt='papagaio com chapéu mexicano'",
    "<img class='gif ' src='imagens/metalparrot.gif' alt='papagaio do rock'",
    "<img class='gif ' src='imagens/revertitparrot.gif' alt='papagaio navegando'",
    "<img class='gif ' src='imagens/tripletsparrot.gif' alt=' 3 papagaio dançando'",
    "<img class='gif ' src='imagens/unicornparrot.gif' alt='papagaio unicórnio'",
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
for (let i = 0; i < (numCards/2); i++) {
  const frontCardHtml = `   <div data-identifier="card" class="card " onclick=" turnCard(this);" > 
   
  <img data-identifier="back-face" class="backFace" src="./imagens/parrot.png"/>
  <div data-identifier="front-face" class="frontFace">
  ${versoImg[i]}
 </div>  
</div>`
cartasCriadas.push(frontCardHtml)
cartasCriadas.push(frontCardHtml)
cartasCriadas.sort(comparador);
}
for(let i=0;i<cartasCriadas.length;i++){
makerCards.innerHTML += cartasCriadas[i];
}
const test = document.querySelectorAll(".card")
test.forEach(card => card.addEventListener('click', turnCard))

function turnCard() {
  this.classList.add("turnCard")
}

