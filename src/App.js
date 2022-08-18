//创建“外壳组件”App
import React, {Component} from "react";
// 不指定文件就默认制定index.jsx
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
// 从react身上获取Component
// const {Component} = React

//创建并暴露App组件
export default class App extends Component{
    render(){
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}