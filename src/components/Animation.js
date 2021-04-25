import React, { useState, useEffect } from "react";
import Frame from "./Frame";
import { useSelector } from "react-redux";
import styled from "styled-components";

const FrameWrapper = styled.div`
    display: grid;
    grid-template-columns: ${(props) => `repeat(8, ${props.size}px)`};
    grid-template-rows: ${(props) => `repeat(8, ${props.size}px)`};
    width: 130px;
    outline: none;
    height: 130px;
    border: 4px solid rgba(255, 255, 255, 0.2);
    padding: 5px;
    margin: auto;
    background: rgba(0, 0, 0, 0.4);
    box-shadow: ${(props) =>
        props.isTargetFrame ? "0px 0px 5px 5px #cdcdcd" : null};
    grid-area: animation;
`;

function Animation() {
    const { frames } = useSelector((state) => state.frames);
    const [showFrame, setShowFrame] = useState(0);
    let animation;
    useEffect(() => {
        clearTimeout(animation);
        const timer = setTimeout(() => {
            let newFrame = showFrame + 1;
            if (newFrame > frames.length - 1) {
                newFrame = 0;
            }
            setShowFrame(newFrame);
        }, 100);
        return () => clearTimeout(timer);
    });
    return (
        <FrameWrapper size={16}>
            <Frame size={16} data={frames[showFrame]}></Frame>
        </FrameWrapper>
    );
}

export default Animation;
