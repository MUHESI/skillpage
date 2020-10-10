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
    let sign = op === "+" ? 1 : -1; // ici on affecte la valeur a "sign" selon la valeur de "op"
    // si "op = + " alors sign est 1 sinon -1
    if (this.state.counter == 1 && op == "-") sign = 0;
    let c = this.state.counter + sign;
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
            {this.props.title ? this.props.title : "defautl title"} :{" "}
            {this.state.counter}
          </strong>
        </div>
        <div className="ml-auto">
          <button
            onClick={() => this.compute("+")}
            className="btn btn-primary m-2"
          >
            +
          </button>
          <button
            onClick={() => this.compute("-")}
            className="btn btn-primary m-2"
          >
            -
          </button>
        </div>
        <div className="card-body">
          {this.state.list.map((v, index) => (
            <img
              width={100}
              src={this.props.image ? this.props.image : "img/profile3.jpg"}
            />
          ))}
        </div>
      </div>
    );
  }
}
//export default Counter2;
export default Counter;

// {
//this.state.map((v, index) => (
// <img width={100} src={this.props.image} />
//));
// }
