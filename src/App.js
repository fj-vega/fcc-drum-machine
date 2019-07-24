import React from 'react';
import './App.css';
import sounds from './api/sounds';
import DrumMachine from './components/DrumMachine';


class App extends React.Component {
  state = {
    display: '',
    soundBank: sounds.bankOne,
    currentBank: 'One',
    volume: '0.5',
    lastVolume: '0.5',
    volIcon: 'fas fa-volume-up'
  };

  clearDisplayTimeOut = null;

  componentDidMount() {
    window.addEventListener('keypress', e => {
      e.preventDefault();

      const button = document.getElementById(e.key.toUpperCase()).closest('button');

      if (!button) return;

      button.click();
      // ! This simulates button press on keyboard input but is causing the last FCC test to fail
      // button.classList.add('keypress');
    });
  };

  handleClick = e => {
    let newState = {};

    if (e.target.className === 'drum-pad') {
      newState = { display: e.target.id };

      if (this.clearDisplayTimeOut) clearTimeout(this.clearDisplayTimeOut);
      this.clearDisplayTimeOut = setTimeout(() => this.setState({ display: '' }), 1000);
    };
    
    if (e.target.className === 'bank-btn') {
      newState = this.state.currentBank === 'One' 
        ? { soundBank: sounds.bankTwo, currentBank: 'Two' }
        : { soundBank: sounds.bankOne, currentBank: 'One' };
    };

    if (e.target.id === 'vol-icon') {
      newState = +this.state.volume !== 0
        ? { lastVolume: this.state.volume, volume: 0, volIcon: 'fas fa-volume-mute' }
        : { volume: this.state.lastVolume, volIcon: 'fas fa-volume-up' };
    };

    this.setState(newState);
  };

  handleChange = e => {
    const volIcon = +e.target.value === 0 ? 'fas fa-volume-mute' : 'fas fa-volume-up';

    this.setState({
      volume: e.target.value,
      lastVolume: e.target.value,
      volIcon
    });
  };

  removeTransition = e => {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('keypress');
  };

  render() {
    return (
      <div className="app">
        <header>
          <h1 id="title">Drum Machine 9001</h1>
          <div id="subtitle">
            <h2 id="subtitle-text">React Edition</h2>
            <i id="react-logo" className="fab fa-react"></i>
          </div>
        </header>
        
        <DrumMachine 
          display={ this.state.display } 
          soundBank={ this.state.soundBank } 
          currentBank={ this.state.currentBank }
          volume={ this.state.volume }
          volIcon={ this.state.volIcon }
          handleClick={ this.handleClick } 
          handleChange={ this.handleChange }
          onTransitionEnd= { this.removeTransition }
        />
      </div>
    );
  };
};

export default App;
