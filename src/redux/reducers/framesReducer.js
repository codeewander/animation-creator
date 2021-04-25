import birdFrames from "../../examples/bird8x8";

const initialState = {
    frames: birdFrames,
    canvasArray: birdFrames[0],
    currentFrame: 0
};

export default function framesReducer(state = initialState, action) {
    const { currentFrame } = state;
    const cloneFrames = state.frames;
    const cloneCanvasArray = state.canvasArray;
    switch (action.type) {
        case "UPDATE_CURRENT_FRAME":
            return {
                ...state,
                currentFrame: action.index,
                canvasArray: cloneFrames[action.index]
            };
        case "UPDATE_PIXEL_COLOR":
            if (cloneCanvasArray[action.index].color !== action.currentColor) {
                cloneCanvasArray[action.index].color = action.currentColor;
            } else {
                cloneCanvasArray[action.index].color = "transparent";
            }
            cloneFrames[currentFrame] = cloneCanvasArray;
            return {
                ...state,
                canvasArray: cloneCanvasArray,
                frames: cloneFrames
            };
        default:
            return state;
    }
}
