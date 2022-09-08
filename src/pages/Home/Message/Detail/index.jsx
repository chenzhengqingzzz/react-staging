import React, { Component } from 'react'
import qs from 'qs'

//测试qs的用法，将字符串加工成对象
let obj = {name: 'tom', age: 18}
console.log(qs.stringify(obj));
let str = 'carName=奔驰&price=199'
console.log(qs.parse(str));

//urlencoding编码: key=value&key=value
const DetailData = [
    {id: '01', content: '你好，中国'},
    {id: '02', content: '你好，尚硅谷'},
    {id: '03', content: '你好，未来的自己'},
]

export default class Detail extends Component {
  render() {
   console.log(this.props);
   //接收params参数
  //  const {id, title} = this.props.match.params

  // 接收search参数
  const {search} = this.props.location
  //因为用parse方法解析出来的对象id前面多了一个问号，则使用slice方法忽略第一个字符
  const {id, title}= qs.parse(search.slice(1))

  //接收state参数（此state非组件三大属性中的state）
  //由于props里的属性是存在history里面的，清空浏览器缓存则会导致属性为undefined，所以后面写了个空对象来避免报错，下同
  // const {id, title} = this.props.location.state || {}


   const findResult = DetailData.find((detailObj) => {
    return detailObj.id === id
   }) || {}
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}
