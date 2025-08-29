import { Video } from "./Video.js";

export class Playlist{

    private videoList:Video[];
    private nome:string;

    public constructor(videoList:Video[], nome:string){
        this.videoList = videoList;
        this.nome = nome
    }

    public getVideoList():Video[]{
        return this.videoList
    }

    public setVideoList(videoList:Video[]):void{
        this.videoList = videoList
    }

    
    public getNome():string{
        return this.nome;
    }

    public setNome(nome:string):void{
        this.nome = nome;
    }


}