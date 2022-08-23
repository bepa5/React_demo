/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-22 15:59:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-22 17:18:33
 * @FilePath: index.jsx
 */
import {connect} from 'react-redux'
import CountUI from '../../components/Count'
import {add,reduction,asynchronous} from '../../redux/count_action'

/**
 * @description: connect第一个括号的参数 是一个函数状态  另一个书函数方法
 * @return 
 */
function a(state){
    return  {count:state}
}
function b(dispatch){
    return {
        jia:(data)=>{
           dispatch(add(data))
        },
        jian:(data)=>{
            dispatch(reduction(data))
         },
         asyn:(data,time)=>{
            dispatch(asynchronous(data,time))
         },
    }
    
}
export default connect(a,b)(CountUI)