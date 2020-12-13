import React, { Component } from "react";

class ArticlesImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cest dans le constructeur q un defini le state
      listArticleImg: [
        {
          id: 1,
          title: "Project title1",
          smallbody: "jshint' or globally using 'npm install",
          img: "monDefault.jpg",
        },
        {
          id: 1,
          title: "Project title2",
          smallbody: "jshint' or globally using 'npm install",
          img: "monDefault.jpg",
        },
        {
          id: 1,
          title: "Project title3",
          smallbody: "jshint' or globally using 'npm install",
          img: "monDefault.jpg",
        },
      ],
    };
  }

  // { }  []
  render() {
    return (
      <div className="">
        {this.state.listArticleImg.map((article, v) => (
          <div className="card">
            <div className="img-card">
              <img
                width={100}
                src={article.img ? article.img : "img/profile3.jpg"}
              />{" "}
            </div>
            <div className="card-header">
              {article.title ? article.title : "titre default"}
            </div>
            <div className="card-body">
              {article.smallbody ? article.smallbody : "Contenu contenu"}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

class ArticlesVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cest dans le constructeur q un defini le state
      listArticleVideo: [
        {
          id: 1,
          title: "Project title1",
          smallbody: "jshint' or globally using 'npm install",
          link: "monDefault.jpg",
        },
        {
          id: 1,
          title: "Project title2",
          smallbody: "jshint' or globally using 'npm install",
          link: "monDefault.jpg",
        },
        {
          id: 1,
          title: "Project title2",
          smallbody: "jshint' or globally using 'npm install",
          link: "monDefault.jpg",
        },
      ],
    };
  }

  // { }  []
  render() {
    return (
      <div className="">
        {this.state.listArticleVideo.map((article, index) => (
          <div className="card">
            <div className="img-card">
              <img
                width={100}
                src={article.img ? article.img : "img/profile3.jpg"}
              />{" "}
            </div>
            <div className="card-header">
              {article.title ? article.title : "titre default"}
            </div>
            <div className="card-body">
              {article.smallbody ? article.smallbody : "Contenu contenu"}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default ArticlesImg;
export { ArticlesImg, ArticlesVideo };
