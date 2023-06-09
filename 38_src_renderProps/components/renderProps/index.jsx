import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {
  render() {
    return (
      <div className='Parent'>
        <h3>我是Parent组件</h3>
        <A render={(name) => <B name={name}/>}/>
      </div>    
    )
  }
}

class A extends Component {

  state = {name: 'tom'}

    render() {
        console.log(this.props);
        const {name} = this.state
      return (
        <div className='a'>
          <h3>我是A组件</h3>
          {/* 一般用于不确定AB组件的父子关系，类似于Vue的插槽 */}
            {this.props.render(name)}
        </div>
      )
    }
}

class B extends Component {
    render() {
      return (
        <div className='b'>
          <h3>我是B组件,{this.props.name}</h3>
        </div>
      )
    }
  }
