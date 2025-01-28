import React from 'react';

class UserClass extends React.Component {


constructor(props) {
    super(props);

    this.state={
        count:0,
    };
    console.log(this.props.name+"Child Constructor");

    }
componentDidMount(){
    console.log(this.props.name+"Child Component Did Mount");
}
render() {
    console.log(this.props.name+"Child Render");
    const {count} = this.state;
    return <div className="user-card">
    <h1>Count ={count}</h1>

     <button onClick={
        ()=>{this.setState({
            count:count+1
        })}
        }>Increment</button>
        
    <h2>Name: {this.props.name}</h2>
    <h3> Location : Bangalore</h3>
    <h4> Contact : praveen24sriv</h4>


</div>
  }
}
export default UserClass;