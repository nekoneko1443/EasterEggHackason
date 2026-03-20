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
      <div className="app">
        <h1>ふろたま</h1>
        {/*<img src={egg1} alt="たまご" className="character-image" />*/}
      </div>

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
