const { log } = console

log(this === global)
log(this === module)
// fora da função aponta para exports/module.exports
log(this === module.exports)
log(this === exports)

function logThis() {
    log('Dentro da função...')
    log(this === exports)
    log(this === module.exports)

    // dentro da função aponta para global
    log(this === global)
}

logThis()
