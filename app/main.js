let livros = []

const EndPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaApi()

async function getBuscarLivrosDaApi() {
    const resposta = await fetch(EndPointDaApi)
    livros = await resposta.json()
    let LivrosComDesconto = aplicarDesconto(livros)
    exibirLivrosNaTela(LivrosComDesconto)
}

