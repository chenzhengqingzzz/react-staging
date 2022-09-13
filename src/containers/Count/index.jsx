//引入Count的UI组件
import CountUI from '../../components/Count'
//引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'
//引入connect由于连接UI组件与redux
import { connect } from 'react-redux'

//映射状态
const mapStateToProps = (state) => {
    return {count: state}
}

//映射操作状态的方法
const mapDispatchToProps = (dispatch) => {
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
/*
    mapDispatchToProps这个函数可这样简写(写成对象):
    jia: number => dispatch(createIncrementAction(number)),
    jian: number => dispatch(createDecrementAction(number)),
    yibujia: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
*/

//使用connect()()创建一个Count的容器组件
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI)

export default CountContainer