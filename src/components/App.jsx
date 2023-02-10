import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import PlayerInfo from "./PlayerInfo";
import Sum from "./Sum";
import Cards from "./Cards";
import Message from "./Message";

function App() {
    const [cards, setCards] = useState([]);
    const [message, setMessage] = useState("Want to play a round?");
    const [player, setPlayer] = useState({
        name: "Player",
        chips: 150
    });
    const [isAlive, setIsAlive] = useState(false);
    const [chipsRefilled, setChipsRefilled] = useState(false);

    function renderGame() {
        if (chipsRefilled === true) {
            setMessage("Want to play a round?");
            setChipsRefilled(false);
        } else if (isAlive === true) {
            const sumOfCards = cards.length !== 0 ? cards.reduce((sum, card) => (sum + card)) : 0;

            if (sumOfCards <= 20) {
                setMessage("Do you want to draw a new card?");
            } else if (sumOfCards === 21) {
                setMessage("Conguratulations! You've got the Blackjack!");
                let add = player.chips + 50;
                setPlayer({ chips: add });
                setIsAlive(false);
            } else {
                setMessage("Sorry you lost!");
                let subtract = player.chips - 50;
                setPlayer({ chips: subtract });
                setIsAlive(false);
            }
            if (player.chips === 0) {
                setMessage("Game Over!");
            }
        }
    }

    useEffect(() => {
        renderGame();
        //eslint-disable-next-line
    }, [cards]);

    return (
        <div>
            <h1>BlackJack</h1>
            <Message message={message} />
            <Cards cards={cards} />
            <Sum cards={cards} />
            <Buttons
                isAlive={isAlive}
                player={player}
                setCards={setCards}
                setIsAlive={setIsAlive}
                setPlayer={setPlayer}
                setChipsRefilled={setChipsRefilled}
            />
            <PlayerInfo player={player} />
        </div>
    );
}

export default App;