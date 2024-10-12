window.addEventListener('keydown',function (event){
    const myAudio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    if(myAudio){
        myAudio.currentTime = 0 
        myAudio.play()
        
        key.classList.add("playing")
        setTimeout(() => {
            key.classList.remove('playing');
          }, 300); // 1000 milisaniye = 1 saniye
    }

})