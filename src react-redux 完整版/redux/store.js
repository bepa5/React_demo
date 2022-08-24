/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-22 10:04:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-24 14:43:15
 * @FilePath: store.js
 */
import {legacy_createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import countReducer from '../redux/reducers/count'
import presonReducer from './reducers/preson'
import {composeWithDevTools} from 'redux-devtools-extension'
const hebing=combineReducers({
    ren:presonReducer,
    count:countReducer})
export default legacy_createStore(hebing,composeWithDevTools(applyMiddleware(thunk)))