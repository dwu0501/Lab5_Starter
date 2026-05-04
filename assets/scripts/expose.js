// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectElement = document.getElementById("horn-select");
  const audio = document.getElementsByClassName("hidden")[0];
  const volume = document.getElementById("volume");
  const button = document.querySelector("button");
  const img = document.querySelector('img[alt="No image selected"]');
  let stock_img = true;
  let confetti = false;

  //Update img and audio src on selector change
  selectElement.addEventListener("change", (event) => {
    stock_img = false;
    
    if(event.target.value === 'party-horn'){
      confetti = true;
    }else{
      confetti = false;
    }
    
    img.src = `assets/images/${event.target.value}.svg`;
    audio.src = `assets/audio/${event.target.value}.mp3`;

  });

  //Update volume on slidebar change
  volume.addEventListener("input", (event) => {
    
    const vol_val = Number(volume.value);    
    const volume_image = document.querySelector('img[alt="Volume level 2"]');
    audio.volume = volume.value/100;
    
    if(vol_val === 0){
      volume_image.src = 'assets/icons/volume-level-0.svg';
    }else if(vol_val >= 1 &&  vol_val < 33 ){
      volume_image.src = 'assets/icons/volume-level-1.svg';
    }
    else if(vol_val >= 33 &&  vol_val < 67 ){
      volume_image.src = 'assets/icons/volume-level-2.svg';
    }
    else if(vol_val >= 67){
      volume_image.src = 'assets/icons/volume-level-3.svg';
    }

  });


  //Play audio on click
  button.addEventListener("click", (event) => {
    if(!stock_img){
      if(confetti){
        const jsConfetti = new JSConfetti();

        jsConfetti.addConfetti({
          emojis: ['🩸', '☁️', '🌑', '⚫️', '🖤', '💥'],
          confettiRadius: 12
        })
                
      }

      audio.play();
    }
  });
  
  
}