import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import Message from './Message'
import News from './News'

export default class Home extends Component {
  render() {
    return (
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink replace={true} to="/home/news" children="News"/>
          </li>
          <li>
            <MyNavLink replace={true} to="/home/message" children="Message"/>
          </li>
        </ul>
        {/* 注册路由 */}
        <Switch>
          <Route path="/home/news" component={News}/>
          <Route path="/home/message" component={Message}/>
          <Redirect to="/home/news"/>
        </Switch>
      </div>
    </div>
    )
  }
}
