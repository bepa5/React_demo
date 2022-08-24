/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-23 15:50:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-23 15:56:21
 * @FilePath: preson.js
 */
import { ADD_PRESON } from '../constant'
const initpreson = [{ id: '001', name: 'ReactReducer', age: '10' }]
export default function presonReducer(preState = initpreson, action) {
    const { type, data } = action
    switch (type) {
        case ADD_PRESON:
            return [data, ...preState]
        default:
            return preState
    }
}