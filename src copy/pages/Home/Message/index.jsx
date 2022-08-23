/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-17 10:21:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-18 14:10:41
 * @FilePath: index.jsx
 */
import React, { Component } from 'react'
import Deail from './Deail'
import { Link, Route, Routes } from 'react-router-dom'
export default class Message extends Component {
    state = {
        message: [{
            id: '01',
            title: 'message1',
            content: ' react params传参'
        }, {
            id: '02',
            title: 'message2',
            content: ' react seach传参'
        }, {
            id: '03',
            title: 'message3',
            content: ' react params传参'
        }]
    }
    render() {
        const { message } = this.state
        return (
            <div>
                <ul>
                    {
                        message.map((obj) => {
                            return (
                                <li key={obj.id}>
                                    <Link to={`deail/${obj.id}/${obj.title}`}> {obj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Routes>
                    <Route path='deail/:id/:title' element={<Deail></Deail>}></Route>
                </Routes>
            </div>

        )
    }
}
