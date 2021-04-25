import * as actions from "../redux/actions";

describe("actions", () => {
    test("updateColor", () => {
        const color = "transparent";
        const action = actions.updateColor(color);
        expect(action).toEqual({
            color: color,
            type: "UPDATE_COLOR"
        });
    });

    test("updateCurrentFrame", () => {
        const index = 3;
        const action = actions.updateCurrentFrame(index);
        expect(action).toEqual({
            index: index,
            type: "UPDATE_CURRENT_FRAME"
        });
    });

    test("updatePixelColor", () => {
        const index = 2;
        const color = "red";
        const action = actions.updatePixelColor(index, color);
        expect(action).toEqual({
            index: index,
            currentColor: color,
            type: "UPDATE_PIXEL_COLOR"
        });
    });

    test("addFrame", () => {
        const action = actions.addFrame();
        expect(action).toEqual({
            type: "ADD_FRAME"
        });
    });
    test("deleteFrame", () => {
        const action = actions.deleteFrame();
        expect(action).toEqual({
            type: "DELETE_FRAME"
        });
    });
    test("copyFrame", () => {
        const action = actions.copyFrame();
        expect(action).toEqual({
            type: "COPY_FRAME"
        });
    });
    test("pasteFrame", () => {
        const action = actions.pasteFrame();
        expect(action).toEqual({
            type: "PASTE_FRAME"
        });
    });
});
