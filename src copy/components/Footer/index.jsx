/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-07-19 10:07:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-21 11:05:01
 * @FilePath: index.jsx
 */
import React, { Component } from 'react'

export default class Footer extends Component {
  handleChange=(e)=>{
    this.props.selectedAll(e.target.checked)
  }
  clearAll=()=>{
    this.props.cleaeSelectedAll()
  }
  render() {
    const {todos}=this.props
    const all = todos.length
    const complete=todos.reduce((pre,con)=>{
      return pre +(con.done?1:0)
    },0)
    return (
      <div>
        <input type="checkbox" checked={complete===all&&all!==0?true:false} onChange={this.handleChange}/>
        <span> 已完成{complete}/全部{all}</span>
        <button onClick={this.clearAll}>选中删除</button>
      </div>
    )
  }
}
