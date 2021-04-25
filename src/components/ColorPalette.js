import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { updateColor } from "../redux/actions";

const Palette = styled.div`
    width: 75px;
    margin: 20px;
`;
const ColorBox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 4px;
    border: 1px solid #cdcdcd;
    background-color: ${(props) => props.color};
    outline: none;
    &:hover {
        border: 1px solid transparent;
        cursor: pointer;
        outline: 2px dotted #cdcdcd;
    }
    &.active {
        border: 1px solid transparent;
        box-shadow: 0px 0px 5px 5px #cdcdcd;
    }
`;

function ColorPalette() {
    const { colors, currentColor } = useSelector((state) => state.palette);
    const dispatch = useDispatch();

    return (
        <Palette>
            {colors.map((color) => (
                <ColorBox
                    key={color}
                    color={color}
                    className={color === currentColor ? "active" : null}
                    onClick={() => updateColor(color, dispatch)}
                ></ColorBox>
            ))}
        </Palette>
    );
}

export default ColorPalette;
