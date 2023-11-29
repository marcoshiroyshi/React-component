import styled from "styled-components";

export const StyledHabilities = styled.div`
  width: 280px;
  height:  60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.color};
  margin-top: 0.7rem;
  border-radius: 15px; 
  
  p {
    padding: 20px;
    color: #303B59;
    font-weight: 500;
  }

  span {
    color: #9899a8;
  }
`

export const StyledHabilitiesBox = styled.div`
    display: flex;
    padding: 10px;
    
    h3 {
        color: ${(props) => props.colorText};
        padding: 15px;
        font-weight: 400;
    }
`
