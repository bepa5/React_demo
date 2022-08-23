/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-16 15:39:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-17 16:53:04
 * @FilePath: App.jsx
 */
/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-07-19 09:50:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-10 09:53:15
 * @FilePath: App.jsx
 */
import React, { Component } from 'react';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import './App.css'
class App extends Component {

    render() {
        return (
            <div>
                <NavLink to='/home'>
                    Home
                </NavLink>
                <br />
                <NavLink to='/about'>about</NavLink>
                <hr />
                <Routes>
                    <Route path='*' element={<Navigate  to='/home'></Navigate>}></Route>
                    <Route path='/home/*' element={<Home></Home>}></Route>
                    <Route path='/about/*' element={<About></About>}></Route>
                </Routes>

            </div>
        );
    }
}

export default App;