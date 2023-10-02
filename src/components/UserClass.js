import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        avatar_url: "dunny",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Abhirwt123");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user">
        <p>Name:{name}</p>
        <p>Location:{location}</p>
        <p>
          <img src={avatar_url} />
        </p>
      </div>
    );
  }
}

export default UserClass;
