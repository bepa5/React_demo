/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-17 16:46:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-18 14:37:10
 * @FilePath: index.jsx
 */
import React from 'react'
import {useParams} from 'react-router-dom'

export default function Deail () {
   const params=useParams()
   console.log(params)
    return (
      <ul>
        <li>ID:{params.id}</li>
        <li>TITLE:{params.title}</li>
        <li>CONTENT:</li>
      </ul>
    )
  }

