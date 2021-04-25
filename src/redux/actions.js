export const updateColor = (value, dispatch) =>
    dispatch({
        type: "UPDATE_COLOR",
        color: value
    });

export const updateCurrentFrame = (value, dispatch) =>
    dispatch({
        type: "UPDATE_CURRENT_FRAME",
        index: value
    });

export const updatePixelColor = (index, color, dispatch) =>
    dispatch({
        type: "UPDATE_PIXEL_COLOR",
        index: index,
        currentColor: color
    });

export const addFrame = (dispatch) =>
    dispatch({
        type: "ADD_FRAME"
    });

export const deleteFrame = (dispatch) =>
    dispatch({
        type: "DELETE_FRAME"
    });

export const copyFrame = (dispatch) =>
    dispatch({
        type: "COPY_FRAME"
    });

export const pasteFrame = (dispatch) =>
    dispatch({
        type: "PASTE_FRAME"
    });
