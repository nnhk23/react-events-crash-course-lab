import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let x = event.clientX
    let y = event.clientY
    return drawChromeBoiAtCoords(x, y)
  }

   handleKeyPress = (e) => {
     console.log(e.key)
     let arg
     if (e.key === 'a'){
       arg = '+'
     } else if (e.key === 's'){
       arg = '-'
     }
     resize(arg)
   }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
