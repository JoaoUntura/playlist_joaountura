export class Player {
    playlist;
    state = "stop";
    currentIndex = 0;
    currentTimeout = null;
    loop = false;
    shuffle = false;
    history = [];
    constructor(playlist) {
        this.playlist = playlist;
    }
    /** --- CONTROLE PRINCIPAL --- */
    play() {
        if (this.state === "play")
            return;
        this.state = "play";
        const videos = this.playlist.getVideoList();
        if (this.shuffle) {
            this.shufflePlaylist(videos);
        }
        this.playCurrentVideo();
    }
    pause() {
        if (this.state !== "play")
            return;
        this.state = "pause";
        if (this.currentTimeout)
            clearTimeout(this.currentTimeout);
    }
    stop() {
        this.state = "stop";
        if (this.currentTimeout)
            clearTimeout(this.currentTimeout);
        this.currentIndex = 0;
    }
    /** --- NAVEGAÇÃO --- */
    next() {
        const videos = this.playlist.getVideoList();
        this.pause();
        if (this.currentIndex < videos.length - 1) {
            this.currentIndex++;
        }
        else if (this.loop) {
            this.currentIndex = 0;
        }
        if (this.state !== "stop")
            this.playCurrentVideo();
    }
    previous() {
        const videos = this.playlist.getVideoList();
        this.pause();
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
        else if (this.loop) {
            this.currentIndex = videos.length - 1;
        }
        if (this.state !== "stop")
            this.playCurrentVideo();
    }
    /** --- MODOS --- */
    toggleLoop() {
        this.loop = !this.loop;
    }
    toggleShuffle() {
        this.shuffle = !this.shuffle;
    }
    /** --- HISTÓRICO --- */
    getHistory() {
        return [...this.history]; // retorna uma cópia
    }
    /** --- MÉTODOS PRIVADOS --- */
    playCurrentVideo() {
        const videos = this.playlist.getVideoList();
        if (this.currentIndex >= videos.length) {
            if (this.loop)
                this.currentIndex = 0;
            else {
                this.stop();
                return;
            }
        }
        const video = videos[this.currentIndex];
        if (video) {
            this.history.push(video);
            video.info();
        }
        // Aguarda a duração do vídeo e passa para o próximo automaticamente
        this.currentTimeout = setTimeout(() => {
            if (this.state === "play") {
                this.currentIndex++;
                this.playCurrentVideo();
            }
        }, video ? video.getDuracao() : 0);
    }
    shufflePlaylist(videos) {
        for (let i = videos.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [videos[i], videos[j]] = [videos[j], videos[i]];
        }
        return videos;
    }
}
//# sourceMappingURL=player.js.map