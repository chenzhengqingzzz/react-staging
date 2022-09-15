/*
    该文件专门用于暴露一个store对象，整个引用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
//引入recux-devtools-extension，用于在浏览器使用redux开发者工具
import { composeWithDevTools } from 'redux-devtools-extension'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
import allReducer from './reducers'



//暴露store
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))