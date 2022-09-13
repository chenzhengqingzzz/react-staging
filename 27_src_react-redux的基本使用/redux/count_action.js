/*
    该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from "./constant"
import store from "./store"

//同步action是指action的值为Object类型的一般对象
export const createIncrementAction = (data) => {
    return {
        type: INCREMENT,
        data: data,
    }
}

export const createDecrementAction = (data) => {
    return {
        type: DECREMENT,
        data: data,
    }
}

//异步action是指action的值为函数，异步action中一般都是调用同步action，异步action不是必须要用的
export const createIncrementAsyncAction = (data, time) => {
    //返回值为函数，则其为异步action
    return () => {
        setTimeout(() => {
            store.dispatch(createIncrementAction(data))
        }, time);
    }
}