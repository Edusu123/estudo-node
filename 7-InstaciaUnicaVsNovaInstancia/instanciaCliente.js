const { log } = console
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
log(contadorB.valor, contadorA.valor)

contadorC.inc()
contadorC.inc()
log(contadorD.valor, contadorC.valor)
