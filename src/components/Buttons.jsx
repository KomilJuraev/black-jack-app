import React from "react";

function Buttons(props) {

    function getRandomCard() {
        let randNum = Math.floor(Math.random() * 13) + 1;
        if (randNum > 10) {
            return 10;
        } else if (randNum === 1) {
            return 11;
        } else {
            return randNum;
        }
    }

    function startGame() {
        if (props.isAlive === false && props.player.chips > 0) {
            let firstCard = getRandomCard();
            let secondCard = getRandomCard();
            props.setCards([firstCard, secondCard]);
            props.setIsAlive(true);
        }
    }

    function newCard() {
        if (props.isAlive === true) {
            let thirdCard = getRandomCard();
            props.setCards(prevSet => [...prevSet, thirdCard])
        }
    }

    function playAgain() {
        props.setIsAlive(false);
        props.setCards([]);
        props.setPlayer({ chips: 150 })
        props.setChipsRefilled(true);
    }

    return (
        <div id="btn-sec">
            <button className="btn btn-info" onClick={startGame}>Start Game</button>
            <button className="btn btn-info" onClick={newCard}>New Card</button>
            <button style={props.player.chips > 0 ? { display: 'none' } : {}} className="btn btn-info" id="play-again-btn" onClick={playAgain}>Play Again</button>
        </div>
    );
}

export default Buttons;