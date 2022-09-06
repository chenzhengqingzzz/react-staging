import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

    state = {
        messageArr: [
            {id: '01', title: '消息1'},
            {id: '02', title: '消息2'},
            {id: '03', title: '消息3'},
        ]
    }

    pushShow = (id, title) => {
        this.props.history.push(`/home/message/detail/${id}/${title}`)
    }

    replaceShow = (id, title) => {
        //编写一段代码，让其实现跳转到Detail组件，且为replace跳转
        this.props.history.replace(`/home/message/detail/${id}/${title}`)
    }

  render() {
    const {messageArr} = this.state
    return (
        <div>
            <ul>
                {
                    messageArr.map((msgObj) => {
                        return (
                            <li key={msgObj.id}>
                                {/* 向路由组件传递params参数 */}
                                <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;
                                &nbsp;<button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>push查看</button>
                                &nbsp;<button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>replace查看</button>

                                {/* 向路由组件传递search参数 */}
                                {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                                {/* 向路由组件传递state参数 */}
                                {/* <Link to={{pathname:'/home/message/detail', state:{id: msgObj.id, title: msgObj.title}}}>{msgObj.title}</Link> */}
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            <Switch>
                {/* 声明接收params参数 */}
                <Route path="/home/message/detail/:id/:title" component={Detail}/>

                {/* search参数无需声明接收，正常注册路由即可 */}
                {/* <Route path="/home/message/detail" component={Detail}/> */}

                {/* state参数无需声明接收，正常注册路由即可 */}
                {/* <Route path="/home/message/detail" component={Detail}/> */}
            </Switch>
        </div>
    )
  }
}
