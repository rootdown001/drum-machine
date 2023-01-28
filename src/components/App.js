import React, { useState } from 'react';
import '../css/App.css';
import DrumMachine from './DrumMachine';


function App() {

const [clipQ, setClipQ] = useState({ id: "Heater 1", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"})
const [clipW, setClipW] = useState({ id: "Heater 2", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"})
const [clipE, setClipE] = useState({ id: "Heater 3", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"})
const [clipA, setClipA] = useState({ id: "Heater 4", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"})
const [clipS, setClipS] = useState({ id: "Clap", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"})
const [clipD, setClipD] = useState({ id: "Open HH", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"})
const [clipZ, setClipZ] = useState({ id: "Kick 'n Hat", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"})
const [clipX, setClipX] = useState({ id: "Kick", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"})
const [clipC, setClipC] = useState({ id: "Closed HH", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"})
const [display, setDisplay] = useState("  ")


function handleToggle() {
  if (clipQ.audioClip === "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3") {
    setClipQ({ id: "Chord 1", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"})
    setClipW({ id: "Chord 2", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"})
    setClipE({ id: "Chord 3", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"})
    setClipA({ id: "Give Us a Light", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"})
    setClipS({ id: "Dry Ohh", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"})
    setClipD({ id: "Bold H1", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"})
    setClipZ({ id: "Punchy Kick", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"})
    setClipX({ id: "Side Stick 1", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"})
    setClipC({ id: "Snare", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"})
  } else {
    setClipQ({ id: "Heater 1", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"})
    setClipW({ id: "Heater 2", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"})
    setClipE({ id: "Heater 3", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"})
    setClipA({ id: "Heater 4", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"})
    setClipS({ id: "Clap", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"})
    setClipD({ id: "Open HH", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"})
    setClipZ({ id: "Kick 'n Hat", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"})
    setClipX({ id: "Kick", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"})
    setClipC({ id: "Closed HH", audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"})
  }
}

function handleDisplay(id) {
  setDisplay(id)
}



  return (
    <div className="App">
      <DrumMachine 
        clipQ={clipQ}
        clipW={clipW}
        clipE={clipE}
        clipA={clipA}
        clipS={clipS}
        clipD={clipD}
        clipZ={clipZ}
        clipX={clipX}
        clipC={clipC}
        handleToggle={handleToggle}
        handleDisplay={handleDisplay}
        display={display}

      />
    </div>
  );
}

export default App;
