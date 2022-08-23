/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-19 14:47:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-22 15:32:17
 * @FilePath: index.jsx
 */
import React, { Component } from 'react'
import store from '../../redux/store'
import {add,reduction,asynchronous} from '../../redux/count_action'
export default class Count extends Component {
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({})
        })
    }


    // handleChange = (value) => {
    //     console.log(value)
    //     const {count}=this.state
    //     this.setState({
    //         count:count+value
    //     })
    // }
    increment = () => {
        const { value } = this.www
        store.dispatch(add(value*1))
    }

    decrement = () => {
        const { value } = this.www
        store.dispatch(reduction(value*1))
    }
    incrementIfOdd = () => {
        const { value } = this.www
        const count = store.getState()
        if(count %2 !==0){
            store.dispatch(add(value*1))
        }
        
    }
    incrementAsync = () => {
        const { value } = this.www
        store.dispatch(asynchronous(value*1,500))
    }
    render() {
        return (
            <div>
                <h1>和为{store.getState()}</h1>
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

