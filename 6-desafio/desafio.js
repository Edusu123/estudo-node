const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const result = funcionarios
        .filter(e => e.genero == 'F' && e.pais == 'China')
        .reduce((pre, curr) => pre.salario < curr.salario ? pre : curr)
    console.log(result)
})