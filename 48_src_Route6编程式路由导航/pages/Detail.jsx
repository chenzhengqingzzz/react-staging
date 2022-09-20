import React from 'react'
import { useLocation } from 'react-router-dom'


export default function Detail() {
  //读取useLocation中的state属性能读取里面的数值
  const {id, title, content} = useLocation().state
  return (
    <ul>
        <li>消息编号:{id}</li>
        <li>消息标题:{title}</li>
        <li>消息内容:{content}</li>
    </ul>
  )
    }
