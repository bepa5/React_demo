/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-10 09:44:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-10 14:26:21
 * @FilePath: index.jsx
 */
import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
    render() {
        const { user } = this.props
        return (
            <div className='parent'>
                { user.map((use)=>{
                    return(
                        <div key={use.id} style={{width:'150px',height:'150px'}}>
                        <img src={use.avatar_url} alt="" style={{width:'100px',height:'100px'}}/>
                        <blockquote>{use.login}</blockquote>
                    </div>
                    )
                })}
               
            </div>
        )
    }
}
