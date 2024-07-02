window.sr = ScrollReveal({ reset: true });

sr.reveal('body', {
  rotate: { x: 0, y: 80, z: 0 },
  duration: 2000
})

function trocaImagem(endereco) {
  let imagem = document.querySelector(".starbucks");
  imagem.src = endereco;
}

function trocaCor(cor) {
  let circulo = document.querySelector(".circulo");
  circulo.style.background = cor;
}
