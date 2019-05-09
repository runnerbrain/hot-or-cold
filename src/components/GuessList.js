import React from 'react';

export default function GuessList(props){
    let comma;
    if(props.guesses.length > 1)
        comma = ",";
    return(
        props.guesses.map((guess,i) =>( 
            
            <span>{comma}{guess} </span> )
        )
    )
}