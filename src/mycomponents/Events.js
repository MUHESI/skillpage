import React, { Component } from "react";

class Events extends Component {
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
          updated: "last updated 3mins ago",
          img: "monDefault.jpg",
        },

        {
          id: 2,
          title: "Publication Date",
          smallbody:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
          updated: "last updated 3mins ago",
          img: "monDefault.jpg",
        },
        {
          id: 3,
          title: "Publication Date",
          smallbody:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
          updated: "last updated 3mins ago",
          img: "monDefault.jpg",
        },
      ],
    };
  }

  // { }  []
  render() {
    return (
      <div className="t">
        {this.state.listEvent.map((event, v) => (
          <div className="br-buttom m-2 ">
            <div className="card-body">
              <div className="card-title">
                <h6 className="text-boldYellow">New title</h6>
                <h5 className="text-boldPrimary">
                  {event.title ? event.title : "titre default"}
                </h5>
              </div>
              <p className="card-text">
                {event.smallbody ? event.smallbody : "Contenu contenu"}
              </p>
              <div className="">
                <button className="btn btn-linkBlack">Read more...</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Events;
