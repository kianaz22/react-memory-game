import React from 'react'

const Card = ({ flipCard, card, index, isMatched, isFlipped, freezeBoard,cardback }) => {
    const handleClick = () => {
      !isFlipped && !freezeBoard && flipCard(index);
    };
  
    return (
        <div className={`card ${isFlipped||isMatched ? 'flip' : ''}`} 
         onClick={handleClick} >
            <img src={card.image} alt="card" className="front-face" />
            <img src={cardback} alt="cardback" className="back-face" />
        </div>
    )
  };
  
  export default Card;
  














// const Card = ({ card,index,cardback,flipCard,disabledCards,flippedCards }) => {

//     const handleClick = ()=> {
//       if (disabledCards.includes(index))
//       return
//     flipCard(index)
//     }
//     return (
//         <div className={`card ${flippedCards.includes(index) ? 'flip' : ''}`} 
//          onClick={handleClick} >
//             <img src={card.image} alt="card" className="front-face" />
//             <img src={cardback} alt="cardback" className="back-face" />
//         </div>
//     )
// }

// export default Card
