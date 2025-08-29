import { Playlist } from "../models/Playlist.js";
import { Video } from "../models/Video.js";

export class Player {
    private playlist: Playlist;
    private state: "play" | "pause" | "stop" = "stop";
    private currentIndex: number = 0;
    private currentTimeout: ReturnType<typeof setTimeout> | null = null;
    private loop: boolean = false;
    private shuffle: boolean = false;
    private history: Video[] = [];

    constructor(playlist: Playlist) {
        this.playlist = playlist;
    }


    public play(): void {
        if (this.state === "play") return;

        this.state = "play";
        const videos = this.playlist.getVideoList();

        if (this.shuffle) {
            this.shufflePlaylist(videos);
        }

        this.playCurrentVideo();
    }

    public pause(): void {
        if (this.state !== "play") return;
        this.state = "pause";
        if (this.currentTimeout) clearTimeout(this.currentTimeout);
    }

    public stop(): void {
        this.state = "stop";
        if (this.currentTimeout) clearTimeout(this.currentTimeout);
        this.currentIndex = 0;
    }


    public next(): void {
        const videos = this.playlist.getVideoList();
        this.pause();

        if (this.currentIndex < videos.length - 1) {
            this.currentIndex++;
        } else if (this.loop) {
            this.currentIndex = 0;
        }

        if (this.state !== "stop") this.playCurrentVideo();
    }

    public previous(): void {
        const videos = this.playlist.getVideoList();
        this.pause();

        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else if (this.loop) {
            this.currentIndex = videos.length - 1;
        }

        if (this.state !== "stop") this.playCurrentVideo();
    }

   
    public toggleLoop(): void {
        this.loop = !this.loop;
    }

    public toggleShuffle(): void {
        this.shuffle = !this.shuffle;
    }

  
    public getHistory(): Video[] {
        return [...this.history]; // retorna uma cópia
    }


    private playCurrentVideo(): void {
        const videos = this.playlist.getVideoList();
        if (this.currentIndex >= videos.length) {
            if (this.loop) this.currentIndex = 0;
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

    private shufflePlaylist(videos: Video[]): Video[] {
        for (let i = videos.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [videos[i], videos[j]] = [videos[j], videos[i]] as [Video, Video];
        }
        return videos;
    }
    
}
