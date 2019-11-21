import React from 'react';


export default function GameHeader(props){
    return(
        <nav>
            <ul>
                <li>WHAT?</li>
                <li><button onClick={props.onClick}>+NEW GAME</button></li>
            </ul>
        </nav>
    )
}