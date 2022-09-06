import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
import About from './pages/About' //About是路由组件
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
  render() {
    return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header/>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 原生html中，靠<a>标签跳转不同的页面 */}
            {/* <a className="list-group-item" href="./about.html">About</a>
            <a className="list-group-item active" href="./home.html">Home</a> */}

            {/* 在React中，靠路由连接实现切换组件--编写路由链接 */}
            {/* 点完About去about */}
              {/* <NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink> */}
              {/* <NavLink activeClassName="atguigu" className="list-group-item" to="home">Home</NavLink> */}
              {/* <MyNavLink to="/about">About</MyNavLink> */}
              {/* <MyNavLink to="/home">Home</MyNavLink> */}
              <MyNavLink replace={true} to="/about" children="About"/>
              <MyNavLink replace={true} to="/home" children="Home"/>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {/* 包裹Switch，选中则不会继续往下匹配路由，提高效率，节省资源 */}
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
                {/* Redirect重定向，什么都匹配不上则会跳转到此标签指定的页面 */}
                <Redirect to="/about"/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
