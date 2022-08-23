/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-22 15:59:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-23 14:38:32
 * @FilePath: index.jsx
 */
import {connect} from 'react-redux'
import CountUI from '../../components/Count'
import {add,reduction,asynchronous} from '../../redux/count_action'
import React, { Component } from 'react'
class Count extends Component {

    increment = () => {
        const { value } = this.www
        this.props.jia(value*1)
    }

    decrement = () => {
        const { value } = this.www
        this.props.jian(value*1)
    }
    incrementIfOdd = () => {
        const { value } = this.www
        if(this.props.count%2 !==0){
            this.props.jia(value*1)
        }
        
    }
    incrementAsync = () => {
        const { value } = this.www
        this.props.asyn(value*1,500)
    }
    render() {
        return (
            <div>
                <h1>和为{this.props.count}</h1>
                <select ref={c => { this.www = c }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>和为奇数再加</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>异步在加</button>&nbsp;&nbsp;&nbsp;
            </div>
        )
    }
}
/**
 * @description: connect第一个括号的参数 是一个函数状态  另一个书函数方法
 * @return 
 */
// function a(state){
//     return  {count:state}
// }
// function b(dispatch){
//     return {
//         jia:(data)=>{
//            dispatch(add(data))
//         },
//         jian:(data)=>{
//             dispatch(reduction(data))
//          },
//          asyn:(data,time)=>{
//             dispatch(asynchronous(data,time))
//          },
//     }
    
// }
export default connect(state=>({count:state}),
                       {jia:add,
                       jian:reduction,
                       asyn:asynchronous})(Count)
