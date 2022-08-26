/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-16 15:39:04
 * @LastEditors: Please set LastEditors
 * @FilePath: App.jsx
 */
import React, { Component,Suspense,lazy } from 'react';
import {NavLink,Routes,Route} from 'react-router-dom'
// import About from './components/About'
// import Home from './components/Home'
import Pure from './components/Pure'
import P from './components/renderP'
import Player from './components/Player'
import RouterF from './components/RouterF'
const Home=lazy(()=>import('./components/Home'))
const About=lazy(()=>import('./components/About') )
class App extends Component {
    render() {
        return (
            <div>
               {/* <NavLink to='/home'>
                    home
               </NavLink>
               <NavLink to='/about'>
                    about
               </NavLink>
               <Suspense fallback={<h1>Loding....</h1>}>
               <Routes>
                    <Route path='/home' element={<Home></Home>}></Route>
                    <Route path='/about' element={<About></About>}></Route>
               </Routes>
               </Suspense>
               <Pure></Pure>
               <br />
                <P></P> */}
                <RouterF></RouterF>
                {/* <Player></Player> */}
            </div>
        );
    }
}

export default App;