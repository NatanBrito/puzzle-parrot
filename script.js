let numCards;
let versoImg=
["<img class='gif disappears' src='imagens/bobrossparrot.gif' alt='papagaio de chapéu'",
"<img class='gif disappears' src='imagens/explodyparrot.gif' alt='papagaio indo pro lado'",
"<img class='gif disappears' src='imagens/fiestaparrot.gif' alt='papagaio com chapéu mexicano'",
"<img class='gif disappears' src='imagens/metalparrot.gif' alt='papagaio do rock'",
"<img class='gif disappears' src='imagens/revertitparrot.gif' alt='papagaio navegando'",
"<img class='gif disappears' src='imagens/tripletsparrot.gif' alt=' 3 papagaio dançando'",
"<img class='gif disappears' src='imagens/unicornparrot.gif' alt='papagaio unicórnio'",
];


//versoImg.sort(comparador);
//function comparador() { 
//	return Math.random() - 0.5; 
//}

  while (numCards % 2 != 0 || numCards > 14 || numCards < 4) {
    numCards = parseInt(prompt("Qual o número de cartas? Somente número par entre 4 a 14"));
}
// pra gerar a carta
const navegador= document.querySelector("nav")
for(let i=0; i<numCards;i++){
  const cardHtml=`   <div class="card " onclick="" > 
  <img src="./imagens/parrot.png"/>
  <ul>
  </ul>
</div>`
navegador.innerHTML += cardHtml
}







function turnCard(){
  const test = document.querySelector(ul)
  text.inner.html= '<li>${versoImg[0]}</li>'

}

