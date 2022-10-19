const { log } = console
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// síncrona
const conteudo = fs.readFileSync(caminho, 'utf-8')
log(conteudo)

// assíncrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    log(`${config.db.host}:${config.db.port}`)

})

// simplificado
const config = require('./arquivo.json')
log(config.db)

// lendo uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    log('Conteúdo da pasta: ')
    log(arquivos)
})
