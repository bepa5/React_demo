/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-23 15:41:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-23 16:15:55
 * @FilePath: index.jsx
 */
import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {addPreson} from '../../redux/actions/person'

 class Preson extends Component {
    handleClick=()=>{
        const age =this.ageNode.value
        const name =this.nameNode.value
        const obj = {id:nanoid(),age:age,name:name}
        this.props.jia(obj)
        this.ageNode.value=''
        this.nameNode.value=''
    }
  render() {
    return (
      <div>
        <h1>Preson------上面组件和为{this.props.he}</h1>
        <input ref={(c)=>{this.nameNode=c}} type="text" placeholder='输入名字'/>
        <input ref={(c)=>{this.ageNode=c}} type="text" placeholder='输入年龄'/>
        <button onClick={this.handleClick}>添加</button>
        <ul>
            {this.props.hehe.map((obj)=>{
                return  <li key={obj.id}>年龄:{obj.age}---名字:{obj.name}</li> 
            })}
        </ul>
      </div>
    )
  }
}
export default connect(
    state=>({hehe:state.ren,he:state.count}),
    {jia:addPreson}
)(Preson)
