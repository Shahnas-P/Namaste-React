import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


class About extends React.Component{
  constructor(props){
    super(props)
    
  }
  componentDidMount (){
    
  }
  render(){
    
    return (
      <div>
        <h1>About Page</h1>
        <h3>This is Shahnas Creation!!!</h3>
        <UserClass order="Child 1"  name="Afsin Hassn" location="Kootilagadi" contact="jefe117@gmail.com" />
<UserContext.Consumer>{(data)=><h2>{data.loggedInUser}</h2>
}</UserContext.Consumer>
      </div>
    );
  }

};

export default About;
