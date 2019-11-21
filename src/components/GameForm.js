import React from 'react';

class GameForm extends React.Component {
  constructor(props) {
    super();
    this.input = React.createRef();
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onGuess(this.input.current.value);
          this.input.current.value = '';
          this.input.current.focus();
        }}
      >
        <input type="text" ref={this.input} />
        <br />
        <button>Guess</button>
      </form>
    );
  }
}

export default GameForm;
