import React , {Component} from "react";

class UserClass extends Component{
    constructor(props){
       
        
     
super(props)
   // State inside a class component which will for a big object
   this.state  = {
    userInof:{
        login:"xyz",
        id : 1
    }
   }   


}
   
async componentDidMount(){
    const data =await fetch("https://api.github.com/users");
    const json = await data.json()
    
    this.setState({
        userInof:json[2]
    })
   
    
}

componentDidUpdate(){
    // console.log("Inside ComponentDidUpdate");
    
}
componentWillUnmount(){
    // console.log("Inside componentWillUnmount");
    
}
    
render (){
   const {name,location,contact}= this.props
//    console.log("Inside "+this.props.order+ " Render");

const {login,id}=this.state.userInof
    
    return (
        <div className="user-card">
            <h1>Name :{login}</h1>
            <h1>id: {id}</h1>
        </div>
    )
}

}
export default UserClass;
