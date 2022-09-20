import React from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'

export default function Detail() {
  //此为一个数组，里面的参数不能直接拿，必须首先解构数组
  const [search, setSearch] = useSearchParams()
  //必须调用search身上的get方法才能具体拿到对应的数值
  const id = (search.get('id'));
  const title = (search.get('title'));
  const content = (search.get('content'));

  //当初在Route5的时候拿到search参数是 this.props.location.search
  const x = useLocation()
  console.log('@', x);
  return (
    <ul>
        <li>
          <button onClick={() => {setSearch('id=008&title=哈哈&content=嘻嘻')}}>点我更新一下search参数</button>
        </li>
        <li>消息编号:{id}</li>
        <li>消息标题:{title}</li>
        <li>消息内容:{content}</li>
    </ul>
  )
    }
