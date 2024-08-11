const botoescarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");
botoescarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desativarbotaoselecionado();
    marcarbotaocomoselecionado(botao);
    esconderimagemativa();
    mostrarimagemdefundo(indice);
    esconderinformacoesativas();
    mostarinformacoes(indice);
  });
});

function marcarbotaocomoselecionado(botao) {
  botao.classList.add("selecionado");
}

function mostarinformacoes(indice) {
  informacoes[indice].classList.add("ativa");
}

function esconderinformacoesativas() {
  const informacoesativa = document.querySelector(".informacoes.ativa");
  informacoesativa.classList.remove("ativa");
}

function mostrarimagemdefundo(indice) {
  imagens[indice].classList.add("ativa");
}

function esconderimagemativa() {
  const imagemativa = document.querySelector(".ativa");
  imagemativa.classList.remove("ativa");
}

function desativarbotaoselecionado() {
  const botaoselecioando = document.querySelector(".selecionado");
  botaoselecioando.classList.remove("selecionado");
}
