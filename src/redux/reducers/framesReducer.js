import birdFrames from "../../examples/bird8x8";

const initialState = {
    frames: birdFrames,
    canvasArray: birdFrames[0],
    currentFrame: 0,
    copyCanvasArray: null
};

export default function framesReducer(state = initialState, action) {
    const { currentFrame, copyCanvasArray } = state;
    let cloneFrames = state.frames;
    const cloneCanvasArray = state.canvasArray;
    const emptyCanvas = JSON.parse(JSON.stringify(cloneCanvasArray)).map((pixel) => {
        return { ...pixel, color: "transparent" };
    });
    let targetFrame;

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
        case "ADD_FRAME":
            cloneFrames.splice(currentFrame + 1, 0, emptyCanvas);
            return {
                ...state,
                currentFrame: currentFrame + 1,
                canvasArray: emptyCanvas,
                frames: cloneFrames
            };
        case "DELETE_FRAME":
            cloneFrames.splice(currentFrame, 1);
            targetFrame = currentFrame > 0 ? currentFrame - 1 : 0;
            return {
                ...state,
                currentFrame: targetFrame,
                canvasArray: cloneFrames[targetFrame],
                frames: cloneFrames
            };
        case "COPY_FRAME":
            return {
                ...state,
                copyCanvasArray: cloneCanvasArray
            };
        case "PASTE_FRAME":
            if (copyCanvasArray) {
                cloneFrames[currentFrame] = copyCanvasArray;
                return {
                    ...state,
                    canvasArray: copyCanvasArray,
                    frames: cloneFrames
                };
            } else {
                return {
                    ...state
                };
            }

        default:
            return state;
    }
}
