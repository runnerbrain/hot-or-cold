import React from 'react';
import GameHeader from './components/GameHeader';
import GameConsole from './components/GameConsole';

class HotOrCold extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this); 
        this.handleCounter = this.handleCounter.bind(this);
        
    }

    handleClick(){
        
        console.log('clicked new game');
    }

    handleCounter(counter){
        console.log(`Counter is: {counter}`)
    }

    render() {
        const number_to_guess= Math.floor(Math.random()*101);
        return (
            <div className='game-board'>
                <GameHeader onClick={this.handleClick}/>
                <h1>Hot or cold</h1>
                <GameConsole 
                    numberToGuess={number_to_guess}
                    onGuessMade={this.handleCounter}
                    />
            </div>
        );
    }
}

export default HotOrCold;