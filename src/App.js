import { useState } from 'react';
import { answerList, wordList } from "./WordleWords.js"

import './App.css';




const WordleGrid = (props) => {

  return (

    <div className="wordle-Grid">
      {props.wordleGuessList.map((wordleGuess) => {
        return (
          <div className="wordle-Guess">
            {wordleGuess.map((wordleLetter) => {
              return (
                <div className="wordle-Letter">
                  {wordleLetter}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

const WordleKeyboard = (props) => {
  return (
    <div className="keyboard">
      {props.keyList.map((keyboardRow) => {
        return (
          <div className="keyboard-Row">
            {keyboardRow.map((keyboardLetter) => {
              return (
                <button className="keyboard-Row-Letter" onClick={props.handleKeyPress} value={keyboardLetter}>
                  {keyboardLetter}
                </button>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

const WordPick = (props) => {
  console.log(props)
  return (
    <div className="word-Pick">


    </div>
  )
}




function App() {
  let [wordleGuessIndex, setWordleGuessIndex] = useState(0)
  let [wordleLetterIndex, setWordleLetterIndex] = useState(0)


  const pickWordleAnswer = () => {
    let number = Math.floor(Math.random() * 2309)

    let wordleAnswer = answerList[number]
    console.log(wordleAnswer)

  }



  const [wordleAnswer, setWordleAnswer] = useState(pickWordleAnswer())
  const game = ['playing', 'won', 'lost']
  const [gameState, setGameState] = useState(game[1])
  console.log(wordleAnswer)





  const [wordleGuessList, setWordleGuessList] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ])


  const [keyList, setKeyList] = useState([
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"]
  ])



  const handleKeyPress = (event) => {
    let value = event.target.value
    if (value === 'enter') {
      setWordleGuessIndex(wordleGuessIndex + 1)
      setWordleLetterIndex(wordleLetterIndex = 0)

    }
    if (value === 'backspace' && wordleLetterIndex >= 0) {
      setWordleLetterIndex(wordleLetterIndex - 1)

    }
    if (wordleLetterIndex <= 4 && value !== "backspace" && value !== "enter") {
      const wordleGuessListCopy = [...wordleGuessList]

      wordleGuessListCopy[wordleGuessIndex][wordleLetterIndex] = value
      setWordleGuessList(wordleGuessListCopy)

      setWordleLetterIndex(wordleLetterIndex + 1)
    }

    console.log(value)
  }




  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Wordle</h1>

        <WordPick
          wordleAnswer={wordleAnswer}
          pickWordleAnswer={pickWordleAnswer}
        />

        <div className="Game-Board">



          <WordleGrid
            wordleGuessList={wordleGuessList}


          />

        </div>

        <div className="Keyboard">
          <div>

            <WordleKeyboard
              keyList={keyList}
              handleKeyPress={handleKeyPress}


            />

          </div>

        </div>






      </header>
    </div>
  );
}

export default App;
