import logo from "./logo.svg";
import "./App.css";
import { css } from "styled-components";
import ColorPalette from "./components/ColorPalette";
import Canvas from "./components/Canvas";
import Frames from "./components/Frames";
function App() {
    return (
        <div className="App">
            <div style={{ display: "flex" }}>
                <ColorPalette />
                <Canvas />
            </div>
            <Frames />
        </div>
    );
}

export default App;
