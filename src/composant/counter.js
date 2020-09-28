import React, { Component } from "react";
// { }
//  []

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cest dans le constructeur q un defini le state
      counter: 1,
      list: [0],
    };
  }
  compute = (op) => {
    let c = this.state.counter + 1;
    this.setState({
      counter: c,
      list: new Array(c).fill(0),
    });
  };
  // { }
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <strong>
            {this.props.title} : {this.state.counter}
          </strong>
        </div>
        <div className="ml-auto">
          <button
            onClick={() => this.compute("op", "+")}
            className="btn btn-primary m-2"
          >
            +
          </button>
          <button
            onClick={() => this.componentDidUpdate("op", "-")}
            className="btn btn-primary m-2"
          >
            -
          </button>
        </div>
        <div className="card-body">
          {this.state.map((v, index) => (
            <img width={100} src={this.props.image} />
          ))}
          <img width={100} src={this.props.image} />
        </div>
      </div>
    );
  }
}
export default Counter;
