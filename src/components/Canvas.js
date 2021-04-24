import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 32px);
    grid-template-rows: repeat(8, 32px);
    margin: auto;
    box-shadow: 0 0 6px 3px #666;
`;
const Pixel = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${(props) => props.color};
    display: inline-block;
    border: 1px solid #cdcdcd;
    cursor: pointer;
    &:hover {
        border: 1px solid #fff;
    }
    /* transform: ${(props) => `translateX(${props.x * 16}px)`}; */
`;

function Canvas() {
    const { canvasArray } = useSelector((state) => state.frames);

    return (
        <Container>
            {canvasArray.map((pixel) => (
                <Pixel
                    key={`${pixel.x}-${pixel.y}`}
                    color={pixel.color}
                    x={pixel.x}
                    y={pixel.y}
                />
            ))}
        </Container>
    );
}

export default Canvas;
