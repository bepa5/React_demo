/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-22 10:05:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-22 15:29:11
 * @FilePath: count_reducer.js
 */
import { INCREMENT, DECREMENT } from './constant'
export default function countReducer(preStore, action) {
    const { type, data } = action
    switch (type) {
        case INCREMENT:
            return preStore + data
        case DECREMENT:
            return preStore - data
        default:
            return 0
    }
}