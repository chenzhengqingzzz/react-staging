//原先正常的已经注释
// import React, { Component } from 'react'
// import axios from 'axios'

// export default class Search extends Component {

// 	search = ()=>{
// 		//获取用户的输入(连续解构赋值+重命名)
// 		const {keyWordElement:{value:keyWord}} = this
// 		//发送请求前通知App更新状态
// 		this.props.updateAppState({isFirst:false,isLoading:true})
// 		//发送网络请求
// 		axios.get(`/api1/search/users?q=${keyWord}`).then(
// 			response => {
// 				//请求成功后通知App更新状态
// 				this.props.updateAppState({isLoading:false,users:response.data.items})
// 			},
// 			error => {
// 				//请求失败后通知App更新状态
// 				this.props.updateAppState({isLoading:false,err:error.message})
// 			}
// 		)
// 	}

// 	render() {
// 		return (
// 			<section className="jumbotron">
// 				<h3 className="jumbotron-heading">搜索github用户</h3>
// 				<div>
// 					<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
// 					<button onClick={this.search}>搜索</button>
// 				</div>
// 			</section>
// 		)
// 	}
// }

import React, {Component} from "react";
import axios from "axios";

export default class Search extends Component{

	search = () => {
		//获取用户键盘输入（连续解构赋值+重命名）
		const {keyWordElement: {value: keyWord}} = this;
		//发送网络请求
		axios.get(`/api1/search/users?q=${keyWord}`).then(
			response => {
				console.log('成功了', response.data);
				this.props.saveUsers(response.data.items)
				
			},
			error => {console.log('失败了', error);}
		)
	}
	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
					<button onClick={this.search}>搜索</button>
				</div>
			</section>
		)
	}
}