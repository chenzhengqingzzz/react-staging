import React, { Component } from 'react'
//引入store，用于获取redux中所保存的状态
import store from '../../redux/store'
//引入actionCreator，专门用于创建action对象
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

export default class Count extends Component {

    //state可以又自己的状态，只供自己使用不交给redux
    state = {carName: '奔驰c63'}

  //为了避免写重复性代码，可以在入口文件写这个，开始监测
  //具体写法请参见入口文件index.js
  componentDidMount(){
    //监测redux中状态的变化，只要变化，就调用render
    store.subscribe(() => {
      console.log('redux中已经更新状态,画面即将重新渲染');
      //假更新，数据没动，但是render重新渲染，因为react规定只要调用setState方法则会调用一次render方法引起页面重新渲染
      this.setState({})
    })
  }

    //加法
    increment = () => {
        //获取用户输入
        const {value} = this.selectedNumber
        //通知redux加value
        store.dispatch(createIncrementAction(value * 1))
    }

    //减法
    decrement = () => {
        //获取用户输入
        const {value} = this.selectedNumber
       //通知redux减value
       store.dispatch(createDecrementAction(value * 1))
    }

    //奇数再加
    incrementIfOdd = () => {
        //获取用户输入
        const {value} = this.selectedNumber
        //获取redux中的状态
        const count = store.getState()
        if (count % 2 !==0) {
            //通知redux加value
            store.dispatch(createIncrementAction(value * 1))
        }
    }

    //异步加
    incrementAsync = () => {
        //获取用户输入
        const {value} = this.selectedNumber
        //获取redux中的状态
        // setTimeout(() => {
            //通知redux加value
            store.dispatch(createIncrementAsyncAction(value * 1, 500))
        // }, 500);
    }

  render() {
    return (
      <div>
        <h1>当前求和为:{store.getState()}</h1>
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
