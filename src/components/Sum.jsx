import React from "react";

function Sum(props) {
    return (
        <p id="sum-el">Sum: {props.cards.length !== 0 ? props.cards.reduce((sum, card) => (sum + card)) : ""}</p>
    );
}

export default Sum;