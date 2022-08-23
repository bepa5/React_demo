/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-07-19 10:08:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-03 18:26:44
 * @FilePath: index.jsx
 */
import React, { Component } from 'react'
import Item from '../Item'
export default class List extends Component {
  render() {
    const {todos,deleTodo,selected} =this.props
    return (
      <ul>
        {
            todos.map((todo)=>{
                return   <Item key={todo.id} {...todo} deleTodo={deleTodo} selected={selected}></Item>
            })
        }
      
      </ul>
    )
  }
}
