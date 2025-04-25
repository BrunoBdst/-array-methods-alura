const inserirLivros = document.getElementById("livros")
const elementoPrecoTotalDeLivrosDisponiveis = document.getElementById("valor_total_livros_disponiveis")

function exibirLivrosNaTela(listaDeLivros) {
  elementoPrecoTotalDeLivrosDisponiveis.innerHTML = ""
  inserirLivros.innerHTML = ""
    listaDeLivros.forEach(livro => {
      let disponibilidade = verificarDisponibilidadeDoLivro(livro)
      // let disponibilidade = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel" operadorTernario
      inserirLivros.innerHTML += `
      <div class="livro">
      <img class="${disponibilidade}"
        src="${livro.imagem}"
        alt="${livro.imagem}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">
        ${livro.autor}</p>
      <p class="livro__preco" id="preco">
        ${livro.preco.toFixed(2)}</p>
      <div class="tags">
      <span class="tag">
        ${livro.categoria}</span>
      </div>
      </div>`
  })
}

function verificarDisponibilidadeDoLivro(livro) {
  if (livro.quantidade > 0) {
    return "livro_imagens"
  } else {
    return "livro_imagens indisponivel"
  }
}