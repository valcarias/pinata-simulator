import styled from 'styled-components/macro';

const HEAD_WIDTH_PX = 50
const HEAD_HEIGHT_PX = 30
const GRADIENT_BACKGROUND = `
 background-image: linear-gradient(
    to right top,
    #e45a95,
    #ce69b3,
    #af78c8,
    #8d86d2,
    #6c90d2,
    #748ed3,
    #7d8cd3,
    #868ad3,
    #ba77c3,
    #e2629b,
    #f05b65,
    #e06b25
  )`

export const PinataContainerStyles = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  min-height:100vh;
  .MuiButtonBase-root{
    text-transform:none;
    color: white;
    background: cornflowerblue !important;
  }
  .drinkIndicator{
    margin-bottom:2em;
  }
  .row{
    height: ${HEAD_HEIGHT_PX}px;
    display: flex;
    * {
      border: 1px solid red;
      ${GRADIENT_BACKGROUND};
    }

  }
  .head{
    min-width: ${HEAD_WIDTH_PX}px;
    position: relative;
    &:before{
      content: '';
      z-index: -1;
      position: absolute;
      left:-${HEAD_WIDTH_PX*0.4 * 0.5}px;
      top:${HEAD_WIDTH_PX*0.05}px;
      width: ${HEAD_WIDTH_PX*0.4}px;
      height: ${HEAD_WIDTH_PX*0.4}px;
      ${GRADIENT_BACKGROUND};
      transform:rotate(45deg);
    }
  }
  .tail{
    min-width: ${HEAD_WIDTH_PX/3}px;
  }
  .leg{
    min-width: ${HEAD_WIDTH_PX*2/3}px;
  }
  .head{
  margin-left:-${HEAD_WIDTH_PX/3}px;
  }
  .body{
    min-width:${HEAD_WIDTH_PX*3}px;
  }

  .row3{
    width: ${HEAD_WIDTH_PX*3}px;
    position: relative;
    .leg{
      position: absolute;
      &:nth-child(1), &:nth-child(2){
        left:0;
        border: 2px solid limegreen;
      }
      &:nth-child(3), &:nth-child(4){
        right:0;
        border: 2px solid limegreen;
      }
    }
  }
`
