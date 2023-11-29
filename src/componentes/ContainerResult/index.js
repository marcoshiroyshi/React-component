import React from 'react'
import './style.css'

function ContainerResult() {
  return (
    <div className="container-result">
      <h1>Your Result</h1>
        <div className="container-circle">
          <h2>76</h2>
          <p>of 100</p>
        </div>
    <h3>Great</h3>
    <p className="result-p">Your performance exceed 65% of the people conducting the test here!</p>
    </div>
  )
}

export default ContainerResult

