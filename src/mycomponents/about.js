import React, { Component } from "react";
// {  } 
// [] 
class About extends Component {  }
    constructor(props){
        super(props){ 
            this.state={
                title:"CV";
                contact:{name:"MUHESI Moise", pofile:"img/profile.png",email:"mvmmuhesi§gmail.com"},
                skills: [
                    {  id:1,skill:"software Ir"},
                    {  id:1,skill:"design thinking"},
                    {  id:1,skill:"Machine learning"}
                ]

               }              
            
         }
    }
  render() {
    return (
    <div>
        
        
    </div>
    );
  }
}
export default About;
