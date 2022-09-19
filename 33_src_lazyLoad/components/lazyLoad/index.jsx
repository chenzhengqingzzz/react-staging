import React, { Component, lazy, Suspense } from 'react'
import {NavLink, Route} from 'react-router-dom'
import Loading from '../../../src/components/2_lazyLoad/Loading'

// import Home from './Home'
// import About from './About'

//引入需要懒加载的组件
const Home = lazy(() => import('../../../src/components/2_lazyLoad/Home'))
const About = lazy(() => import('../../../src/components/2_lazyLoad/About'))


export default class Demo extends Component {
  render() {
    return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
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
              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              <Suspense fallback={<Loading/>}>
              {/* 注册路由 */}
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
