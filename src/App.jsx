/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-16 15:39:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-23 16:07:58
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