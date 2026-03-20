import "./App.css";
import egg1 from "./assets/egg1.png";

function App() {
  return (
    <div className="app">
      <h1>ふろたま</h1>
      <img src={egg1} alt="たまご" className="character-image" />
    </div>
  );
}

export default App;