import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Cell = styled.div`
    box-sizing: border-box;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    background: ${(props) => props.color};
`;

function Frame({ size, data }) {
    return (
        <>
            {data.map((cell) => (
                <Cell key={`${cell.x}-${cell.y}`} size={size} color={cell.color} />
            ))}
        </>
    );
}

Frame.propTypes = {
    size: PropTypes.number,
    data: PropTypes.array,
    isTargetFrame: PropTypes.bool,
    updateTargetFrame: PropTypes.func
};

export default Frame;
