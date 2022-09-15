/*
    该文件专门用于暴露一个store对象，整个引用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
//引入recux-devtools-extension，用于在浏览器使用redux开发者工具
import { composeWithDevTools } from 'redux-devtools-extension'
//引入为Count组件服务的reducer
import countReducer from './reducers/count'
//引入为Person组件服务的reducer
import personReducer from './reducers/person'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

//redux应该将状态整合一个对象再保存以方便多个组件的状态管理
//※ combineReducers调用的时候传入的对象就是redux帮我们保存的总状态对象
//汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
    he: countReducer,
    rens: personReducer
})

//暴露store
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))