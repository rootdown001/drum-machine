import React, { useEffect } from 'react'
import DrumPad from './DrumPad';

export default function DrumMachine(props) {

const {
    clipQ,
    clipW,
    clipE,
    clipA,
    clipS,
    clipD,
    clipZ,
    clipX,
    clipC
} = props


    function handleAudioClick(e) {
        const audio = e.target.querySelector('.clip');
        audio.play();

    }

    useEffect(() => {

        function handleKeyDown(e) {

            switch(e.key.toUpperCase()) {
                case 'Q':
                    document.querySelector("#Q").play();
                    break;
                case 'W':
                    document.querySelector("#W").play();
                    break;
                case 'E':
                    document.querySelector("#E").play();
                    break;
                case 'A':
                    document.querySelector("#A").play();
                    break;
                case 'S':
                    document.querySelector("#S").play();
                    break;
                case 'D':
                    document.querySelector("#D").play();
                    break;
                case 'Z':
                    document.querySelector("#Z").play();
                    break;
                case 'X':
                    document.querySelector("#X").play();
                    break;
                case 'C':
                    document.querySelector("#C").play();
                    break;
                default:
                    break;
            }
        }
        console.log('added')
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            console.log('removed')
        document.removeEventListener('keydown', handleKeyDown);
    };
    })


  return (
    <>
    <div id="drum-machine">
        Drum machine
        <div id="display">
            Display
            <table>
                <tbody>
                <tr>
                    <td>
                        <button className="drum-pad" id="heater-1" onClick={handleAudioClick}>
                            Q
                            <audio className="clip" id="Q" src={clipQ}></audio>
                        </button>
                    </td>
                    <td>
                        <button className="drum-pad" id="heater-2" onClick={handleAudioClick}>
                            W
                            <audio className="clip" id="W" src={clipW}></audio>
                        </button>
                    </td>
                    <td>
                        <button className="drum-pad" id="heater-3" onClick={handleAudioClick}>
                            E
                            <audio className="clip" id="E" src={clipE}></audio>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="drum-pad" id="heater-4" onClick={handleAudioClick}>
                            A
                            <audio className="clip" id="A" src={clipA}></audio>
                        </button>
                    </td>
                    <td>
                        <button className="drum-pad" id="clap" onClick={handleAudioClick}>
                            S
                            <audio className="clip" id="S" src={clipS}></audio>
                        </button>
                    </td>
                    <td>
                        <button className="drum-pad" id="open-hh" onClick={handleAudioClick}>
                            D
                            <audio className="clip" id="D" src={clipD}></audio>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="drum-pad" id="kick-n-hat" onClick={handleAudioClick}>
                            Z
                            <audio className="clip" id="Z" src={clipZ}></audio>
                        </button>
                    </td>
                    <td>
                        <button className="drum-pad" id="kick" onClick={handleAudioClick}>
                            X
                            <audio className="clip" id="X" src={clipX}></audio>
                        </button>
                    </td>
                    <td>
                        <button className="drum-pad" id="closed-hh" onClick={handleAudioClick}>
                            C
                            <audio className="clip" id="C" src={clipC}></audio>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    </>
    
  )
}
