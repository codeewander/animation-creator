import paletteReducer from "../redux/reducers/paletteReducer";

describe("framesReducer", () => {
    const initialState = {
        colors: ["transparent", "#FFFFFF", "#E7C09D", "#c5a487", "#8B5C33"],
        currentColor: "#FFFFFF"
    };

    test("should handle UPDATE_COLOR", () => {
        const action = {
            type: "UPDATE_COLOR",
            color: "transparent"
        };
        const newState = paletteReducer(initialState, action);
        expect(newState).toEqual({
            ...initialState,
            currentColor: "transparent"
        });
    });
});
