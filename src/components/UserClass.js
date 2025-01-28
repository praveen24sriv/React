import React from 'react';

class UserClass extends React.Component {


constructor(props) {
    super(props);

    this.state={
        userInfo:{
            name:"Praveen Raj SRIV",
            location:"Bangalore",
           
        
        }  
    };
   // console.log(this.props.name+"Child Constructor");

    }
async componentDidMount(){
    //console.log(this.props.name+"Child Component Did Mount");
    const data = await fetch('https://api.github.com/users/praveen24sriv');
    const jsonData = await data.json();
    this.setState({userInfo:jsonData});
    console.log(jsonData);

}
render() {
    // console.log(this.props.name+"Child Render");
    const{name,location,avatar_url} = this.state.userInfo;
    return <div className="user-card">
    <h2>Name: {name}</h2>
    <h3> Location :{location}</h3>
    <img src={avatar_url} alt="User Image"/>
    <h4> Contact : praveen24sriv</h4>


</div>
  }
}
export default UserClass;