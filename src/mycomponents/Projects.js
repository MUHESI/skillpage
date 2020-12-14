import React, { Component } from "react";

class ProjectsImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cest dans le constructeur q un defini le state
      listProjectsImg: [
        {
          id: 1,
          title: "Project title1",
          smallbody: "jshint' or globally using 'npm install",
          updated: "last updated 3mins ago",
          img: "monDefault.jpg",
        },
        {
          id: 1,
          title: "Project title2",
          smallbody: "jshint' or globally using 'npm install",
          updated: "last updated 3mins ago",
          img: "monDefault.jpg",
        },
        {
          id: 1,
          title: "Project title3",
          smallbody: "jshint' or globally using 'npm install",
          updated: "last updated 3mins ago",
          img: "monDefault.jpg",
        },
        {
          id: 1,
          title: "Project title4",
          smallbody: "jshint' or globally using 'npm install",
          updated: "last updated 3mins ago",
          img: "monDefault.jpg",
        },
        {
          id: 1,
          title: "Project title5",
          smallbody: "jshint' or globally using 'npm install",
          updated: "last updated 3mins ago",
          img: "monDefault.jpg",
        },
      ],
    };
  }

  // { }  []
  render() {
    return (
      <div className="br-right">
        {this.state.listProjectsImg.map((project, v) => (
          <div className="br-buttom m-2 ">
            <div className="row g-0">
              <div className="col-sm-4 col-md-4 col-lg-4">
                <img
                  className="img-thumbnail"
                  src={project.imgg ? project.img : "img/profile3.jpg"}
                />
              </div>
              <div className="col-sm-8 col-md-8">
                <div className="card-body">
                  <div className="card-title">
                    <h5>{project.title ? project.title : "titre default"}</h5>
                  </div>
                  <p className="card-text">
                    {project.smallbody ? project.smallbody : "Contenu contenu"}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      {project.updated
                        ? project.updated
                        : " default, 5 mins ago"}
                    </small>
                  </p>
                  <div className="">
                    <button className="btn btn-colorYellow">Read more></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

class ProjectsVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cest dans le constructeur q un defini le state
      listProjectsVideo: [
        {
          id: 1,
          title: "Project title1",
          smallbody: "jshint' or globally using 'npm install",
          updated: "last updated 3mins ago",
          link: "monDefault.jpg",
        },
        {
          id: 1,
          title: "Project title2",
          smallbody: "jshint' or globally using 'npm install",
          updated: "last updated 3mins ago",
          link: "monDefault.jpg",
        },
        {
          id: 1,
          title: "Project title2",
          smallbody: "jshint' or globally using 'npm install",
          updated: "last updated 3mins ago",
          link: "monDefault.jpg",
        },
        {
          id: 1,
          title: "Project title4",
          smallbody: "jshint' or globally using 'npm install",
          updated: "last updated 3mins ago",
          link: "monDefault.jpg",
        },
        {
          id: 1,
          title: "Project title5",
          smallbody: "jshint' or globally using 'npm install",
          updated: "last updated 3mins ago",
          link: "monDefault.jpg",
        },
      ],
    };
  }

  // { }  []
  render() {
    return (
      <div className="">
        {this.state.listProjectsVideo.map((project, index) => (
          <div className="card">
            <div className="img-card">
              <img
                className="img-fluid"
                src={project.img ? project.img : "img/profile3.jpg"}
                title={project.title ? project.title : "titre default"}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default ProjectsImg;
export { ProjectsImg, ProjectsVideo };
