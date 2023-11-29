import React from 'react'
import './style.css'
import { StyledHabilities, StyledHabilitiesBox } from '../StyledHabilites/Habilities.element'
import { Button } from '../Button/Button'


function ContainerSummary() {
  return (
    <div className="container-summary">
      <h2>Summary</h2>
      <div className="box">      
        <StyledHabilities color={"#fff6f6"}>
          <StyledHabilitiesBox colorText={"#FF5555"}>
            <img className="img-habilities" src={"/assets/icon-reaction.svg"} alt="" ></img>
            <h3>Reaction</h3>
          </StyledHabilitiesBox>
          <p>80<span> / 100</span></p>
        </StyledHabilities>
        <StyledHabilities color={"#fffbf4"}>
          <StyledHabilitiesBox colorText={"#FFB21E"}>
            <img className="img-habilities" src={"/assets/icon-memory.svg"} alt="" ></img>
            <h3>Memory</h3>
          </StyledHabilitiesBox>
          <p>92<span> / 100</span></p>
        </StyledHabilities>
        <StyledHabilities color={"#f2fcf9"}>
          <StyledHabilitiesBox colorText={"#00BB8F"}>
            <img className="img-habilities" src={"/assets/icon-verbal.svg"} alt="" ></img>
            <h3>Verbal</h3>
          </StyledHabilitiesBox>
          <p>61<span> / 100</span></p>
        </StyledHabilities>
        <StyledHabilities color={"#f3f4fd"}>
          <StyledHabilitiesBox colorText={"#1125D6"}>
            <img className="img-habilities" src={"/assets/icon-visual.svg"} alt="" ></img>
            <h3>Visual</h3>
          </StyledHabilitiesBox>
          <p>73<span> / 100</span></p>
        </StyledHabilities>
        <Button>Continue</Button>
      </div>
    </div>
  )
}

export default ContainerSummary