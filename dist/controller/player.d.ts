import { Playlist } from "../models/Playlist.js";
import { Video } from "../models/Video.js";
export declare class Player {
    private playlist;
    private state;
    private currentIndex;
    private currentTimeout;
    private loop;
    private shuffle;
    private history;
    constructor(playlist: Playlist);
    /** --- CONTROLE PRINCIPAL --- */
    play(): void;
    pause(): void;
    stop(): void;
    /** --- NAVEGAÇÃO --- */
    next(): void;
    previous(): void;
    /** --- MODOS --- */
    toggleLoop(): void;
    toggleShuffle(): void;
    /** --- HISTÓRICO --- */
    getHistory(): Video[];
    /** --- MÉTODOS PRIVADOS --- */
    private playCurrentVideo;
    private shufflePlaylist;
}
//# sourceMappingURL=player.d.ts.map