export class Video{

    private nome: string;
    private duracao: number;


    public constructor( nome: string, duracao: number ){
        this.nome = nome;
        this.duracao = duracao;
 
    }

    public info():void{
        console.log(`Tocando Vídeo: ${this.nome}`);
    }


    public getNome():string{
        return this.nome;
    }

    public setNome(nome:string):void{
        this.nome = nome;
    }


    public getDuracao():number{
        return this.duracao;
    }

    public setDuracao(duracao:number):void{
        this.duracao = duracao;
    }

}