import './App.scss';
import { useState, useEffect, useRef } from 'react'
import flip from './audio/flip.mp3'
import match from './audio/match.mp3'
import victory from './audio/victory.mp3'
import gameover from './audio/gameover.mp3'
import { Dialog, DialogActions, DialogContent, DialogContentText, Button } from "@material-ui/core";
import Card from './components/Card.js'
import cardback from './pic/cardback.jpg'
import kh from './pic/KH.jpg'
import ad from './pic/AD.jpg'
import qs from './pic/QS.jpg'
import jc from './pic/JC.jpg'
import s5 from './pic/S5.jpg'
import d2 from './pic/D2.jpg'
import h7 from './pic/7H.jpg'
import as from './pic/AS.jpg'

let cardsArray = [
  {
    image: kh, name: 'kh'
  },
  {
    image: ad, name: 'ad'
  },
  {
    image: qs, name: 'qs'
  },
  {
    image: jc, name: 'jc'
  },
  {
    image: s5, name: 's5'
  },
  {
    image: d2, name: 'd2'
  },

  {
    image: h7, name: 'h7'
  },
  {
    image: as, name: 'as'
  },

]

function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

function App() {
  const [cards, setCards] = useState(() =>
    shuffleCards(cardsArray.concat(cardsArray))
  );
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [freezeBoard, setFreezeBoard] = useState(false);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(60)
  const [showModal, setShowModal] = useState(false);
  const [dialogText, setDialogText] = useState('')
  const [dialogButton, setDialogButton] = useState('PLAY')
  const [topScore, setTopScore] = useState(
    JSON.parse(localStorage.getItem("topScore")) || Number.POSITIVE_INFINITY
  );
  const interval = useRef(null);

  useEffect(() => {
    setShowModal(true)
    setDialogText('you have 60 seconds')
  }, [])

  const victoryCheck = () => {
    if (matchedCards.length === cardsArray.length) {
      clearInterval(interval.current)
      new Audio(victory).play()
      setShowModal(true);
      if (moves<topScore){
        setTopScore(moves)
        localStorage.setItem("topScore", moves);
        setDialogText(`YOU WON ! A new record : ${moves} moves`)
      }
      setDialogText('YOU WON !')
      setDialogButton('PLAY  AGAIN')
    }
  };
  const gameOver = () => {
    console.log('go')
    clearInterval(interval.current)
    new Audio(gameover).play()
    setShowModal(true);
    setDialogText('GAME OVER')
    setDialogButton('PLAY  AGAIN')
  }

  const check = () => {
    const [first, second] = flippedCards;
    setFreezeBoard(false);
    if (cards[first].name === cards[second].name) {
      setMatchedCards(matchedCards => [...matchedCards, cards[first].name]);
      new Audio(match).play()
      setFlippedCards([]);
      return;
    }
    setTimeout(() => {
      setFlippedCards([]);
    }, 500);
  };
  const flipCard = (index) => {
    new Audio(flip).play()
    if (flippedCards.length === 1) {
      setFlippedCards((flippedCards) => [...flippedCards, index]);
      setMoves((moves) => moves + 1);
      setFreezeBoard(true);
    } else {
      setFlippedCards([index]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setTimeout(check, 300);
    }

  }, [flippedCards]);

  useEffect(() => {
    victoryCheck();
  }, [matchedCards]);
  useEffect(() => {
    if(timer===0){
      gameOver()
    }
  }, [timer])
  const handleRestart = () => {
    setMatchedCards([]);
    setFlippedCards([]);
    setShowModal(false);
    setMoves(0);
    setFreezeBoard(false);

    setCards(shuffleCards(cardsArray.concat(cardsArray)));
    setTimer(60)
    interval.current = setInterval(()=>{
      setTimer(timer=>timer-1)
    }, 1000);
  };
  
  return (
    <div className="app">
      <div className='score-container'>
      <h2 className='timer'>
          Time : {timer}
        </h2>
        <h3 className="moves">
          Moves {moves}
        </h3>
        <h3 className="high-score">
          Top Score {localStorage.getItem("topScore")}
        </h3>
      </div>
      
      <div className="game-container">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              freezeBoard={freezeBoard}
              isMatched={matchedCards.includes(card.name)}
              isFlipped={flippedCards.includes(index)}
              flipCard={flipCard}
              cardback={cardback}
            />
          );
        })}
      </div>
      <Dialog
        open={showModal}
        disableBackdropClick
        disableEscapeKeyDown
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRestart} color="default" variant="outlined">
            {dialogButton}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App



