/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-26 10:50:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-26 11:13:23
 * @FilePath: List.jsx
 */
import React from 'react'
import {useParams} from 'react-router-dom'
export default function List() {
    const {id,content} =useParams()
  return (
    <div>
       <h1>id:{id}</h1>
        <h2>{content}</h2>
    </div>
  )
}
