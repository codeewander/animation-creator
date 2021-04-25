import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { updatePixelColor } from "../redux/actions";
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 32px);
    grid-template-rows: repeat(8, 32px);
    margin: auto;
    grid-area: canvas;
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
`;

function Canvas() {
    const { canvasArray } = useSelector((state) => state.frames);
    const { currentColor } = useSelector((state) => state.palette);
    const dispatch = useDispatch();
    return (
        <Container>
            {canvasArray.map((pixel, index) => (
                <Pixel
                    key={`${pixel.x}-${pixel.y}`}
                    color={pixel.color}
                    x={pixel.x}
                    y={pixel.y}
                    onClick={() => {
                        dispatch(updatePixelColor(index, currentColor));
                    }}
                />
            ))}
        </Container>
    );
}

export default Canvas;
