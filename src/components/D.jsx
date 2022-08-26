/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-26 10:47:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-26 11:09:58
 * @FilePath: D.jsx
 */
import React,{useState} from 'react'
import {Outlet,Link} from 'react-router-dom'
export default function D() {
    const [mess] =useState([
        {
            id:'001',
            title:'1111',
            content:'学习useRouters',
        },
        {
            id:'002',
            title:'2222',
            content:'学习useState',
        },
        {
            id:'003',
            title:'33333',
            content:'学习Navigate',
        },
    ])
  return (
    <div>
        <ul>
        {
        mess.map(
            messobj=>{
            return(
                <li key={messobj.id}>
                <Link  to={`list/${messobj.id}/${messobj.content}`}>
                    {messobj.title}
                </Link>
                </li>
            )
        })
        }
            <Outlet></Outlet>
        </ul>
    </div>
  )
}
