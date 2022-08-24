/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-07-19 09:51:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-22 17:50:52
 * @FilePath: index.js
 */
import React from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store';
import { Provider } from 'react-redux'
import App from './App'

// const container = document.getElementById('root');
// const root = createRoot(container)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <App></App>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
)
