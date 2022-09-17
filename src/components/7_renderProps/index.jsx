import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {
  render() {
    return (
      <div className='Parent'>
        <h3>我是Parent组件</h3>
        <A>
            <B/>
        </A>
      </div>    
    )
  }
}

class A extends Component {
    render() {
        console.log(this.props);
      return (
        <div className='a'>
          <h3>我是A组件</h3>
            {this.props.children}
          {/* <B/> */}
        </div>
      )
    }
}

class B extends Component {
    render() {
      return (
        <div className='b'>
          <h3>我是B组件</h3>
        </div>
      )
    }
  }
