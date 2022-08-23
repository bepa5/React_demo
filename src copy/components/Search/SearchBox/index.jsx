/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-10 09:47:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-10 14:25:31
 * @FilePath: index.jsx
 */
import React, { Component } from 'react'
import axios from 'axios'
export default class SearchBox extends Component {
    handleClick(){
        const {keyDown:{value}}=this
        axios.get(`https://api.github.com/search/users?q=${value}`)
        .then(
            (response)=>{
                this.props.updateState(response.data.items)
            }
        )
        .catch(function (error) {
            console.log(error);
          })
    }
  render() {
    return (
      <div>
        <input ref={c=>this.keyDown=c} type="text" />
        <button onClick={()=>{this.handleClick()}}>搜索</button>
      </div>
    )
  }
}
