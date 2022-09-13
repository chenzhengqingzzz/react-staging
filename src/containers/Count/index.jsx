//引入Count的UI组件
import CountUI from '../../components/Count'
//引入redux里的store
import store from '../../redux/store'
//引入connect由于连接UI组件与redux
import { connect } from 'react-redux'

//使用connect()()创建一个Count的容器组件
const CountContainer = connect()(CountUI)

export default CountContainer 