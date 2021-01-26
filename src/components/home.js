import React, { Component } from "react";
import { SectionTitle, ExpertiseDomaine } from "../sectionTitle/sectionTitle";
import MapProjects from "./MapProjects";

//  Manager le repertoire : le fichier est dans le meme dossier on on met ./
// S'il est dans le dossier parent on met ../
//  <ExpertiseDomaine />  <Events />
/*  const
<<<<<<< HEAD:src/mycomponents/home.js
import { ProjectsImg, ProjectsVideo } from "../mycomponents/Projects";
//import Events from "../mycomponents/Events";
import { Articles, ArticlesMoreView } from "../mycomponents/Articles";
import ProjectsPrograms from "../mycomponents/Programs";
import Aboutus from "../mycomponents/About";
import RecentActivities from "../mycomponents/RecentActivities";
import Actualites from "../mycomponents/Actualites";
=======
import { ProjectsImg, ProjectsVideo } from "./Projects";
//import Events from "../mycomponents/Events";
import { Articles, ArticlesMoreView } from "./Articles";
import ProjectsPrograms from "./Programs";
import Aboutus from "./About";
import RecentActivities from "./RecentActivities";
import Actualites from "./Actualites";
>>>>>>> versionColorYELLOW:src/components/home.js
*/

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <ProjectsPrograms />
          <Aboutus />
          <RecentActivities />
          <div className="row p-1">
            <div class="col-sm-12 col-md-8 col-lg-8 bloc-light p-2">
              <h3 className="text-bold">Projets</h3>

              <div className="row ">
                <div class="col-sm-12 col-md-8 col-lg-8">
                  <ProjectsImg />
                </div>

                <div class="col-sm-12 col-md-4 col-lg-4">
                  <ProjectsVideo />
                </div>
              </div>
            </div>

            <div class="col-sm-12 col-md-4 col-lg-4">
              <div>
                <h3 className="text-bold">Actualités & Events</h3>
                <div className="text-right">
                  <button className="btn btn-linkBlack" id="hoverTitle">
                    Voir Plus
                  </button>
                </div>
              </div>
              <Actualites />
              <div className="bloc-light p-2">
                <h3 className="text-bold">Articles</h3>
                <div className="text-right">
                  <button className="btn btn-linkBlack" id="hoverTitle">
                    Voir Tous
                  </button>
                </div>
                <Articles />
                <h3 className="text-bold">Les Plus Vues</h3>
                <div className="text-right">
                  <button className="btn btn-linkBlack" id="hoverTitle">
                    Voir Tous
                  </button>
                </div>
                <ArticlesMoreView />
              </div>
            </div>
          </div>
          <div className="">MapProjects</div>
          <div className="">
            <img className="img-fluid" src="img/parteners.png" alt="partenrs" />
          </div>
        </div>
      </div>
    );
  }
}
