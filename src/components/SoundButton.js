import React from 'react';


const SoundButton = ({ keyName, soundBank, vol }) => {
  const handleClick = e => {
    const audio = document.getElementById(e.target.dataset.audio);

    audio.volume = vol;
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <button 
      className="drum-pad" 
      id={ soundBank[keyName].id } 
      data-audio={ keyName.toUpperCase() }
      onClick={ handleClick }>
      { keyName.toUpperCase() }
      <audio 
        className="clip" 
        id={ keyName.toUpperCase() }  
        src={ soundBank[keyName].src } 
      />
    </button>
  );
};

export default SoundButton;
