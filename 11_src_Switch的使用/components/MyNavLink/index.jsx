import React, { children, Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    console.log(this.props);
    // const {children} = this.props
    return (
        // <NavLink activeClassName="atguigu" className="list-group-item" {...this.props}>{children}</NavLink>
        // 标签体内容是一个特殊的标签属性，可以直接用props传递，其对应事例为children
        <NavLink activeClassName="atguigu" className="list-group-item" {...this.props}/>

    )
  }
}

