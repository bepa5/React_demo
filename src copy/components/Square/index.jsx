/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-09 10:33:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-09 16:49:19
 * @FilePath: index.jsx
 */
import React, { Component } from 'react'

export default class Square extends Component {
  render() {
    return (
      <button className='square' onClick={()=>{this.props.onClick()}}>
        {this.props.value}
      </button> 
    )
  }
}
