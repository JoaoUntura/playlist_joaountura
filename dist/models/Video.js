export class Video {
    nome;
    duracao;
    constructor(nome, duracao) {
        this.nome = nome;
        this.duracao = duracao;
    }
    info() {
        console.log(`Tocando Vídeo: ${this.nome}`);
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getDuracao() {
        return this.duracao;
    }
    setDuracao(duracao) {
        this.duracao = duracao;
    }
}
//# sourceMappingURL=Video.js.map