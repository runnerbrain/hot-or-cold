import React from 'react';
import { connect } from 'react-redux';

function GuessList(props) {
  let separator;
  if (props.guesses.length > 1) separator = ' | ';
  return props.guesses.map((guess, i) => {
    if (i > 0)
      return (
        <span>
          {separator}
          {guess}{' '}
        </span>
      );
    else return <span>{guess} </span>;
  });
}

const mapStateToProps = state => ({
  guesses: state.guesses
});

export default connect(mapStateToProps)(GuessList);
