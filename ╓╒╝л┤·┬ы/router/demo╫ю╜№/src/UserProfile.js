import React, {Component} from 'react'

class UserProfile extends Component {
  constructor(props){
    super(props);
  }

  render(){

    console.log("match = ", this.props.match);
    console.log("location = ", this.props.location);
    console.log("history = ", this.props.history);

    return (
      <h4>用户 {this.props.match.params.userId} 信息</h4>
    );
  }
}

export default UserProfile;
