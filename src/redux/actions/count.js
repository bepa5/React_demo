/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-22 14:39:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-23 15:00:05
 * @FilePath: count.js
 */
import {INCREMENT,DECREMENT} from '../constant'

export const add=(data)=>({type:INCREMENT,data})
export const reduction=(data)=>({type:DECREMENT,data})


//异步action 返回是一个函数
export const asynchronous=(data,time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(add(data))
        },time)
        
    }
}