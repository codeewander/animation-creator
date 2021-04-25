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

export const updatePixelColor = (index, color, dispatch) => {
    dispatch({
        type: "UPDATE_PIXEL_COLOR",
        index: index,
        currentColor: color
    });
};
