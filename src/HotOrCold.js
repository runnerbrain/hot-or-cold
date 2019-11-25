import React from 'react';

import GameHeader from './components/GameHeader';
import GuessFeedback from './components/GuessFeedback';
import GameForm from './components/GameForm';
import GuessCounter from './components/GuessCounter';
import GuessList from './components/GuessList';

import { connect } from 'react-redux';
import { setFeedback, increment, appendToGuessList, newGame } from './actions';

class HotOrCold extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(newGame());
    // this.setState({
    //   feedback: 'Make your guess',
    //   counter: 0,
    //   guesses: []
    // });
  }

  generateFeedback(val, actual) {
    let diff = Math.abs(actual - val);

    if (diff < 10 && diff > 0) return 'Hot';
    else if (diff < 15 && diff >= 10) return 'Kinda Hot';
    else if (diff >= 15) return 'Cold';
    else return 'You Got it';
  }

  handleGuessMade = val => {
    if (!isNaN(val) && val !== '') {
      //this.setState({ counter: this.props.counter + 1 });
      this.props.dispatch(increment());
      this.props.dispatch(appendToGuessList(val));
      // this.setState(prevState => ({
      //   guesses: [...prevState.guesses, val]
      // }));
      let feedback = this.generateFeedback(val, this.props.numberToGuess);
      this.props.dispatch(setFeedback(feedback));
    } else {
      let message = 'Invalid guess';
      // this.setState({ feedback: message });
      this.props.dispatch(setFeedback(message));
    }
  };

  render() {
    console.log(`Number to guess : ${this.props.numberToGuess}`);
    return (
      <div className="game-board">
        <GameHeader onClick={this.handleClick} />
        <h1>Hot or cold</h1>
        <GuessFeedback />
        <GameForm onGuess={this.handleGuessMade} />
        <GuessCounter />
        <GuessList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  feedback: state.feedback,
  counter: state.counter,
  guesses: state.guesses
});

export default connect(mapStateToProps)(HotOrCold);
