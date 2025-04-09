import UserClass from './UserClass';
// import React from 'react';
import {Component,useContext} from 'react';
import UserContext from '../utils/UserContext';

//class About extends React.Component
class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");

    }
    componentDidMount(){
        console.log("Parent Component Did Mount");
    }
    render(){
        console.log("Parent Render");
        return (
            <div className="about">
                <h1>About</h1>
                <UserContext.Consumer>
                    {({user})=><h1>{user.name}</h1>
                    }
                </UserContext.Consumer>
                <p> This is a simple React app that uses React Router to navigate between pages. </p>
              
                <UserClass name={"Praveen Raj SRIV"}/>
               
            </div>
        );

    }
}



export default About;


