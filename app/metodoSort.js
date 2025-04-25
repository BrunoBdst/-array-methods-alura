let BtnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco")

BtnOrdenarPorPreco.addEventListener("click", ordernarLivrosPreco)

function ordernarLivrosPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenados)
}