const { log } = console
const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 2149.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    log(err || 'Arquivo salvo')
})
