/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-10 09:44:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-10 14:25:23
 * @FilePath: index.jsx
 */
import React, { Component } from 'react'
import SearchBox from './SearchBox'
import List from './LIst'
export default class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            user:[]
        }
    }
    updateState=(obj)=>{
        this.setState({
            user:obj
        })
    }
  render() {
    return (
      <div>
        <SearchBox updateState={this.updateState}/>
        <List user={this.state.user}/>
      </div>
    )
  }
}
