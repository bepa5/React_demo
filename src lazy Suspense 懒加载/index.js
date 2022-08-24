/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-07-19 09:51:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-24 16:05:11
 * @FilePath: index.js
 */
import React from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// const container = document.getElementById('root');
// const root = createRoot(container)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App></App>
            </BrowserRouter>
        </React.StrictMode>

)
