function mute(){
    if(document.getElementById('background_audio').muted == false){
      document.getElementById('background_audio').muted = true;
    } else {
      document.getElementById('background_audio').muted = false;
    }

}