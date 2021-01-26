import React, { Component } from "react";

class RecentActivities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cest dans le constructeur q un defini le state
      RecentActivity: [
        {
          id: 1,
          title: "Formation en BM4R",
          smallbody:
            "Notre mision technologies et recherche  technologies et recherche  technologies et recherche scientifiques appliquéel en hautes technologies et recherche scientifiques appliquéelen hautes technologies et recherche scientifiques",
          img: "img/profile3.jpg",
        },
      ],
      lisRecentActivities: [
        {
          id: 1,
          title: "MUCHANGO",
          smallbody:
            "Notre mision technologies et recherche scientifiques appliquéel en hautes technologies et recherche scientifiques appliquéelen hautes technologies et recherche scientifiques",
          img: "img/profile3.jpg",
        },

        {
          id: 1,
          title: "PAMOJA",
          smallbody:
            "Notre mision technologies et recherche scientifiques appliquéel en hautes technologies et recherche scientifiques appliquéelen hautes technologies et recherche scientifiques",
          img: "img/profile3.jpg",
        },
        {
          id: 1,
          title: "UJUZI",
          smallbody:
            "jshint' or globally using 'npm installshint' or globally using 'npm installshint' or globally using 'npm install",
          img: "img/profile3.jpg",
        },
        {
          id: 1,
          title: "MUCHANGO",
          smallbody:
            "jshintshint' or globally using 'npm installshint' or globally using 'npm install' or globally using 'npm install",
          img: "img/profile3.jpg",
        },
      ],
    };
  }

  // { }  []
  render() {
    return (
      <div className=" bloc-dark">
        <div className="tilte text-boldPrimary p-1">
          <h2>Activités recentes</h2>
        </div>
        <div className="row m-2">
          <div class="col-sm-12 col-md-6 col-lg-6">
            {this.state.RecentActivity.map((activity, v) => (
              <div className="">
                <div className="img-card">
                  <img
                    className="img-fluid br-rect-white  br-circle-15"
                    src={activity.img ? activity.img : "img/profile3.jpg"}
                  />
                </div>
                <div className="card-body">
                  <div className="card-title m-0">
                    <button className="btn btn-title-boldPrimary">
                      <h5>
                        {activity.title ? activity.title : "titre default"}
                      </h5>
                    </button>
                  </div>
                  {activity.smallbody
                    ? activity.smallbody
                    : "Notre mision technologies et recherche"}
                </div>
              </div>
            ))}
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            {this.state.lisRecentActivities.map((activity, v) => (
              <div className="row m-1">
                <div className="col-sm-4 col-md-4 col-lg-4">
                  <img
                    className="img-fluid  br-circle-10"
                    src={activity.img ? activity.img : "img/profile3.jpg"}
                  />
                </div>
                <div className="col-sm-8 col-md-8">
                  <div className="card-title m-0">
                    <button className="btn btn-title-boldPrimary">
                      <h5>
                        {activity.title ? activity.title : "titre default"}
                      </h5>
                    </button>
                  </div>
                  <p className="card-text m-0">
                    {activity.smallbody
                      ? activity.smallbody
                      : "Notre mision technologies et recherche"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default RecentActivities;

/*
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
        */
