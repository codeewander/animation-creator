import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Frame from "./Frame";
import { updateCurrentFrame } from "../redux/actions";

const Container = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    overflow-x: scroll;
    margin: 0 auto;
    justify-content: center;
    grid-area: frames;
    max-width: 700px;
`;

const FrameWrapper = styled.div`
    display: grid;
    grid-template-columns: ${(props) => `repeat(8, ${props.size}px)`};
    grid-template-rows: ${(props) => `repeat(8, ${props.size}px)`};
    cursor: pointer;
    margin: auto;
    border: 1px solid #cdcdcd;
    margin: 5px;
    box-shadow: ${(props) =>
        props.isTargetFrame ? "0px 0px 3px 3px #cdcdcd" : null};
    background: ${(props) => (props.isTargetFrame ? "#cdcdcd" : null)};
    /* &:hover {
        background: rgba(255, 255, 255, 0.2);
    } */
`;

function Frames() {
    const { frames, currentFrame } = useSelector((state) => state.frames);
    const dispatch = useDispatch();
    return (
        <Container>
            {frames.map((frame, index) => {
                const isTargetFrame = currentFrame === index;
                return (
                    <FrameWrapper
                        key={index}
                        onClick={() => updateCurrentFrame(index, dispatch)}
                        isTargetFrame={isTargetFrame}
                        size={6}
                    >
                        <Frame size={6} data={frame} />
                    </FrameWrapper>
                );
            })}
        </Container>
    );
}

export default Frames;
