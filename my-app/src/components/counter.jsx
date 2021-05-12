import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Badge from "react-bootstrap/Button";
import Button from "react-bootstrap/Button";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("Increment clicked", this.state.count);
  };

  doHandleIncrement = () => {
    this.handleIncrement();
  };

  render() {
    return (
      <div>
        <Badge variant="primary">{this.state.count}</Badge>
        <Button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </Button>
      </div>
    );
  }
}

export default Counter;
