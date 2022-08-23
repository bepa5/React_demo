/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-22 10:04:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-22 15:33:52
 * @FilePath: store.js
 */
import {legacy_createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import countReducer from './count_reducer'
export default legacy_createStore(countReducer,applyMiddleware(thunk))