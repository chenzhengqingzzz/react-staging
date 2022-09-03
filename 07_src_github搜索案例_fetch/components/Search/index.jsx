// 原先正常的已经注释
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
// import axios from "axios";
import PubSub from "pubsub-js";

export default class Search extends Component{

	//内置fetch发送，关注分离
	search = async() => {

		console.log('Search组件发布消息了');
		
		//获取用户键盘输入（连续解构赋值+重命名）
		const {keyWordElement: {value: keyWord}} = this;
		console.log('您搜索的是:', keyWord);

		//发送请求前通知List更新状态
		PubSub.publish('atguigu', {isFirst: false, isLoading: true})

		//发送网络请求 //使用axios发送
		// axios.get(`/api1/search/users2?q=${keyWord}`).then(
		// 	response => {
		// 		//请求成功后通知List更新状态
		// 		PubSub.publish('atguigu', {isLoading: false, users: response.data.items})
		// 		console.log('成功了', response.data);	
		// 	},
		// 	error => {
		// 		//请求失败后通知List更新状态
		// 		//在这里最好不要存error这个错误对象，因为obj不能作为react的子类
		// 		PubSub.publish({isLoading: false, err: error.message})
		// 		// console.log('失败了', error);
		// 	}
		// )

		//发送网络请求---使用fetch发送(未优化版本)
		// fetch(`/api1/search/users2?q=${keyWord}`).then(
		// 	response => {
		// 		console.log('联系服务器成功了', response.json());
		// 		return response.json()
		// 	},
		// 	error => {
		// 		console.log('联系服务器失败了', error);
		// 		return new Promise(() => {})
		// 	}
		// ).then(
		// 	response => {
		// 		console.log('获取数据成功了', response);
		// 	},
		// 	error => {
		// 		console.log('获取数据失败了', response);
		// 	}
		// )

		//发送网络请求---使用fetch发送(优化)
		try {
			const response = await fetch(`/api1/search/users2?q=${keyWord}`)
			const data = await response.json()
			console.log('获取数据成功了', data);
			PubSub.publish('atguigu', {isLoading: false, users: data.items})
		} catch (error) {
			console.log('请求出错', error);
			PubSub.publish('atguigu', {isLoading: false, err: error.message})
		}
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