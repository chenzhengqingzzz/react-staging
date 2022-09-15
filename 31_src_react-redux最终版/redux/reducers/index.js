/* 
    该文件用于汇总所有的reducer，作为一个总的reducer
*/

//引入为Count组件服务的reducer
import countReducer from './count'
//引入为Person组件服务的reducer
import personReducer from './person'
//引入combinereducers，用于汇总读个reducer
import { combineReducers } from 'redux'

//redux应该将状态整合一个对象再保存以方便多个组件的状态管理
//※ combineReducers调用的时候传入的对象就是redux帮我们保存的总状态对象
//汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
    count: countReducer,
    persons: personReducer
})

export default allReducer