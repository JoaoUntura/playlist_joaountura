import { Video } from "./Video.js";

export class AdVideo extends Video{

    public constructor(nome:string, duracao:number){

        super(nome, duracao);

    }

    public info(): void {
        console.log(`Tocando Anúncio: ${this.getNome()}`);
    }


}