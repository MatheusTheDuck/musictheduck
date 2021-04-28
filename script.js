let music = document.getElementById("music")
function retroceder() {
    music.currentTime -= 5;

}
function avancar() {
    music.currentTime += 5;
}
function diminuir() {
    music.playbackRate -= 0.5;


}
function aumentar() {
    music.playbackRate += 0.5;


}

function play() {
    music.play();

}



function stop() {
    music.pause()

    

}
function dimv() { 
    music.volume = 0.3;
  } 
    
  function aumtv() { 
    music.volume = 1.0;
  }