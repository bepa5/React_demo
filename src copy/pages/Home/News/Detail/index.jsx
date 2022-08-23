/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-17 16:46:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-18 15:50:05
 * @FilePath: index.jsx
 */
import React from 'react'
import {useSearchParams,useLocation} from 'react-router-dom'
export default function Detail () {
  const [searchParams,] = useSearchParams()
//  const id= searchParams.get("id");//1
//   const title= searchParams.get("title");//10

   const location =useLocation()
   console.log(location,searchParams)
  const {state:{id,title}}= location
    return (
      <div>
        <li>ID{id}</li>
        <li>TITLE{title}</li>
        <li>CONTENT</li>
      </div>
    )
  }



