import React, { Component } from 'react'

export default class Count extends Component {

    state = {count: 0}

    //加法
    increment = () => {
        //获取用户输入
        const {value} = this.selectedNumber
        //获取原来的状态
        const {count} = this.state
        //更新状态
        this.setState({count: count + value * 1})
    }

    //减法
    decrement = () => {
        //获取用户输入
        const {value} = this.selectedNumber
        //获取原来的状态
        const {count} = this.state
        //更新状态
        this.setState({count: count - value * 1})
    }

    //奇数再加
    incrementIfOdd = () => {
        //获取用户输入
        const {value} = this.selectedNumber
        //获取原来的状态
        const {count} = this.state
        if (count % 2 !==0) {
            //更新状态
            this.setState({count: count + value * 1})
        }
    }

    //异步加
    incrementAsync = () => {
        //获取用户输入
        const {value} = this.selectedNumber
        //获取原来的状态
        const {count} = this.state
        setTimeout(() => {
            //更新状态
            this.setState({count: count + value * 1})
        }, 500);
    }

  render() {
    return (
      <div>
        <h1>当前求和为:{this.state.count}</h1>
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
