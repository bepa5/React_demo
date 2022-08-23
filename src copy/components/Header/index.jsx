/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-07-19 10:08:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-21 09:25:17
 * @FilePath: index.jsx
 */
import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class Header extends Component {
  headleKeyup=(e)=>{
    const nwetodo=e.target.value
    const keyCode =e.keyCode
    if(keyCode!==13)return
    if(nwetodo.trim()==='')return
    const newObj={id:nanoid(),name:nwetodo,done:false}
    this.props.addTods(newObj)
    e.target.value=''
  }
  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.headleKeyup}/>
      </div>
    )
  }
}
