import React from 'react'
import ReactDOM from 'react-dom'

// //类式组件
// class Demo extends React.Component {

//     state = {count: 0}

//     myRef = React.createRef()

//     add = () => {
//         this.setState((state) => ({count: state.count + 1}))
//     }

//     componentDidMount(){
//         this.timer = setInterval(() => {
//             this.setState((state) => ({count: this.state.count + 1}))
//         }, 1000);
//     }

//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }

//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }

//     show = () => {
//         alert(this.myRef.current.value)
//     }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.myRef}/>
//         <h2>当前求和为{this.state.count}</h2>
//         <button onClick={this.add}>点我+1</button>
//         <button onClick={this.unmount}>卸载所有组件</button>
//         <button onClick={this.show}>点击提示数据</button>
//       </div>
//     )
//   }
// }



//函数式组件
function Demo(){

    //React.useState的调用能返回结果 
    //这个返回值是一个数组，里面有两个元素，一个是我们想要的状态，一个是用于更新状态的方法
    const [count, setCount] = React.useState(0)
    // console.log(count, setCount);

    const myRef = React.useRef()

    //一般来说，这个钩子平时使用就相当于两个生命周期函数：componentDidMount、componentDidUpdate
    //useEffect第二个参数传数组就是要指定监测的对象，只要组件已更新就调用一次监测的对象，数组里面什么都不写就代表谁都不监测，不写数组就代表谁都监测
    //谁都不检测就相当于生命周期中的componentDidMount
    //useEffect这个钩子返回的函数的返回函数(52后半行~55行)就相当于componentWillUnmount(56行~58行)
    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount((count) => {return count + 1})
        }, 1000)
        return () => { //此返回值里的函数就相当于componentWillUnmount
            clearInterval(timer)
        }
    }, []) //有空数组，53行~54行就相当于componentDidMount


    //加的回调
    function add(){
        // setCount(count + 1) //第一种写法
        setCount((count) => {return count + 1}) //第二种写法
    }

    //卸载组件的回调
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    //提示输入的回调
    function show() {
        alert(myRef.current.value)
    }

    return(
        <div>
            <input type="text" ref={myRef}/>
            <h2>当前求和为:{count}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点击提示数据</button>
        </div>
    )
}
export default Demo