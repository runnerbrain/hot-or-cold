import React from 'react';

export default function GuessCounter(props){
    return(
        <h3>Guess # {props.counter || "___"}</h3>
    )
}