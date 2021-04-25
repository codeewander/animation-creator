export const updateColor = (value) => ({
    type: "UPDATE_COLOR",
    color: value
});

export const updateCurrentFrame = (value) => ({
    type: "UPDATE_CURRENT_FRAME",
    index: value
});

export const updatePixelColor = (index, color) => ({
    type: "UPDATE_PIXEL_COLOR",
    index: index,
    currentColor: color
});

export const addFrame = () => ({
    type: "ADD_FRAME"
});

export const deleteFrame = () => ({
    type: "DELETE_FRAME"
});

export const copyFrame = () => ({
    type: "COPY_FRAME"
});

export const pasteFrame = () => ({
    type: "PASTE_FRAME"
});
