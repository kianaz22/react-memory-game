import './App.css';
import { useState, useEffect, useRef } from 'react'
import flip from './flip.wav'
import match from './match.wav'
import victory from './victory.wav'
import gameover from './gameover.wav'
import { Dialog, DialogActions, DialogContent, DialogContentText, Button } from "@material-ui/core";
import Card from './components/Card.js'
import cardback from './cardback.jpg'
import kh from './KH.jpg'
import ad from './AD.jpg'
import qs from './QS.jpg'
import jc from './JC.jpg'
import s5 from './S5.jpg'
import d2 from './D2.jpg'
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
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
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
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
      setDialogText(`YOU WON !  
      moves: ${moves} 
      Your Top score: ${bestScore}`)
      setDialogButton('PLAY  AGAIN')
    }
  };
  const gameOver = () => {
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

  const handleRestart = () => {
    setMatchedCards([]);
    setFlippedCards([]);
    setShowModal(false);
    setMoves(0);
    setFreezeBoard(false);

    setCards(shuffleCards(cardsArray.concat(cardsArray)));
    setTimer(60)
    setTimeout(() => {
      gameOver()
    }, 60000);
    interval.current = setInterval(() => {
      setTimer(timer => timer - 1)
    }, 1000);
  };

  return (
    <div className="app">
      <h1>Memory Game</h1>
      <div className="score">
        <h3 className="moves">
          Moves: {moves}
        </h3>
        <h2 className='timer'>
          Time : {timer}
        </h2>
        {localStorage.getItem("bestScore") && (
          <h3 className="high-score">
            Top Score: {bestScore}
          </h3>
        )}
      </div>

      <div className="container">

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
          <Button onClick={handleRestart} color="primary">
            {dialogButton}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App





// function App() {
//   const [freezeBoard, setFreezeBoard] = useState(false)
//   const [flippedCards, setFlippedCards] = useState([])
//   const [disabledCards, setDisabledCards] = useState([])
//   cardsArray = cardsArray.concat(cardsArray)

//   // useEffect(() => {
//   //   shuffle(cardsArray)
//   // }, [])


//   useEffect(() => {
//     console.log(flippedCards)
//     if (flippedCards.length>1) 
//       checkForMatch();
//   }, [flippedCards])

//   function flipCard(index) {
//     console.log('flipCard')
//     if (freezeBoard) return;
//     if (flippedCards.includes(index)) return;

//     setFlippedCards(flippedCards => [...flippedCards, index])
//   }
//   function checkForMatch() {
//     console.log('check', flippedCards)
//     const [first,second] = flippedCards
//     if (cardsArray[first].name === cardsArray[second].name) {
//       console.log('disable')
//       disableCards();
//       //match music
//     }
//     else { flipBack(); }
//   }
//   function disableCards() {
//     setDisabledCards(disabledCards => [...disabledCards, flippedCards[0],flippedCards[1]])
//     setFlippedCards([])
//   }
//   function flipBack() {
//     console.log('flipback')
//     setTimeout(() => {
//       setFlippedCards([]);
//     }, 1000);
//   }
//   function resetBoard() {
//     console.log('reset')
//     setFreezeBoard(false);
//     setFlippedCards([]);
//   }

//   function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;

//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {

//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;

//       // And swap it with the current element.
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }

//     return array;
//   }

//   return (
//     <div className="app">
//       <h1>Memory Game</h1>
//       <div className="container">

//         {cardsArray.map((card, index) =>
//           <Card card={card} key={index} index={index} cardback={cardback} 
//           flipCard={flipCard} disabledCards={disabledCards} flippedCards={flippedCards} />
//         )}

//       </div>
//     </div>
//   );
// }

// export default App;
