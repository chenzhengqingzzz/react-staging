import React, {useState} from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Message() {

  const [messages] = useState([
    {id: '001', title: '消息1', content: '锄禾日当午'},
    {id: '002', title: '消息2', content: '汗滴禾下土'},
    {id: '003', title: '消息3', content: '谁知盘中餐'},
    {id: '004', title: '消息4', content: '粒粒皆辛苦'},
  ])

  //此钩子具有类似this.props.history的功能
  const navigate = useNavigate()

  function showDetail(messagesObj){
    //他可以传两个参数，一个是跳转路径，一个是配置对象
    navigate('detail', {
      replace: false,
      state: {
        id: messagesObj.id,
        title: messagesObj.title,
        content: messagesObj.content
      }
    })
  }

  return (
    <div>
      <ul>
        <li>
          {
            messages.map((messagesObj) => {
              return (
                //路由链接
                <li key={messagesObj.id}>
                  {/* 携带state参数 */}
                  <Link 
                  to='detail' 
                  state={{
                    id: messagesObj.id,
                    title: messagesObj.title,
                    content: messagesObj.content
                  }}>{messagesObj.title}</Link>&nbsp;
                  {/* 传参记得写成回调形式 */}
                  <button onClick={() => {showDetail(messagesObj)}}>查看详情</button>
                </li>
              )
            })
          }
        </li>
      </ul>
      {/* 指定路由组件的展示位置 */}
      <Outlet/>
    </div>
  );
}
