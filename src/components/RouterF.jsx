/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-26 09:46:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-26 10:41:19
 * @FilePath: RouterF.jsx
 */
import React from 'react'
import {NavLink,useRoutes,} from 'react-router-dom'
import router from '../router/index'
export default function RouterF() {
     const element= useRoutes(router)
  return (
    <div>
        <NavLink to='/a'>
                A 
        </NavLink>
        <NavLink to='/b'>
                B 
        </NavLink>
        <br /> 
        {element}
    </div>
  )
}
