import React from "react";

function Cards(props) {
    return (
        <p id="cards-el">Cards: {props.cards.map((card, index) => (props.cards.length - 1 !== index ? card + ", " : card))}</p>
    );
}

export default Cards;