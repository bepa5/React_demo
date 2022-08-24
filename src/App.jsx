/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-16 15:39:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-24 10:16:38
 * @FilePath: App.jsx
 */
import React, { Component } from 'react';
import Count from './containers/Count'
import Preson from './containers/Preson'
import '../node_modules/antd/dist/antd.css'
class App extends Component {

    render() {
        return (
            <div>
                <Count></Count>
                <Preson></Preson>
                main
            </div>
        );
    }
}

export default App;