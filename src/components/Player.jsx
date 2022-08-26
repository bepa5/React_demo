/*
 * @Descripttion: 
 * @Author: guoxiaoqiang
 * @Date: 2022-08-26 14:36:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-26 15:13:53
 * @FilePath: Player.jsx
 */
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
export default class Player extends Component {
    state={
        url:'https://vdn6.vzuu.com/HD/ed44efc2-34c6-11ec-b2d4-e2bf0ec94073-v4_t1111-vky0q28CZj.mp4?pkey=AAUitalGNdlgPqTpRJwu3E1Ibw6vLg6m6gJT2hI18-kwqBWAhCguBxZYrrn12yYqAr-C_HWwxY-2EHnFYVTVtVHC&c=avc.0.0&f=mp4&pu=da4bec50&bu=http-da4bec50&expiration=1661582341&v=ks6',
        playing:true,
        loop:false,
        controls:true,
        light:true,
        volume:0.2,
        playbackRate:1,
        width:'100px',
        height:'100px',

    }
  render() {
    const {url,playing,loop,controls,light,volume,playbackRate}=this.state
    return (
      <div>
        <ReactPlayer style={{'backgroundColor':'black'}}
        url={url}
        playing={playing}
        loop={loop}
        controls={controls}
        light={light}
        volume={volume}
        playbackRate={playbackRate}
        muted={false}
        >
        </ReactPlayer>
      </div>
    )
  }
}
