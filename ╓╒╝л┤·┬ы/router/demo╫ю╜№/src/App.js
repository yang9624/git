import React, { Component } from 'react';
import "./App.css"

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import {Prompt} from 'react-router';

import User from './User.js'

/*
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
直接使用Router组件时，需要用 <Router history={history}></Router>
*/

const Home = ({match, location, history})=>{

  // console.log("match = ", match);
  // console.log("location = ", location);
  // console.log("history = ", history);

  return (
    <h1>Home 首页面</h1>
  );
}

const About = () =>{
  return (
    <h1>About 关于页面</h1>
  );
}


class App extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return (
      <Router >
        <div className="app">
          <h2 className="link">
            <Link  to="/home">首页</Link>
            <Link to="/about">关于</Link>
            <Link to="/user">用户</Link>
          </h2>


          {/* 路由切换时都都会提示 */}
          {/*
            <Prompt message="are you want to leave ?"/>
          */}

          {/*使用Switch避免宽松匹配*/}
          <Switch>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/user" component={User}></Route>
          </Switch>
        </div>
      </Router>
      );
  }
}

export default App;
