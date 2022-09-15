// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { createIncrementAction } from '../../redux/count_action'

// class Count extends Component {

//     add = () => {
//         //通知redux加一
//         this.props.jiafa(1)
//     }

//   render() {
//     return (
//       <div>
//         <h2>当前求和为:{this.props.he}</h2>
//         <button onClick={this.add}>点我加1</button>
//       </div>
//     )
//   }
// }

// export default connect(
//     //映射state
//     //默认返回对象
//     state => ({he: state}),

//     //映射操作state的方法
//     {jiafa: createIncrementAction}
// )(Count)


//以上是一步到位写到优化后的代码demo，便于理解
//----------------------------------------------------------

import React, { Component } from 'react'
//引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'
//引入connect由于连接UI组件与redux
import { connect } from 'react-redux'

//定义UI组件
class Count extends Component {

    //state可以又自己的状态，只供自己使用不交给redux
    state = {carName: '奔驰c63'}

    //加法
    increment = () => {
        //获取用户输入
        const {value} = this.selectedNumber
        this.props.jia(value * 1)
    }

    //减法
    decrement = () => {
        //获取用户输入
        const {value} = this.selectedNumber
        this.props.jian(value * 1)
    }

    //奇数再加
    incrementIfOdd = () => {
        //获取用户输入
        const {value} = this.selectedNumber
        if (this.props.count %2 !== 0) {
          this.props.yibujia(value * 1)
        }
    }

    //异步加
    incrementAsync = () => {
        //获取用户输入
        const {value} = this.selectedNumber
        this.props.yibujia(value * 1, 500)
    }

  render() {
    console.log('UI组件接收到的props-->', this.props);
    return (
      <div>
        <h2>我是Count组件</h2>
        <h4>当前求和为:{this.props.count}</h4>
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

//映射状态
const mapStateToProps = (state) => {
    return {count: state}
}

//映射操作状态的方法
const mapDispatchToProps = (dispatch) => {
    return {

        jia: (number) => {
            dispatch(createIncrementAction(number))
        },
        
        jian: (number) => {
            dispatch(createDecrementAction(number))
        },

        yibujia: (number, time) => {
            dispatch(createIncrementAsyncAction(number, time))
        }
    }
}
/*
    mapDispatchToProps这个函数可这样简写(写成对象):
    jia: number => dispatch(createIncrementAction(number)),
    jian: number => dispatch(createDecrementAction(number)),
    yibujia: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
*/

//使用connect()()创建一个Count的容器组件
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(Count)

export default CountContainer


