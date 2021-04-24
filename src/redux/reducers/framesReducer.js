import birdFrames from "../../examples/bird8x8";

const initialState = {
    frames: birdFrames,
    canvasArray: birdFrames[0],
    currentFrame: 0
};

export default function framesReducer(state = initialState, action) {
    const cloneFrames = state.frames;
    switch (action.type) {
        case "UPDATE_CURRENT_FRAME":
            return {
                ...state,
                currentFrame: action.index,
                canvasArray: cloneFrames[action.index]
            };
        default:
            return state;
    }
}
