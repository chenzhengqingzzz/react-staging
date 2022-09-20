import React, {useState} from "react";
import { Link, Outlet } from "react-router-dom";

export default function Message() {

  const [messages] = useState([
    {id: '001', title: '消息1', content: '锄禾日当午'},
    {id: '002', title: '消息2', content: '汗滴禾下土'},
    {id: '003', title: '消息3', content: '谁知盘中餐'},
    {id: '004', title: '消息4', content: '粒粒皆辛苦'},
  ])

  return (
    <div>
      <ul>
        <li>
          {
            messages.map((messagesObj) => {
              return (
                //路由链接
                <li key={messagesObj.id}>
                  {/* 携带Params参数 */}
                  <Link to={`detail/${messagesObj.id}/${messagesObj.title}/${messagesObj.content}`}>{messagesObj.title}</Link>
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
