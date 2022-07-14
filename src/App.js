import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Projects from "./pages/projects/Projects.js";
import Styleguides from "./pages/styleguides/Styleguides.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Projects />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route path="/styleguides" element={<Styleguides />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
