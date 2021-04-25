import framesReducer from "../redux/reducers/framesReducer";
describe("framesReducer", () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            //2x2 grid
            frames: [
                [
                    { x: 0, y: 0, color: "transparent" },
                    { x: 1, y: 0, color: "transparent" },
                    { x: 0, y: 1, color: "transparent" },
                    { x: 1, y: 1, color: "transparent" }
                ],
                [
                    { x: 0, y: 0, color: "red" },
                    { x: 1, y: 0, color: "red" },
                    { x: 0, y: 1, color: "transparent" },
                    { x: 1, y: 1, color: "transparent" }
                ]
            ],
            canvasArray: [
                { x: 0, y: 0, color: "transparent" },
                { x: 1, y: 0, color: "transparent" },
                { x: 0, y: 1, color: "transparent" },
                { x: 1, y: 1, color: "transparent" }
            ],
            currentFrame: 0,
            copyCanvasArray: null
        };
        JSON.parse = jest.fn();
        JSON.parse.mockReturnValue([
            { x: 0, y: 0, color: "transparent" },
            { x: 1, y: 0, color: "transparent" },
            { x: 0, y: 1, color: "transparent" },
            { x: 1, y: 1, color: "transparent" }
        ]);
    });

    test("should handle UPDATE_CURRENT_FRAME", () => {
        const action = {
            type: "UPDATE_CURRENT_FRAME",
            index: 1
        };

        const newState = framesReducer(initialState, action);
        expect(newState).toEqual({
            ...initialState,
            currentFrame: 1,
            canvasArray: [
                { x: 0, y: 0, color: "red" },
                { x: 1, y: 0, color: "red" },
                { x: 0, y: 1, color: "transparent" },
                { x: 1, y: 1, color: "transparent" }
            ]
        });
    });

    test("should handle ADD_FRAME", () => {
        const action = {
            type: "ADD_FRAME"
        };
        const newState = framesReducer(initialState, action);
        expect(newState).toEqual({
            ...initialState,
            currentFrame: 1,
            frames: [
                [
                    { x: 0, y: 0, color: "transparent" },
                    { x: 1, y: 0, color: "transparent" },
                    { x: 0, y: 1, color: "transparent" },
                    { x: 1, y: 1, color: "transparent" }
                ],
                [
                    { x: 0, y: 0, color: "transparent" },
                    { x: 1, y: 0, color: "transparent" },
                    { x: 0, y: 1, color: "transparent" },
                    { x: 1, y: 1, color: "transparent" }
                ],
                [
                    { x: 0, y: 0, color: "red" },
                    { x: 1, y: 0, color: "red" },
                    { x: 0, y: 1, color: "transparent" },
                    { x: 1, y: 1, color: "transparent" }
                ]
            ]
        });
    });

    test("should handle DELETE_FRAME", () => {
        const action = {
            type: "DELETE_FRAME"
        };
        const newState = framesReducer(initialState, action);
        expect(newState).toEqual({
            ...initialState,
            currentFrame: 0,
            canvasArray: [
                { x: 0, y: 0, color: "red" },
                { x: 1, y: 0, color: "red" },
                { x: 0, y: 1, color: "transparent" },
                { x: 1, y: 1, color: "transparent" }
            ],
            frames: [
                [
                    { x: 0, y: 0, color: "red" },
                    { x: 1, y: 0, color: "red" },
                    { x: 0, y: 1, color: "transparent" },
                    { x: 1, y: 1, color: "transparent" }
                ]
            ]
        });
    });

    test("should handle COPY_FRAME", () => {
        const action = {
            type: "COPY_FRAME"
        };
        const newState = framesReducer(initialState, action);
        expect(newState).toEqual({
            ...initialState,
            copyCanvasArray: [
                { x: 0, y: 0, color: "transparent" },
                { x: 1, y: 0, color: "transparent" },
                { x: 0, y: 1, color: "transparent" },
                { x: 1, y: 1, color: "transparent" }
            ]
        });
    });

    test("should handle PASTE_FRAME", () => {
        const action = {
            type: "PASTE_FRAME"
        };
        const newState = framesReducer(initialState, action);
        expect(newState).toEqual({
            ...initialState
        });
    });

    test("should handle UPDATE_PIXEL_COLOR", () => {
        const action = {
            type: "UPDATE_PIXEL_COLOR",
            index: 2,
            currentColor: "green"
        };
        const newState = framesReducer(initialState, action);
        expect(newState).toEqual({
            ...initialState,
            canvasArray: [
                { x: 0, y: 0, color: "transparent" },
                { x: 1, y: 0, color: "transparent" },
                { x: 0, y: 1, color: "green" },
                { x: 1, y: 1, color: "transparent" }
            ],
            frames: [
                [
                    { x: 0, y: 0, color: "transparent" },
                    { x: 1, y: 0, color: "transparent" },
                    { x: 0, y: 1, color: "green" },
                    { x: 1, y: 1, color: "transparent" }
                ],
                [
                    { x: 0, y: 0, color: "red" },
                    { x: 1, y: 0, color: "red" },
                    { x: 0, y: 1, color: "transparent" },
                    { x: 1, y: 1, color: "transparent" }
                ]
            ]
        });
    });
});
