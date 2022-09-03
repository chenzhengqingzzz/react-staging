//原先正常的已经注释
// import React, { Component } from 'react'
// import './index.css'

// export default class List extends Component {
// 	render() {
// 		const {users,isFirst,isLoading,err} = this.props
// 		return (
// 			<div className="row">
// 				{
// 					isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
// 					isLoading ? <h2>Loading......</h2> :
// 					err ? <h2 style={{color:'red'}}>{err}</h2> :
// 					users.map((userObj)=>{
// 						return (
// 							<div key={userObj.id} className="card">
// 								<a rel="noreferrer" href={userObj.html_url} target="_blank">
// 									<img alt="head_portrait" src={userObj.avatar_url} style={{width:'100px'}}/>
// 								</a>
// 								<p className="card-text">{userObj.login}</p>
// 							</div>
// 						)
// 					})
// 				}
// 			</div>
// 		)
// 	}
// }

import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
	state = {
		users: [], //初始化状态，user初始值为数组
		isFirst: true, //是否为第一次打开页面，以便于展示欢迎信息
		isLoading: false, //标识是否处于加载中，发送请求前则会将其变为true
		err: '' //存储请求相关的错误信息
		}

	componentDidMount(){
		this.token = PubSub.subscribe('atguigu', (msg, stateObj) => {
			console.log('List组件收到数据了', stateObj);
			this.setState(stateObj);
		})
	}
	componentWillUnmount(){
		PubSub.unsubscribe(this.token);
	}

  render() {
	const {users, isFirst, isLoading, err} = this.state
	return (
		<div className="row">
			{
				isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
				isLoading ? <h2>Loading......</h2> :
				err ? <h2 style={{color: 'red'}}>{err}</h2> : 
				users.map((userObj) => {
					return(
						<div key={userObj.id} className="card">
							{/* 用户信息url */}
							<a rel="noreferrer" href={userObj.html_url} target="_blank">
								{/* 用户头像url */}
							<img alt="head_portrait" src={userObj.avatar_url} style={{width: '100px'}}/>
							</a>
							{/* 用户名 */}
							<p className="card-text">{userObj.login}</p>
					  	</div>
					)
				})
			}
	  	</div>
	)
  }
}
