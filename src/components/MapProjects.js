import React, { Component } from "react";

class MapProjects extends Component {
  state = {
    Projects: [
      {
        id: 1,
        title: "PAMOJA",
        smallDescription:
          "You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other.",
        img: "img/profile3.jpg",
      },
    ],
  };
  render() {
    return (
      <div className="bloc bloc-primary">
        <div className="row">
          <div class="col-sm-6 col-md-4 col-lg-4">
            <div className="p-3">
              {this.state.Projects.map((project, index) => (
                <div>
                  <div className="title">
                    <h2>{project.title} </h2>
                  </div>

                  <div className="body">{project.smallDescription}</div>
                  <div className="m-2">
                    <button className="btn btn-colorYellow">
                      Contribuer >
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="col-sm-6 col-md-8 col-lg-8">
            <h3></h3>
            <div className="text-center">
              <img width={500} className="img-fluid" src={"img/map.png"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MapProjects;
