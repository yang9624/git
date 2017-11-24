
import React, {Component} from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import UserProfile from './UserProfile.js'

class User extends  Component {
  constructor(props){
    super(props);
  }

  backHome=()=>{
    //通过history.push replace go等进行路由切换
    this.props.history.push("/home");
  }

  render(){

    /*
    使用 match.path 可以直接编写嵌套路由
    注意 match.url 和 match.path的区别
    path: 用户自己编写的
    url: 实际的 url

    如果用户输入 /user/30, 仍然可以宽松匹配 /user路由
    那么 path === /user,  url=/user/30
    */

    return (
      <div>
        <div><button onClick={this.backHome}>回到首页</button></div>

        <Switch>
          <Route path={this.props.match.path} exact render={()=>{
              return (
                <div>
                  <h2>用户页面</h2>
                </div>
              );
            }} ></Route>
            <Route path={`${this.props.match.path}/:userId`} component={UserProfile} ></Route>
          </Switch>
        </div>
      );
  }
}

export default User;
