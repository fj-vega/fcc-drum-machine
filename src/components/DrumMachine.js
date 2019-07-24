import React from 'react';
import SoundButton from './SoundButton';


const DrumMachine = props => {
  return (
    <div 
      id="drum-machine" 
      onClick={ e => props.handleClick(e) }
      onTransitionEnd= { e => props.onTransitionEnd(e) }
      style={ props.currentBank === 'One' ? { background: '#282828' } : { background: '#062960' }}>
      <div id="logo">
        <i className="fas fa-music"></i>
        <span id="logo-name">DM 9001</span>
      </div>

      <div id="display">
        { props.display }
      </div>

      <div className="sound-bank">
        {/* Empty " " id added for keyboard support */}
        <h3 className="current-bank">Bank { props.currentBank }</h3>
        <button className="bank-btn" id=" ">Change bank</button>
        <kbd className="kbd-info">Spacebar</kbd>
      </div>

      <div className="sound-buttons">
        <SoundButton keyName="q" soundBank={ props.soundBank } vol={ props.volume } />
        <SoundButton keyName="w" soundBank={ props.soundBank } vol={ props.volume } />
        <SoundButton keyName="e" soundBank={ props.soundBank } vol={ props.volume } />
        <SoundButton keyName="a" soundBank={ props.soundBank } vol={ props.volume } />
        <SoundButton keyName="s" soundBank={ props.soundBank } vol={ props.volume } />
        <SoundButton keyName="d" soundBank={ props.soundBank } vol={ props.volume } />
        <SoundButton keyName="z" soundBank={ props.soundBank } vol={ props.volume } />
        <SoundButton keyName="x" soundBank={ props.soundBank } vol={ props.volume } />
        <SoundButton keyName="c" soundBank={ props.soundBank } vol={ props.volume } />
      </div>

      <div id="vol-control">
        <input 
          id="vol-slider" 
          type="range" 
          orient="vertical"
          min="0"
          max="1"
          step="0.02" 
          value={ props.volume } 
          onChange={ e => props.handleChange(e) } 
        />
        <i id="vol-icon" className={ props.volIcon } onClick={ e => props.handleClick(e) }></i>
        {/* Tried conditionally setting the className based on state volume property, but the icon does not update */}
        {/* <i id="vol-icon" className={ props.volume === 0 ? 'fas fa-volume-mute' : 'fas fa-volume-up' } onClick={ e => props.handleClick(e) }></i> */}
      </div>
    </div>
  );
};

export default DrumMachine;
