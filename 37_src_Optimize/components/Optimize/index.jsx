import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {

  state = {carName: '奔驰c63', stus:['小张', '小李', '小王']}

  changeCar = () => {
    // this.setState({carName: '迈巴赫'})
    const obj = this.state
    obj.carName = '迈巴赫'
    console.log(obj === this.state);
    this.setState(obj)
  }

  addStu = () => {
    // const {stus} = this.state
    // stus.unshift('小刘')
    // this.setState({stus: stus}) //尽量不要让新状态与原来状态发生关系
    const {stus} = this.state
    this.setState({stus: ['小刘', ...stus]})
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(this.props, this.state); //目前的props和state
  //   console.log(nextProps, nextState); //接下来要变化的目标props，目标state
  //   if (this.state.carName === nextState.carName) {
  //     return false
  //   }else{
  //     return true
  //   }
  // }

  render() {
    console.log('Parent---render');
    return (
      <div className='Parent'>
        <h3>我是Parent组件</h3>
        {this.state.stus}&nbsp;
        <span>我的车名字是:{this.state.carName}</span><br/>
        <button onClick={this.changeCar}>点我换车</button>
        <button onClick={this.addStu}>点我添加一个小刘</button>
        <Child carName='奥拓'/>
      </div>
    )
  } 
}


class Child extends PureComponent {

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(this.props, this.state); //目前的props和state
  //   console.log(nextProps, nextState); //接下来要变化的目标props，目标state
  //   if (this.props.carName === nextProps.carName) {
  //     return false
  //   }else{
  //     return true
  //   }
  // }

  render() {
    console.log('Child---render');
    return (
      <div className='Child'>
        <h3>我是Child组件</h3>
        <span>我接到的车是: {this.props.carName}</span>
      </div>
    )
  }
}
