/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-07-19 10:08:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-21 10:21:52
 * @FilePath: index.jsx
 */
import React, { Component } from 'react'

export default class Item extends Component {
  constructor(props){
    super(props)
    this.state={mouse:false}
  }
  handleMouse=(parameter)=>{
     return ()=>{
      this.setState({
        mouse:parameter
      })
     }
  }
  handleDele=(id)=>{
    return ()=>{
      this.props.deleTodo(id)
    }
  }
  handleChange=(id)=>{
    return (e)=>{
      this.props.selected(id,e.target.checked)
    }
  }
  render() {
    const {id,name,done} = this.props
    const {mouse}=this.state
    return (
      <li   style={{backgroundColor:mouse?'#ccc':'#ffffff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <input type="checkbox" checked={done} onChange={this.handleChange(id)}/>
        <span>{name}</span>
        <button style={{display:mouse?'block':'none'}} onClick={this.handleDele(id)}>删除</button>
      </li>
    )
  }
}
