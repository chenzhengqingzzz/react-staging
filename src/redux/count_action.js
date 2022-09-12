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

//异步action是指action的值为函数
export const createIncrementAsyncAction = (data, time) => {
    //返回值为函数，则其为异步action
    return () => {
        setTimeout(() => {
            store.dispatch(createIncrementAction(data))
        }, time);
    }
}