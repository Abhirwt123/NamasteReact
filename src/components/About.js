import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent contructor");
  }
 componentDidMount() {
    // console.log("parent componet did mount");

  }
  render() {
    // console.log("parent render")
    return (
      <div className="about-wrap">
        <h1>This is a about page</h1>
        <UserClass  />
      </div>
    );
  }
}
export default About;
