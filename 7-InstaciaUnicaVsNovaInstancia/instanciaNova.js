// uma factory retorna uma nova instância
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}