import React, { useEffect } from 'react'

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
    clipC,
    handleToggle,
    handleDisplay,
    display
} = props


    function handleAudioClick(e) {

        handleKeyClick(e);

        const audio = e.target.querySelector('.clip');
        handleDisplay(e.target.id)
        audio.play();
        e.target.blur();

    }

    function handleKeyClick(e) {
        const keyClick = document.getElementById(e.target.id);
        keyClick.classList.add("drum-pad-active")
        setTimeout(function() {
            keyClick.classList.remove("drum-pad-active");
          }, 100);
    }

    function handleKeyPress(clipWithId) {
        const keyPress = document.getElementById(clipWithId);
        keyPress.classList.add("drum-pad-active")
        setTimeout(function() {
            keyPress.classList.remove("drum-pad-active");
          }, 100);
    }

    useEffect(() => {

        function handleKeyDown(e) {

            switch(e.key.toUpperCase()) {
                case 'Q':
                    handleDisplay(clipQ.id)
                    handleKeyPress(clipQ.id)
                    document.querySelector("#Q").play();
                    break;
                case 'W':
                    handleDisplay(clipW.id)
                    handleKeyPress(clipW.id)
                    document.querySelector("#W").play();
                    break;
                case 'E':
                    handleDisplay(clipE.id)
                    handleKeyPress(clipE.id)
                    document.querySelector("#E").play();
                    break; 
                case 'A':
                    handleDisplay(clipA.id)
                    handleKeyPress(clipA.id)
                    document.querySelector("#A").play();
                    break;
                case 'S':
                    handleDisplay(clipS.id)
                    handleKeyPress(clipS.id)
                    document.querySelector("#S").play();
                    break;
                case 'D':
                    handleDisplay(clipD.id)
                    handleKeyPress(clipD.id)
                    document.querySelector("#D").play();
                    break;
                case 'Z':
                    handleDisplay(clipZ.id)
                    handleKeyPress(clipZ.id)
                    document.querySelector("#Z").play();
                    break;
                case 'X':
                    handleDisplay(clipX.id)
                    handleKeyPress(clipX.id)
                    document.querySelector("#X").play();
                    break;
                case 'C':
                    handleDisplay(clipC.id)
                    handleKeyPress(clipC.id)
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
            <table>
                <tbody>
                <tr>
                    <td>
                        <button className="drum-pad" id={clipQ.id} onClick={handleAudioClick}>
                            Q
                            <audio className="clip" id="Q" src={clipQ.audioClip}></audio>
                        </button>
                    </td>
                    <td>
                        <button className="drum-pad" id={clipW.id} onClick={handleAudioClick}>
                            W
                            <audio className="clip" id="W" src={clipW.audioClip}></audio>
                        </button>
                    </td>
                    <td>
                        <button className="drum-pad" id={clipE.id} onClick={handleAudioClick}>
                            E
                            <audio className="clip" id="E" src={clipE.audioClip}></audio>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="drum-pad" id={clipA.id} onClick={handleAudioClick}>
                            A
                            <audio className="clip" id="A" src={clipA.audioClip}></audio>
                        </button>
                    </td>
                    <td>
                        <button className="drum-pad" id={clipS.id} onClick={handleAudioClick}>
                            S
                            <audio className="clip" id="S" src={clipS.audioClip}></audio>
                        </button>
                    </td>
                    <td>
                        <button className="drum-pad" id={clipD.id} onClick={handleAudioClick}>
                            D
                            <audio className="clip" id="D" src={clipD.audioClip}></audio>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="drum-pad" id={clipZ.id} onClick={handleAudioClick}>
                            Z
                            <audio className="clip" id="Z" src={clipZ.audioClip}></audio>
                        </button>
                    </td>
                    <td>
                        <button className="drum-pad" id={clipX.id} onClick={handleAudioClick}>
                            X
                            <audio className="clip" id="X" src={clipX.audioClip}></audio>
                        </button>
                    </td>
                    <td>
                        <button className="drum-pad" id={clipC.id} onClick={handleAudioClick}>
                            C
                            <audio className="clip" id="C" src={clipC.audioClip}></audio>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
           
            <div className="controls">
                <div id="display">
                    <p>{display}</p>
                </div>
                <button className="toggle" onClick={handleToggle}>Toggle Insturments</button>
            </div>


        </div>

        
    </>
    
  )
}
