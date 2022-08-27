import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

  //对接受的props进行类型、必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  //键盘事件的回调
  handleKeyUp = (event) => {
    //解构赋值获取keyCode,target
    const {keyCode, target} = event
    //判断是否是回车按键
    if(keyCode !== 13){
      return
    }else if(target.value.trim() === ''){
      alert('不能输入为空！')
      return
    }else{
      //准备好一个todo对象
      const todoObj = {id: nanoid(), name: target.value, done: false}
      //将todoObj传递给App
      this.props.addTodo(todoObj)
      //清空输入
      target.value = ''
    }
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
