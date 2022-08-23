/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-17 10:20:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-18 15:43:44
 * @FilePath: index.jsx
 */
import React, { Component } from 'react'
import {Link,Route,Routes} from 'react-router-dom'
import Detail from './Detail'
export default class News extends Component {
  state={
    newsArr:[
      {
        id: '01',
        title: 'news1',
        content: ' react search传参'
    },
    {
      id: '02',
      title: 'news2',
      content: ' react search传参'
  },
  {
    id: '03',
    title: 'news3',
    content: ' react search传参'
},
    ]
  }
  render() {
    const {newsArr}=this.state
    return (
        <ul>
       {
        newsArr.map((obj)=>{
          return(
            <li key={obj.id}>
              {/* <Link to={`/home/news/detail/?id=${obj.id}&title=${obj.title}`}> */}
              <Link to='/home/news/detail' state={{id:obj.id,title:obj.title}}>
              {obj.title}
              </Link>
            </li>
          )
        })
       }
       <Routes>
          <Route path='/detail' element={<Detail></Detail>}>

          </Route>
        </Routes>
    </ul>
    
    )
  }
}
