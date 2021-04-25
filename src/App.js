import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import ColorPalette from "./components/ColorPalette";
import Canvas from "./components/Canvas";
import Frames from "./components/Frames";
import Animation from "./components/Animation";
import Controller from "./components/Controller";

const AppContainer = styled.div`
    width: 700px;
    height: 500px;
    margin: auto;
    display: grid;
    grid-template-areas:
        "palette  canvas animation"
        "frames frames frames"
        "controllers controllers controllers";
    grid-template-rows: 1fr 64px 70px;
    grid-template-columns: 80px 1fr 150px;
`;
function App() {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Animation Creator</h1>
            <AppContainer>
                <ColorPalette />
                <Canvas />
                <Animation />
                <Frames />
                <Controller />
            </AppContainer>
        </>
    );
}

export default App;
