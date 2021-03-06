import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addFrame, deleteFrame, copyFrame, pasteFrame } from "../redux/actions";

const ControllerWrapper = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: center;
    grid-area: controllers;
`;

const StyledButton = styled.button`
    margin: 5px;
    width: 80px;
    background: #ffc107;
    border: none;
    color: #fff;
    padding: 5px 10px;
    cursor: pointer;
    font-weight: 800;
    border-radius: 5px;
    &:hover {
        background: rgba(255, 193, 7, 0.2);
    }
`;

function Controller() {
    const dispatch = useDispatch();
    const { frames } = useSelector((state) => state.frames);
    return (
        <ControllerWrapper>
            <StyledButton onClick={() => dispatch(addFrame())}>Add</StyledButton>
            <StyledButton
                onClick={() => {
                    if (frames.length > 1) {
                        dispatch(deleteFrame());
                    }
                }}
            >
                Delete
            </StyledButton>
            <StyledButton onClick={() => dispatch(copyFrame())}>Copy</StyledButton>
            <StyledButton onClick={() => dispatch(pasteFrame())}>Paste</StyledButton>
        </ControllerWrapper>
    );
}

export default Controller;
