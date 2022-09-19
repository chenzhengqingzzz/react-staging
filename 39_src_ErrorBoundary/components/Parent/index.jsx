import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

  state = {
    hasError:'' //用于标识子组件是否产生错误
  }

  //如果这个组件的子组件报错时，则会调用这个钩子，并携带错误信息
  static getDerivedStateFromError(error){
    console.log(error);
    return {hasError: error}
  }

  //如果组件渲染的过程中，子组件出现了错误则会调用此钩子，但是此钩子不常用
  componentDidCatch(){
    console.log("统计错误，反馈给服务器，用于通知编码人员进行bug的解决");
  }

  render() {
    return (
      <div>
        <h2>我是Parent组件</h2>
        {this.state.hasError ? <h2>当前网络不稳定，请稍后再试</h2> : <Child/>}
      </div>
    )
  }
}
