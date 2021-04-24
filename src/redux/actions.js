export const updateColor = (value, dispatch) => {
    dispatch({
        type: "UPDATE_COLOR",
        color: value
    });
};
