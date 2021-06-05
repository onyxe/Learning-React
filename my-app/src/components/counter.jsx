import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

class Counter extends Component {
  doHandleIncrement = () => {
    this.handleIncrement();
  };

  render() {
    console.log("props", this.props);

    return (
      <div>
        <span class="badge alert-success">{this.props.counter.value}</span>
        <Button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </Button>
        <Button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          variant="danger"
          size="sm"
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default Counter;
