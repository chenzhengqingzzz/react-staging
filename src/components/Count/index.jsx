import React, { Component } from 'react'

export default class Count extends Component {

    //state可以又自己的状态，只供自己使用不交给redux
    state = {carName: '奔驰c63'}

    //加法
    increment = () => {
        //获取用户输入
        const {value} = this.selectedNumber
    }

    //减法
    decrement = () => {
        //获取用户输入
        const {value} = this.selectedNumber
    }

    //奇数再加
    incrementIfOdd = () => {
        //获取用户输入
        const {value} = this.selectedNumber
    }

    //异步加
    incrementAsync = () => {
        //获取用户输入
        const {value} = this.selectedNumber 
    }

  render() {
    return (
      <div>
        <h1>当前求和为:？</h1>
        <select ref={c => this.selectedNumber = c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}
