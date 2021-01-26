import React, { Component } from "react";

class Actualites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cest dans le constructeur q un defini le state
      listEvent: [
        {
          id: 1,
          title: "Publication Date",
          smallbody:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
          datepost: "last updated 3mins ago",
          img: "img/monDefault.jpg",
        },

        {
          id: 2,
          title: "Publication Date",
          smallbody:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
          datepost: "last updated 3mins ago",
          img: "monDefault.jpg",
        },
        {
          id: 3,
          title: "Publication Date",
          smallbody:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
          datepost: "last updated 3mins ago",
          img: "monDefault.jpg",
        },
      ],
    };
  }

  // { }  []
  render() {
    return (
      <div className="t">
        {this.state.listEvent.map((actualite, v) => (
          <div class="card" style="width: 18rem;">
            <img
              class="card-img-top img-fluid"
              src={actualite.img ? actualite.img : "img/monDefault.jpg"}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 className="card-title text-boldPrimary">
                {actualite.title ? actualite.title : "titre default"}
              </h5>

              <p class="card-text">
                {" "}
                {actualite.smallbody ? actualite.smallbody : "Contenu contenu"}
              </p>
            </div>

            <div className="">
              <button className="btn btn-linkBlack">Read more...</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Actualites;
