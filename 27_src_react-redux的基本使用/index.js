//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//
//引入App
import App from './App'

// import store from './redux/store'

ReactDOM.render(
        <App/>,
    document.getElementById('root')
)

// //为了避免写重复性代码，可以在入口文件写这个，开始监测
// //监测redux中状态的变化，只要变化，就调用render
// // 两个地方都可以写
// store.subscribe(() => {
//     console.log('redux中已经更新状态,画面即将重新渲染');
//     ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
//     )
// })