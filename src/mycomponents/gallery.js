import React, { Component } from "react";

class Gallery extends Component {
  render() {
    return <div>Hello, I m'a Gallery component !</div>;
  }
}
export default Gallery;

class NewClass extends Component {
  render() {
    return <div>I 'm other component newComponent !'</div>;
  }
}
export { Gallery, NewClass };
