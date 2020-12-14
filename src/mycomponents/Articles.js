import React, { Component } from "react";

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cest dans le constructeur q un defini le state
      listArticles: [
        {
          id: 1,
          title: "Project title1",
          img: "img/profile3.jpg",
          author: "Jacques Ndavaro",
        },
        {
          id: 2,
          title: "Project title1",
          img: "img/profile3.jpg",
          author: "John Salvador",
        },
      ],
    };
  }

  // { }  []
  render() {
    return (
      <div className="">
        {this.state.listArticles.map((article, v) => (
          <div className="br-buttom m-2 ">
            <div className="row g-0">
              <div className="col-sm-4 col-md-4 col-lg-4">
                <img
                  className="img-thumbnail"
                  src={article.imgg ? article.img : "img/profile3.jpg"}
                />
              </div>
              <div className="col-sm-8 col-md-8">
                <div className="card-body">
                  <div className="card-title">
                    <h5>{article.title ? article.title : "titre default"}</h5>
                  </div>
                  <p className="card-text text-boldYellow">
                    {article.author ? article.author : "MUHESI Moise"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

class ArticlesMoreView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cest dans le constructeur q un defini le state
      listArticlesMoreView: [
        {
          id: 1,
          title: "Article title1 Project title Project title ",
          smallbody: "jshint' or globally using 'npm install",
          updated: "last updated 3mins ago",
          link: "monDefault.jpg",
        },
        {
          id: 2,
          title: "Article title2 Project title1 Project title Project title",
          smallbody: "jshint' or globally using 'npm install",
          updated: "last updated 3mins ago",
          link: "monDefault.jpg",
        },
        {
          id: 3,
          title: "Article title3 Project title1 Project title Project title",
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
      <div className=" p-2">
        {this.state.listArticlesMoreView.map((article, index) => (
          <div>
            <a href="#" className="">
              {article.title ? article.title : "titre default"}
            </a>
          </div>
        ))}
      </div>
    );
  }
}
export default Articles;
export { Articles, ArticlesMoreView };
