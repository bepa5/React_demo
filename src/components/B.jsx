/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-26 10:10:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-26 10:49:05
 * @FilePath: B.jsx
 */
import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'
export default function B() {
    return (
        <div>
            <NavLink to='c'>C</NavLink>
            <NavLink to='d'>D</NavLink>
            <Outlet></Outlet>
        </div>
    )
}
