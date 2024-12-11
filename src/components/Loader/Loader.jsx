import React from 'react'
import './Loader.css'
const Loader = () => {
  return (
    <div className="main">
    <div class="screen gradient-border">
      <span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="base">
        <span></span>
        <div class="face"></div>
      </div>
    </div>
    <div class="longfazers">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  )
}

export default Loader