import CalendarComponent from "../components/Calendar/Calendar";
// import BathBarChart from "../components/graph/BarChart";
import { useNavigate } from "react-router-dom";
import Eggchange from "../components/Eggchange";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>ホーム</h1>
        <CalendarComponent />
        {/* <Eggchange
          totalPoints={totalPoints}
          skincareCount={skincareCount}
          haircareCount={haircareCount}
          noneCount={noneCount}
        /> */}
      </div>
      <button className="btn-natural" onClick={() => navigate("/input")}>
        入力画面へ
      </button>
    </div>
  );
}

export default Home;
