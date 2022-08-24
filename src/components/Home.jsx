/*
 * @Descripttion: Fragment 不会解析这个标签 只接受一个标签属性key  React.createContext() Provider,Consumer
 * @Author: guoxiaoqiang
 * @Date: 2022-08-24 15:52:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-24 18:01:53
 * @FilePath: Home.jsx
 */
import React, { Component, Fragment } from 'react'

const MyContext=React.createContext()
const {Provider,Consumer}=MyContext
export default class Home extends Component {
    state={
        name:'tom'
    }
    render() {
        return (
            <Fragment>
               <h1>组件Home</h1>
               <Provider value={this.state.name}>
               <B></B>
               </Provider>
              
            </Fragment>


        )
    }
}
class B extends Component{
    render(){
        return(
            <Fragment>
                <h1>组件B</h1>
                <C></C>
            </Fragment>
        )
    }
}
// class C extends Component{
//     static contextType=MyContext
//     render(){
//         return(
//             <Fragment>
//                 <h1>组件C</h1>
//                 <h2>{this.context}</h2>
//             </Fragment>
//         )
//     }
// }
function C (){
    return(
                    <Fragment>
                        <h1>组件C</h1>
                        <h2>
                            <Consumer>
                                {
                                value=>{
                                    return `名字是：${value}`
                                }
                                }
                            </Consumer>
                        </h2>
                    </Fragment>
                )
}
