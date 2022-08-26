/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-26 09:52:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-26 11:03:19
 * @FilePath: index.js
 */
import {Navigate} from 'react-router-dom'
import A from '../components/A'
import B from '../components/B'
import C from '../components/C'
import D from '../components/D'
import List from '../components/List'
const router = [
    {
        path:'/a',
        element:<A></A>,
    },
    {
        path:'/b',
        element:<B></B>,
        children:[
            {
            path:'c',
            element:<C></C>,
        },
        {
            path:'d',
            element:<D></D>,
            children:[
                {
                    path:'list/:id/:content',
                    element:<List></List>,
                }
            ]
        }
    ]
    },
    {
        path:'/',
        element:<Navigate to='/a'></Navigate>,
    }
    

]
export default router