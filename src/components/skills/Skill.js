import React,{useEffect,useState} from 'react'
import styled,{css, keyframes } from "styled-components";

export default function Skill(props) {
  const [scrolling,setScrolling]=useState("paused")
  useEffect(() => {
    window.addEventListener("scroll",(e)=>{
      if(window.pageYOffset>2500 && window.pageYOffset<2900){
        setScrolling("running");
      }
    })
    return(()=>{window.removeEventListener("scroll")})
  }, [])
  let getChangeWidth = (props) => keyframes`
    0% { width:0 }
    100% { width: ${props.value}}
  `;
  let getChangeLeft = (props) => keyframes`
    0% { left:0,visibility:hidden}
    100% { left: ${props.value},visibility:visible}
  `;

  let Div = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(93, 9, 121, 1);
    width:${props.value};
    height: 100%;
    border-radius: var(--radius);
    animation: ${props => getChangeWidth(props)} 3s ease;
    animation-play-state:${scrolling};
    `

  let P = styled.p`
    position: absolute;
    top: -2rem;
    left: ${props.value};
    transform: translateX(-50%);
    animation: ${props => getChangeLeft(props)} 3s ease;
    animation-play-state:${scrolling};
    `
  
  return (
  <div className="skill">
    <p>{props.lang}</p>
    <div className="skill-container">
      <Div {...props} ></Div>
      <P {...props}>{props.value}</P>
    </div>
  </div>
  )
}


