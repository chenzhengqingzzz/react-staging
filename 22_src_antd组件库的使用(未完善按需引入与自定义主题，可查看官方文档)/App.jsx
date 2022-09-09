import React, { Component } from 'react'
import { Button, DatePicker } from 'antd'
import { WechatOutlined, AppleOutlined, LoadingOutlined, HeartTwoTone } from '@ant-design/icons'
import 'antd/dist/antd.min.css'

export default class App extends Component {

  onChange = (date, dateString) => {
    console.log(date, dateString);
  }

  render() {
    return (
      <div>
        App
        <button>点我</button>&nbsp;
        <Button type="primary">按钮1</Button>&nbsp;
        <Button>按钮2</Button>&nbsp;
        <Button type='link'>按钮3</Button>&nbsp;
        <WechatOutlined/>
        <AppleOutlined/> 
        <LoadingOutlined/>
        <HeartTwoTone twoToneColor="#eb2f96"/>
        <DatePicker onChange={this.onChange}/>
      </div>
    )
  }
}
