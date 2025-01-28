import UserClass from './UserClass';
import User from './User';
const About = ()=>{

    return (
        <div className="about">
            <h1>About</h1>
            <p> This is a simple React app that uses React Router to navigate between pages. </p>
            <User name={"Praveen Raj"}/>
            <UserClass name={"Praveen Raj SRIV"}/>
        </div>
    );

};
export default About;