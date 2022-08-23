/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-17 10:19:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-18 14:54:33
 * @FilePath: index.jsx
 */
import React, { Component } from 'react'
import { NavLink, Routes, Route,Navigate } from 'react-router-dom'
import Message from './Message'
import News from './News'
export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>home内容</h3>
                <NavLink to='/home/news'>news</NavLink>   &nbwp
                <NavLink to='/home/message'>message</NavLink>
                <hr />
                <Routes>
                    <Route path='message/*' element={<Message></Message>}></Route>
                    <Route path='news/*' element={<News></News>}></Route>
                    <Route path='*' element={<Navigate to='news'></Navigate>}></Route>  
                </Routes>
            </div>

        )
    }
}
