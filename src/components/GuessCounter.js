import React from 'react';
import { connect } from 'react-redux';

function GuessCounter(props) {
  return <h3>Guess # {props.counter || '___'}</h3>;
}

const mapStateToProps = state => ({
  counter: state.counter
});

export default connect(mapStateToProps)(GuessCounter);
