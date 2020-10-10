import React, { Component } from "react";
// {  }
// []
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Keep you smile",
      contact: {
        name: "MUHESI Moise",
        profile: "img/profile1.jpg",
        email: "mvmmuhesi§gmail.com",
      },
      skills: [
        { id: 1, skill: "software Ir" },
        { id: 1, skill: "design thinking" },
        { id: 1, skill: "Machine learning" },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header text-center">
            <strong>
              <label> {this.state.title} </label>
            </strong>
          </div>
          <div className="row p-2">
            <div className="col col-auto">
              <img width={100} src={this.state.contact.profile} alt="img" />
            </div>
            <div className="col">
              <ul className="list-group">
                <li className="list-group-item">{this.state.contact.name} </li>
                <li className="list-group-item">{this.state.contact.email}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
