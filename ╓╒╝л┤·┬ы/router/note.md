

### MV*  http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html
### 前端框架
```
MVC   Angular.js  Google
MVVM  Vue.js     一个中国人
MVVM  React.js   Facebook
```


```
淘宝镜像
设置方法为：npm config set registry https://registry.npm.taobao.org

npm install  -g  create-react-app

npm install  -g  yarn (和npm功能类似)
```


### react 全家桶(react相关技术)
```
react  react-redux redux  react-router

```


### redux
### 文档  https://redux.js.org/docs/basics/UsageWithReact.html
```
redux: 状态管理的库，可以应用于很多框架，不一定非在react中使用

假设store格式如下：
{
  value: 10,
  todos: [{xxxx}, {yyyyy}]
}


//reducer
function value(state=0, action){
  if (action.type === 'xxxx'){
    return  action.value;
  } else if (action.type === 'yyyy'){
    return  action.value;
  }else {
    return state;
  }

}

//reducer
function todos(state=[], action){
  ...
}


//action
{
  type: 'xxxx',
  value: 10000
}


//dispatch 修改state的始作俑者
dispatch({
  type: 'xxxx',
  value: 10000
  });


store: redux创建一个全局的状态库, 使用 createStore(合并的reducers), 使用已有的reducers去产生store
reducer: 实际用于修改store状态的函数
action:  决定修改store中那个state，以及将该state设置为什么值
dispatch:  dispatch专门用于分发不同额action，  dispatch(action)

```


### react-redux  
```
react-redux: 基于redux，可以很方便的在react中应用而已
```


### 明天任务
```
 阅读 react-redux官方的案例，去理解 react-redux中相关概念

```


## js严格模式
```
'use strict'
严格模式其实就是一些东西不能用： with  arguments  arguments.callee arguments.caller

es6默认严格
```


## 前端工程化(gulp, webpack)
```
模块化、组件化、规范化、自动化
```


### webpack (一切皆模块)
```
img, css, js, json等多可以当做模块进行导入

webpack核心就是配置文件，决定了webpack如何工程化

使用 create-react-app 创建的工程，只需要使用 npm  run  eject 即可导出webpack配置文件(config  scripts)

```

###  webpack配置文件常用
```
devtool: 'xxx'  //定位提示信息

entry: { app: './xx/index.js'} //入口文件，应用程序的入口文件

output: {
  filename: 指定最终打包生成的js文件
  chunkFilename: 指定代码中需要异步加载的文件打包
  path: 编译生成的实际路径，也就实际的文件要生成到哪里去(只在production中使用， develop中不用写)
  publicPath: 是指定了按照什么样的路径名称来作为项目静态文件夹，和静态文件夹的路径有关(需要和后端保持一致)
}

resolve:  帮助代码实现文件的快速导入(提供最近路径，提供了别名，提供后缀名)

module: {
  rules: [ loader] //loader 加载器：就是为了把需要导入的文件都进行特殊处理，然后让它可以按照js的方式去导入

  常见loader:
  file-loader  加载普通文本文件 json,html
  url-loader   小图片可以转为base64加载
  css-loader   加载css
  sass-loader  加载sass
  babel-loader e6转码为es5  
}


plugins: [], 指定整个项目需要的插件
常用插件：
  HtmlWebpackPlugin：以一个模板为原型创建html文件
  webpack.DefinePlugin: 指定开发环境为dev or prod, 用于条件输出调试信息
  webpack.HotModuleReplacementPlugin: 支持热跟新(局部样式的修改，浏览不用重新刷新,只在开发中应用)
  webpack.optimize.UglifyJsPlugin 对css,js,html进行压缩
  ExtractTextWebpackPlugin: 对css/sass文件进行分离，就分离成单独的文件
  clean-webpack-plugin:  build之前删除一些文件
  webpack.optimize.CommonsChunkPlugin 提取共有的某块，单独编译

```


### link标签的作用
```
rel="stylesheet"
rel="shortcut icon"
rel="dns-prefetch"
rel="search"
rel="manifest"
```


### react-router(前端路由)

```
前端路由：用于spa(单页面应用)，多页面没有必要
后端路由：前端发送给后端的请求
```

```
链接： https://reacttraining.com/react-router/web/guides/philosophy


react-router 三巨头：
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

BrowserRouter:  用于进行历史记录保存的组件
Link:  相当于用户要点击的链接
Route:  对应Link,Route根据自身去显示匹配的路由的内容


<BrowserRouter> //浏览器历史记录(HTML5 history, 或者 hash)

 <ul>
 <li><Link to="指定的路由名称，假设叫 /home" >home</Link></li>
 <li><Link to="指定的路由名称, 假设叫 /about" >about</Link></li>
 <li><Link to="指定的路由名称, 假设叫 /hao123" >hao123</Link></li>
 </ul>

 <!-- path是和Link的to进行匹配的  -->

 //Redirect 重定向
 <Redirect from="/"  to="/home"/>
 <Route exact path="/home" component={要显示的组件} />  exact是精确匹配，必须一模一样
 <Route path="/about" component={要显示的组件} />
 <Route component={其他组件}  />

</BrowserRouter>



Route指定component时，会传递给该组件三个props分别是 {match, history, location}
react-router中 history是基于 第三方的history库，所以API和该库一模一样的

```


### history  HTML5 可以操作历史记录
```
history.pushState()添加历史记录
history.replaceState() 替换当前
```
