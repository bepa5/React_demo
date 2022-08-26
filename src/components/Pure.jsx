/*
 * @Descripttion:  PureComponent  作用:父级组件更新变量，子级组件不会重新渲染，防止父级组件调用setState(之前的变量跟更新的变量一样),一直更新render
 * @Author: guoxiaoqiang
 * @Date: 2022-08-25 15:03:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-25 16:04:38
 * @FilePath: Pure.jsx
 */
import React, { PureComponent } from 'react'

export default class Pure extends PureComponent {
    state={time: '22'}
    changeTime=()=>{
        this.setState({time: '11'})
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     return !(nextState.time===this.state.time)
    // }
  render() {
    console.log('pure')
    const {time} =this.state
    return (
      <div style={{width:'500px',background:'red'}}>
        Pure <br />
        {time} <br />
        <button onClick={this.changeTime}>时间</button>
        <A time={'haha'}></A>
      </div>
    )
  }
}

class A extends PureComponent {
    // shouldComponentUpdate(nextProps,nextState){
    //     return !(nextProps.time===this.props.time)
    // }
    render(){
        console.log('A')
        return (
            <div style={{width:'100px',background:'blue'}}>
                A
                <h1>{this.props.time}</h1>
                <B></B>

            </div>
        )
    }
}

class B extends PureComponent {
    render(){
        return (
            <div  style={{width:'100px',background:'yellow'}}>
                B
            </div>
        )
    }
}