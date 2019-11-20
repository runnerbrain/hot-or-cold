import React from 'react';

import GuessFeedback from './GuessFeedback';
import GameForm from './GameForm';
import GuessCounter from './GuessCounter';
import GuessList from './GuessList';

class GameConsole extends React.Component {
  constructor() {
    super();
    this.state = {
      feedback: 'Make your guess',
      counter: 0,
      guesses: []
    };
  }

  generateFeedback(val, actual) {
    let diff = Math.abs(actual - val);
    console.log(val, actual, diff);

    if (diff < 10 && diff > 0) return 'Hot';
    else if (diff < 15 && diff >= 10) return 'Kinda Hot';
    else if (diff >= 15) return 'Cold';
    else return 'You Got it';
  }

  handleGuessMade = val => {
    console.log('you made a guess' + val);
    console.log('Random number is: ' + this.props.numberToGuess);
    if (!isNaN(val)) {
      console.log(val);
      this.setState({ counter: this.state.counter + 1 });
      this.setState(prevState => ({
        guesses: [...prevState.guesses, val]
      }));
      let feedback = this.generateFeedback(val, this.props.numberToGuess);
      this.setState({ feedback });
    } else {
      console.log(val);
      let message = 'Invalid guess';
      this.setState({ feedback: message });
    }
  };

  render() {
    return (
      <div className="game-console">
        <GuessFeedback feedback={this.state.feedback} />
        <GameForm onGuess={this.handleGuessMade} />
        <GuessCounter counter={this.state.counter} />
        <GuessList guesses={this.state.guesses} />
      </div>
    );
  }
}

export default GameConsole;
