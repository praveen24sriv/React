import UserClass from './UserClass';
import User from './User';
const About = ()=>{

    return (
        <div className="about">
            <h1>About</h1>
            <p> This is a simple React app that uses React Router to navigate between pages. </p>
            <User/>
            <UserClass />
        </div>
    );

};
export default About;