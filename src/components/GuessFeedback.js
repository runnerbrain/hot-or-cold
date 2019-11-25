import React from 'react';
import { connect } from 'react-redux';

function GuessFeedback(props) {
  return <h3>{props.feedback}</h3>;
}

const mapStateToProps = state => ({
  feedback: state.feedback
});

export default connect(mapStateToProps)(GuessFeedback);
