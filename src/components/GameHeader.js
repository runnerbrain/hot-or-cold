import React from 'react';


export default function GameHeader(props){
    return(
        <nav>
            <ul>
                <li>WHAT?</li>
                <li onClick={props.onClick}><a href="#">+NEW GAME</a></li>
            </ul>
        </nav>
    )
}