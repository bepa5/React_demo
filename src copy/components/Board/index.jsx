/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-03 09:14:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-09 16:36:24
 * @FilePath: index.jsx
 */
import React, { Component } from 'react'
import Square from '../Square';
export default class Board extends Component {
  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() =>  this.props.onClick(i) } />;
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

