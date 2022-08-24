/*
 * @Descripttion: React.useEffect React.useState  React.useRefs
 * @Author: guoxiaoqiang
 * @Date: 2022-08-24 15:52:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-24 17:26:27
 * @FilePath: About.jsx
 */
import React from 'react'
import root from '../index'

// export default class About extends Component {
//   render() {
//     return (
//       <div>About</div>
//     )
//   }
// }
export default function About(){
    const [count,setCount]= React.useState(0)
    const [ww,setww]= React.useState('')
    const myref = React.useRef()

    React.useEffect(()=>{
        let timer =setInterval(()=>{
            setCount(count=>count+1)
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[])
    //显示
    function show(){
        const www= myref.current.value
        setww(ww=>www)
    }
    function add(){
       // setCount(count+1) //第一种写法
       setCount(count=>count+1)
    }
    
    function unmount(){
        root.unmount()
    }
    return(
        <div>
            <h1>和为:{count}</h1>
            <input type="text" ref={myref}/>
            <button onClick={add}>+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>显示</button>
            <li>{ww}</li>
        </div>
    )
}
