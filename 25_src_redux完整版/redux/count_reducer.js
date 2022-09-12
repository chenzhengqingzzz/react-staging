/* 
    1.该文件是由于创建一个味Count组件服务的reducer，reducer的本质是一个函数
    2.reducer函数会接到两个参数，分别为：(之前的状态),(动作对象)
*/
import { INCREMENT, DECREMENT } from './constant'

//初始化状态，如果不定义，则初始化的preState传入的是undefined
const initState = 0
export default function countReducer(preState = initState, action){
    console.log("之前的状态：",preState,"action：", action);
    //从action对象中获取：type、data
    const {type, data} = action
    //根据type决定如何加工数据
    switch (type) {
        case INCREMENT: //如果是加
            return preState + data
        case DECREMENT: //如果是减
            return preState - data
    
        default:
            return preState
    }
}