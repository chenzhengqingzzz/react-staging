// import React, { Component } from 'react'
// import './index.css'

// export default class List extends Component {
//   render() {
//     return (
//       <div className="row">
//         <div className="card">
//             <a rel="noreferrer" href="https://github.com/快来和我击剑" target="_blank">
//             <img alt="head_portrait" src="https://syimg.3dmgame.com/uploadimg/upload/image/20201112/20201112175542_72765.gif" style={{width: '100px'}}/>
//             </a>
//             <p className="card-text">快来和我击剑</p>
//         </div>
//         <div className="card">
//             <a rel="noreferrer" href="https://github.com/快来和我击剑" target="_blank">
//             <img alt="head_portrait" src="https://syimg.3dmgame.com/uploadimg/upload/image/20201112/20201112175542_72765.gif" style={{width: '100px'}}/>
//             </a>
//             <p className="card-text">快来和我击剑</p>
//         </div>
//         <div className="card">
//             <a rel="noreferrer" href="https://github.com/快来和我击剑" target="_blank">
//             <img alt="head_portrait" src="https://syimg.3dmgame.com/uploadimg/upload/image/20201112/20201112175542_72765.gif" style={{width: '100px'}}/>
//             </a>
//             <p className="card-text">快来和我击剑</p>
//         </div>
//         <div className="card">
//             <a rel="noreferrer" href="https://github.com/快来和我击剑" target="_blank">
//             <img alt="head_portrait" src="https://syimg.3dmgame.com/uploadimg/upload/image/20201112/20201112175542_72765.gif" style={{width: '100px'}}/>
//             </a>
//             <p className="card-text">快来和我击剑</p>
//         </div>
//         <div className="card">
//             <a rel="noreferrer" href="https://github.com/快来和我击剑" target="_blank">
//             <img alt="head_portrait" src="https://syimg.3dmgame.com/uploadimg/upload/image/20201112/20201112175542_72765.gif" style={{width: '100px'}}/>
//             </a>
//             <p className="card-text">快来和我击剑</p>
//         </div>
//       </div>
//     )
//   }
// }


import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
	render() {
		const {users,isFirst,isLoading,err} = this.props
		return (
			<div className="row">
				{
					isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
					isLoading ? <h2>Loading......</h2> :
					err ? <h2 style={{color:'red'}}>{err}</h2> :
					users.map((userObj)=>{
						return (
							<div key={userObj.id} className="card">
								<a rel="noreferrer" href={userObj.html_url} target="_blank">
									<img alt="head_portrait" src={userObj.avatar_url} style={{width:'100px'}}/>
								</a>
								<p className="card-text">{userObj.login}</p>
							</div>
						)
					})
				}
			</div>
		)
	}
}
