import logo from "./logo.svg";
import "./App.css";
import { css } from "styled-components";
import ColorPalette from "./components/ColorPalette";
import Canvas from "./components/Canvas";
import Frames from "./components/Frames";
import Animation from "./components/Animation";
function App() {
    return (
        <div className="App">
            <div style={{ display: "flex", alignItems: "center" }}>
                <ColorPalette />
                <Canvas />
                <Animation />
            </div>

            <Frames />
        </div>
    );
}

export default App;
