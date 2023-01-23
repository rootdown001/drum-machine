import React from 'react'
import DrumPad from './DrumPad';

export default function DrumMachine() {

    function handleAudioClick(e) {
        const audio = e.target.querySelector('.clip');
        audio.play();

    }

  return (
    <>
    <div id="drum-machine">
        Drum machine
        <div id="display">
            Display
            <table>
                <tr>
                    <td>
                        <button className="drum-pad" id="heater-1" onClick={handleAudioClick}>
                            Q
                            <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
                        </button>
                    </td>
                    <td>
                        <button className="drum-pad" id="heater-2" onClick={handleAudioClick}>
                            W
                            <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
                        </button>
                    </td>
                    <td>
                        <button className="drum-pad" id="heater-3" onClick={handleAudioClick}>
                            E
                            <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="drum-pad" id="heater-4" onClick={handleAudioClick}>
                            A
                            <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
                        </button>
                    </td>
                    <td>
                        <button className="drum-pad" id="clap" onClick={handleAudioClick}>
                            S
                            <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
                        </button>
                    </td>
                    <td>
                        <button className="drum-pad" id="open-hh" onClick={handleAudioClick}>
                            D
                            <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="drum-pad" id="kick-n-hat" onClick={handleAudioClick}>
                            Z
                            <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
                        </button>
                    </td>
                    <td>
                        <button className="drum-pad" id="kick" onClick={handleAudioClick}>
                            X
                            <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
                        </button>
                    </td>
                    <td>
                        <button className="drum-pad" id="closed-hh" onClick={handleAudioClick}>
                            C
                            <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    </>
    
  )
}