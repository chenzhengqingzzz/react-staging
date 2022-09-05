import React, { Component } from 'react'
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
            <MyNavLink to="/news" children="News"/>
          </li>
          <li>
            <MyNavLink to="message" children="Message"/>
          </li>
        </ul>
        {/* 注册路由 */}
        <News/>
        <Message/>
      </div>
    </div>
    )
  }
}
