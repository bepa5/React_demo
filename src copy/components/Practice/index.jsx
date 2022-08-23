/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-01 20:52:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-01 21:01:40
 * @FilePath: index.jsx
 */
import React, {useState} from "react";
export default function Example(){
    const [count,setCount] = useState(0)
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{ setCount(count + 1)}}>Click me</button>
        </div>
    )

}
