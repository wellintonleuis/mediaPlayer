import mediaPlayer from "./src/assets/utilidades/mediaPlayer.js"
import autoPlay from "./src/assets/utilidades/plugins/autoPlay.js";


const $video = document.querySelector('video');
const $btn = document.querySelector('#play');

const player = new mediaPlayer({el:$video, plugins:[new autoPlay()]});

$btn.onclick = ()=>{player.togglePlay()};






