import React, { useState } from 'react';
import '../css/App.css';
import DrumMachine from './DrumMachine';


function App() {

const [clipQ, setClipQ] = useState("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")
const [clipW, setClipW] = useState("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")
const [clipE, setClipE] = useState("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")
const [clipA, setClipA] = useState("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3")
const [clipS, setClipS] = useState("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")
const [clipD, setClipD] = useState("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")
const [clipZ, setClipZ] = useState("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3")
const [clipX, setClipX] = useState("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3")
const [clipC, setClipC] = useState("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")



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
      />
    </div>
  );
}

export default App;
