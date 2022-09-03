//原先正常的已经注释
// import React, { Component } from 'react'
// import Search from './components/Search'
// import List from './components/List'

// export default class App extends Component {

// 	state = { //初始化状态
// 		users:[], //users初始值为数组
// 		isFirst:true, //是否为第一次打开页面
// 		isLoading:false,//标识是否处于加载中
// 		err:'',//存储请求相关的错误信息
// 	} 

// 	//更新App的state
// 	updateAppState = (stateObj)=>{
// 		this.setState(stateObj)
// 	}

// 	render() {
// 		return (
// 			<div className="container">
// 				<Search updateAppState={this.updateAppState}/>
// 				<List {...this.state}/>
// 			</div>
// 		)
// 	}
// }

import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
	state = {
		users: [], //初始化状态，user初始值为数组
		isFirst: true, //是否为第一次打开页面，以便于展示欢迎信息
		isLoading: false, //标识是否处于加载中，发送请求前则会将其变为true
		err: '' //存储请求相关的错误信息
	}

	//更新App的State
	updateAppState = (stateObj) => {
		this.setState(stateObj)
	}

	render(){
		return (
			<div className="container">
				<Search updateAppState = {this.updateAppState}/>
				<List {...this.state}/>
			</div>
		)
	}
}

