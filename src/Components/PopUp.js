import React, {useEffect} from 'react'
import {checkWin} from '../Helpers/Helpers';

const PopUp = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWords = '';
  let playable = true;

  if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win'){
    finalMessage = 'congratulations! you won!';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Unfortunately! you lost!';
    finalMessageRevealWords = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => setPlayable(playable));
  return (
        <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
        <div className="popup">
          <h2>{finalMessage}</h2>
          <h3>{finalMessageRevealWords}</h3>
          <button onClick={playAgain}>Play Again</button>
        </div>
      </div>
    )
}

export default PopUp
