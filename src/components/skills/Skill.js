import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { createHashHistory } from "history";

export default function Skill(props) {
  const [scrolling, setScrolling] = useState("paused");
  let History = createHashHistory();
  let loadingInterval;

  useEffect(() => {
    let func = (e) => {
      if (window.pageYOffset > 2100 && window.pageYOffset < 2800) {
        setScrolling("running");
      }
    };
    if (History.location.pathname == "/") {
      window.addEventListener("scroll", (e) => func(e));
    }
    return () => {
      window.removeEventListener("scroll", func);
      clearInterval(loadingInterval);
    };
  }, []);

  let getChangeWidth = (props) => keyframes`
    0% { width:0 }
    100% { width: ${props.value}}
  `;
  let getChangeLeft = (props) => keyframes`
    0% { left:0,visibility:hidden}
    100% { left: ${props.value},visibility:visible}
  `;
  let loading = () => keyframes`{
    0% { width:0 }
    100% { width:100}
   }`;

  let Div = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(93, 9, 121, 1);
    width: ${props.value};
    height: 100%;
    border-radius: var(--radius);
    animation: ${(props) => getChangeWidth(props)} 3s ease;
    animation-play-state: ${scrolling};
  `;
  let LoadingDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(93, 9, 121, 1);
    width: ${props.value};
    height: 100%;
    border-radius: var(--radius);
    animation: ${() => loading()} 3s linear infinite;
    animation-play-state: ${scrolling};
  `;

  let P = styled.p`
    position: absolute;
    top: -2rem;
    left: ${props.value};
    transform: translateX(-50%);
    animation: ${(props) => getChangeLeft(props)} 10s ease;
    animation-play-state: ${scrolling};
  `;

  return (
    <div className="skill">
      <div className="skill-container">
        {props.type === "loading" ? (
          <>
            <LoadingDiv {...props}></LoadingDiv>
            <P {...props}></P>
          </>
        ) : (
          <>
            <Div {...props}></Div>
            <P {...props}></P>
          </>
        )}
      </div>
    </div>
  );
}
