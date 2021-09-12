import { Component } from "react";
import LoginForm from './LoginForm'
class Profile extends Component {

  render() {
    /* TODO: render information about logged in user */

    /* STRETCH TODO: if no logged in user then redirect home */
    return (
      <div>
<p>{this.props.userName}</p>
<LoginForm/>
      </div>
    )
  }
};

export default Profile;
