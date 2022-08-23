/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-07-19 09:50:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-10 09:53:15
 * @FilePath: App.jsx
 */
import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import Practice from './components/Practice'
import Game from './components/Game'
import Search from './components/Search';
import './App.css'
class App extends Component {
    constructor(props){
        super(props)
        this.state={todos:[
            {id:1,name:'好',done:true},
            {id:2,name:'好',done:true},
            {id:3,name:'学',done:true},
            {id:4,name:'习',done:false}
        ]}
    }
    //添加
    addTods=(todoObj)=>{
          const newarr=[todoObj,...this.state.todos]
          this.setState({todos:newarr})
    }
    //删除
    deleTodo=(id)=>{
     const newObj= this.state.todos.filter((con)=>{
            return con.id!==id
        })
        this.setState({todos:newObj})
    }
    //选中
    selected=(id,done)=>{
        const newObj=  this.state.todos.map((todo)=>{
            if(todo.id===id)return {...todo,done}
            else return todo
        })
        this.setState({todos:newObj})

    }
    //全部选中
    selectedAll=(done)=>{
        const newObj=  this.state.todos.map((todo)=>{
            return {...todo,done}
        })
        this.setState({todos:newObj})
    }
    //清除完成
    cleaeSelectedAll=()=>{
        const newObj=  this.state.todos.filter((todo)=>{
            return !todo.done
        })
        this.setState({todos:newObj})
    }
    render() {
        const {todos}=this.state
        return (
            <div>
              <Header addTods={this.addTods}></Header>
              <List todos={todos} deleTodo={this.deleTodo} selected={this.selected} ></List>
              <Footer todos={todos} selectedAll={this.selectedAll} cleaeSelectedAll={this.cleaeSelectedAll}></Footer>
              <Practice></Practice>
              <Game></Game>
              <Search></Search>
            </div>
        );
    }
}

export default App;