//入口文件

//引入React核心库
import React from "react"
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入App组件
import App from './App.js'

//渲染App组件到页面
ReactDOM.render(<App/> , document.getElementById('root'))















// //此{Component}不是结构赋值的方式，只需知道如果这项写那就是多种暴露
// import React, {Component} from './moudle.js'
// console.log(React);
// //结构赋值的方式，这是从React对象上取出Component
// // const {Component} = React
// console.log(new Component())