//创建“外壳组件”App
import React from "react";
const {Component} = React

class App extends Component{
    render(){
        return (
            <div>
                hello,react!
            </div>
        )
    }
}

//默认暴露App组件
export default App