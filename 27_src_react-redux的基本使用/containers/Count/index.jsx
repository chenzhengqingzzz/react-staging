//引入Count的UI组件
import CountUI from '../../components/Count'
//引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'
//引入connect由于连接UI组件与redux
import { connect } from 'react-redux'

//此函数的返回值只能是一个对象，其返回值作为状态传递给了UI组件
//此函数用于传递状态(state)
//返回的对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组件props的value
//在调用此函数时，react-redux已经帮我们传递了保存在store中的状态(state)，所以不需要使用store.getState()
function mapStateToProps(state) {
    return {count: state}
    //上面这么写是下面这个意思，但是我们没机会写下面的代码：
    // <CountUI count={900}/>
}

//此函数的返回值只能是一个对象，其返回值作为操作状态的方法传递给了UI组件
//此函数用于传递操作状态所用的方法(dispatch)
//此函数返回的对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组件props的value
//在调用此函数时，react-redux已经帮我们传递了保存在store中的操作状态的方法(dispatch())，所以不需要使用store.dispatch()
function mapDispatchToProps(dispatch) {
    return {

        jia: (number) => {
            dispatch(createIncrementAction(number))
        },
        
        jian: (number) => {
            dispatch(createDecrementAction(number))
        },

        yibujia: (number, time) => {
            dispatch(createIncrementAsyncAction(number, time))
        }
    }
}

//使用connect()()创建一个Count的容器组件
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI)

export default CountContainer