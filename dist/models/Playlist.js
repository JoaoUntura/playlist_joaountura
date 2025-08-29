export class Playlist {
    videoList;
    nome;
    constructor(videoList, nome) {
        this.videoList = videoList;
        this.nome = nome;
    }
    getVideoList() {
        return this.videoList;
    }
    setVideoList(videoList) {
        this.videoList = videoList;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
}
//# sourceMappingURL=Playlist.js.map