import React, { Component } from "react";
import * as FaIcons from "react-icons/fa";

class ProjectsPrograms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cest dans le constructeur q un defini le state
      textIntro:
        "Nous organisons trois prois programmes qui sont dans la vision du centre et qui cadrent avec nos objectifs",
      selectProjectShow: 0,
      listProjectsProgram: [
        {
          id: 1,
          title: "MUCHANGO",
          smallbody:
            "MUCHANGO trois prois programmes qui sont dans la vision du centre et qui cadrent avec nos objectifs Nous organisons trois prois programmes qui sont dans la vision du centre et qui cadrent avec nos objectifsNous organisons trois prois programmes qui sont dans la vision du centre et qui cadrent avec nos objectifs",
          updated: "last updated 3mins ago",
          img: "img/profile3.jpg",
        },
        {
          id: 1,
          title: "PAMOJA",
          smallbody:
            "PAMOJA trois prois programmes qui sont dans la vision du centre et qui cadrent avec nos objectifs Nous organisons trois prois programmes qui sont dans la vision du centre et qui cadrent avec nos objectifsNous organisons trois prois programmes qui sont dans la vision du centre et qui cadrent avec nos objectif",
          updated: "last updated 3mins ago",
          img: "img/profile3.jpg",
        },
        {
          id: 1,
          title: "UCHUZI",
          smallbody:
            "UCHUZI trois prois programmes qui sont dans la vision du centre et qui cadrent avec nos objectifs Nous organisons trois prois pr",
          updated: "last updated 3mins ago",
          img: "img/profile3.jpg",
        },
      ],
    };
  }

  FindProject = (op) => {
    let sign = op === "+" ? 1 : -1; // ici on affecte la valeur a "sign" selon la valeur de "op"
    // si "op = + " alors sign est 1 sinon -1
    // if (this.state.counter == 1 && op == "-") sign = 0;
    //let c = this.state.counter + sign;

    let c = op - 1;
    this.setState({
      selectProjectShow: c,
    });
  };
  // { }  []
  render() {
    return (
      <div>
        <div className="row">
          <div class="col-sm-4 col-md-4 col-lg-4">
            <div className="ml-auto">
              <span className="">
                <button
                  onClick={() => this.FindProject(1)}
                  className="btn btn-dark m-1"
                >
                  1
                </button>{" "}
              </span>
              <span className="">
                {this.state.listProjectsProgram[0]["title"]}
              </span>
            </div>
            <div className="ml-auto">
              <span className="">
                <button
                  onClick={() => this.FindProject(2)}
                  className="btn btn-dark m-1"
                >
                  2
                </button>{" "}
              </span>
              <span className="">
                {this.state.listProjectsProgram[1]["title"]}
              </span>
            </div>
            <div className="ml-auto">
              <span className="">
                <button
                  onClick={() => this.FindProject(3)}
                  className="btn btn-dark m-1"
                >
                  3
                </button>{" "}
              </span>
              <span className="">
                {this.state.listProjectsProgram[2]["title"]}
              </span>
            </div>
          </div>
          <div class="col-sm-8 col-md-8 col-lg-8 ">
            <div className="backg-primary text-white m-2 ">
              {
                this.state.listProjectsProgram[this.state.selectProjectShow][
                  "smallbody"
                ]
              }
            </div>
            <div className=" br-rect-primary">
              <div className="img-card">
                <img
                  className="img-fluid"
                  src={
                    this.state.listProjectsProgram[
                      this.state.selectProjectShow
                    ]["img"]
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <FaIcons.FaBars />
      </div>
    );
  }
}

export default ProjectsPrograms;
