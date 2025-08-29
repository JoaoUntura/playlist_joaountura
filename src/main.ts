import { Player } from "./controller/player.js";
import { AdVideo } from "./models/AdVideo.js";
import { Playlist } from "./models/Playlist.js";
import { Video } from "./models/Video.js";


const video1 = new Video("Musica 1", 3000); 
const video2 = new Video("Musica 2", 5000);   
const video3 = new Video("Musica 3", 4000);        

const anuncio1 = new AdVideo("Promoção Jogos", 1000)

const minhaPlaylist = new Playlist([video1, video2, video3,anuncio1], "Minha Playlist de Programação");

const player = new Player(minhaPlaylist);

setTimeout(() => {
    console.log("Pausando player...");
    player.pause();
}, 4000); 

setTimeout(() => {
    console.log("Próximo vídeo...");
    player.next();
}, 6000); 

setTimeout(() => {
    console.log("Voltando para o vídeo anterior...");
    player.previous();
    console.log("Hístorico: ",player.getHistory());
}, 10000); 




player.play();