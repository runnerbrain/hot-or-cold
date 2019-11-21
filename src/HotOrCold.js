import React from "react";
import GameHeader from "./components/GameHeader";
import GameConsole from "./components/GameConsole";
import GuessFeedback from "./components/GuessFeedback";
import GameForm from "./components/GameForm";
import GuessCounter from "./components/GuessCounter";
import GuessList from "./components/GuessList";

class HotOrCold extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    // this.handleCounter = this.handleCounter.bind(this);
    this.state = {
      feedback: "Make your guess",
      counter: 0,
      guesses: [],
    };
  }

  handleClick() {
    this.setState({
        feedback: 'Make your guess',
        counter: 0,
        guesses: []
    });
  }

  generateFeedback(val, actual) {
    let diff = Math.abs(actual - val);

    if (diff < 10 && diff > 0) return "Hot";
    else if (diff < 15 && diff >= 10) return "Kinda Hot";
    else if (diff >= 15) return "Cold";
    else return "You Got it";
  }

  handleGuessMade = val => {
    if (!isNaN(val) && val !== '') {
      this.setState({ counter: this.state.counter + 1 });
      this.setState(prevState => ({
        guesses: [...prevState.guesses, val]
      }));
      let feedback = this.generateFeedback(val, this.props.numberToGuess);
      this.setState({ feedback });
    } else {
      let message = "Invalid guess";
      this.setState({ feedback: message });
    }
  };

  render() {
    return (
      <div className="game-board">
        <GameHeader onClick={this.handleClick} />
        <h1>Hot or cold</h1>
        <GuessFeedback feedback={this.state.feedback} />
        <GameForm onGuess={this.handleGuessMade} />
        <GuessCounter counter={this.state.counter} />
        <GuessList guesses={this.state.guesses} />
      </div>
    );
  }
}

export default HotOrCold;
