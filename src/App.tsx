import Home from "./pages/Home";
import InputPages from "./pages/InputPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home />
      <h1>バス記録アプリ</h1>
      <InputPages /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<InputPages />} />
          {/* <Route path="/input" element={<Input />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
