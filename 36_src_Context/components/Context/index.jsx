import React, { Component } from 'react'
import './index.css'

//创建一个用于保存用户名的上下文
const MyContext = React.createContext()

export default class A extends Component {

    state = {username: 'tom', age: 15}

    render() {
        return (
            <div className='parent'>
                <h3>我是A组件</h3>
                <h4>我的用户名是:{this.state.username}</h4>
                <MyContext.Provider value={{username: this.state.username, age: this.state.age}}>
                    <B/>
                </MyContext.Provider>
            </div>
    )
  }
}

class B extends Component {
    render(){
        return(
            <div className='child'>
                <h3>我是B组件</h3>
                {/* <h4>我从A组件接收到的用户名:??</h4> */}
                <C/>
                <D/>
            </div>
        )
    }
}

class C extends Component {
    //声明接收Context
    static contextType = MyContext
    render(){
        const {username, age} = this.context
        console.log("C", this.context);
        return(
            <div className='grand'>
                <h3>我是C组件</h3>
                <h4>我从A组件接收到的用户名和年龄:{username},{age}</h4>
            </div>
        )
        
    }
}

function D() {
    return(
        <div className='great-grand'>
        <h3>我是D组件</h3>
        <h4>我从A组件接收到的用户名和年龄:
            
            <MyContext.Consumer>
            {
                (value) => {
                    return (`${value.username},${value.age}`)
                }
            }   
            </MyContext.Consumer>
        </h4>
    </div>
    )
}