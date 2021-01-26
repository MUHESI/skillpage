import React, { Component } from "react";
import axios from "axios";

// { }  []

/*
listArticles: [
        {
          id: 1,
          title: "Project title1",
          img: "img/profile3.jpg",
          author: "Jacques Ndavaro",
        },


        currentPage: 1,
      pageSize: 10,
      currentKeyword: "Paris",
*/
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      currentPage: 1,
      pageSize: 10,
      currentKeyword: "Paris",
    };
  }
  k;
  componentDidMount() {
    this.getHits();
  }

  getHits() {
    let url =
      "https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q=paris";

    axios
      .get(url)
      .then((resp) => {
        this.setState({
          hits: resp.data.hits,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        Hello, I m'a Gallery component !
        <div>
          {this.state.hits.map((hit, v) => (
            <img src={hit.webformatURL} />
          ))}
        </div>
      </div>
    );
  }
}
export default Gallery;

class NewClass extends Component {
  render() {
    return <div>I 'm other component newComponent !'</div>;
  }
}
export { Gallery, NewClass };
