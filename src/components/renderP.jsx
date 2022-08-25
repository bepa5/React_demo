/*
 * @Descripttion:  <Component render={(name)=><C name1={name}/>}>   {this.props.render(name)}
 * @Author: guoxiaoqiang
 * @Date: 2022-08-25 16:05:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-25 16:27:18
 * @FilePath: renderP.jsx
 */
import React, { Component } from 'react'

export default class A extends Component {
    render() {
        return (
            <div style={{ width: '100px', background: 'grey' }}>
                <h1>A组件</h1>
                <B render={(name)=><C name1={name}/>}>
                </B>
            </div>
        )
    }
}
class B extends Component {
    state={name:'tom'}

    render() {
        const {name}=this.state
        return (
            <div style={{ width: '100px', background: 'yellow' }}>
                <h1>组件B </h1>
                {this.props.render(name)}
            </div>
        )
    }
}
class C extends Component {
    render() {
        return (
            <div style={{ width: '100px', background: 'purple' }}>
                <h1>
                    组件C
            {this.props.name1}
                </h1>
            </div>
        )
    }
}

