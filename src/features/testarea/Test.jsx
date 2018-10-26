import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { incrementCounter, decrementCounter } from "./testAction";

class Test extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>test area</h1>
        <h2>from testreducer: {data}</h2>
        <Button onClick={incrementCounter} color="green" content="increment" />
        <Button onClick={decrementCounter} color="red" content="decrement" />
      </div>
    );
  }
}

const actions = {
  incrementCounter,
  decrementCounter
};

const mapStateToProps = state => ({
  data: state.test.data
});

// const mapDispatchTopProps = dispatch => ({});

export default connect(
  mapStateToProps,
  actions
)(Test);
