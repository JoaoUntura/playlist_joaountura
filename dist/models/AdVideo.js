import { Video } from "./Video.js";
export class AdVideo extends Video {
    constructor(nome, duracao) {
        super(nome, duracao);
    }
    info() {
        console.log(`Tocando Anúncio: ${this.getNome()}`);
    }
}
//# sourceMappingURL=AdVideo.js.map