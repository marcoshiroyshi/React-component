import React from 'react'
import './style.css'
import ContainerResult from '../ContainerResult'
import ContainerSummary from '../ContainerSummary'

function Container() {
  return (
    <div className="container">
        <ContainerResult/>
        <ContainerSummary/>
    </div>
  )
}

export default Container