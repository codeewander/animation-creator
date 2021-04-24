const colorList = [
    "transparent",
    "#FFFFFF",
    "#E7C09D",
    "#c5a487",
    "#8B5C33",
    "#5E2C00",
    "#FD7FFF",
    "#EF0033",
    "#FF6633",
    "#FFB500",
    "#EEFF00",
    "#99EE00",
    "#33CC00",
    "#00CFFC",
    "#006FCF",
    "#004b8c",
    "#4F00DF",
    "#A900DA",
    "#000000",
    "#222222",
    "#666666",
    "#AAAAAA"
];

const initialState = {
    colors: colorList,
    currentColor: colorList[1]
};

export default function paletteReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_COLOR":
            return { ...state, currentColor: action.color };
        default:
            return state;
    }
}
