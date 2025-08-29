import { Video } from "./Video.js";
export declare class Playlist {
    private videoList;
    private nome;
    constructor(videoList: Video[], nome: string);
    getVideoList(): Video[];
    setVideoList(videoList: Video[]): void;
    getNome(): string;
    setNome(nome: string): void;
}
//# sourceMappingURL=Playlist.d.ts.map