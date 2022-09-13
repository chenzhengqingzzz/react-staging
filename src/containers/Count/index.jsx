//引入Count的UI组件
import CountUI from '../../components/Count'
//引入connect由于连接UI组件与redux
import { connect } from 'react-redux'

//a函数的返回值作为状态传递给了UI组件
function a() {
    
}

function b() {
    
}

//使用connect()()创建一个Count的容器组件
const CountContainer = connect()(CountUI)

export default CountContainer 