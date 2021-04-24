export const updateColor = (value, dispatch) => {
    dispatch({
        type: "UPDATE_COLOR",
        color: value
    });
};

export const updateCurrentFrame = (value, dispatch) => {
    dispatch({
        type: "UPDATE_CURRENT_FRAME",
        index: value
    });
};
