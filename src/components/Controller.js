import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addFrame, deleteFrame, copyFrame, pasteFrame } from "../redux/actions";
const StyledButton = styled.button`
    margin: 5px;
    width: 80px;
    background: none;
    border: 1px solid #cdcdcd;
    color: #fff;
    padding: 5px 10px;
    cursor: pointer;
    font-weight: 800;
    border-radius: 5px;
`;

function Controller() {
    const dispatch = useDispatch();
    return (
        <div>
            <StyledButton onClick={() => addFrame(dispatch)}>Add</StyledButton>
            <StyledButton onClick={() => deleteFrame(dispatch)}>Delete</StyledButton>
            <StyledButton onClick={() => copyFrame(dispatch)}>Copy</StyledButton>
            <StyledButton onClick={() => pasteFrame(dispatch)}>Paste</StyledButton>
        </div>
    );
}

export default Controller;
