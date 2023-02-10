import React from "react";

function PlayerInfo(props) {
    return (
        <p id="player-el">{props.player.name + ": $" + props.player.chips}</p>
    );
}

export default PlayerInfo;