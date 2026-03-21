import CalendarComponent from "../components/Calendar/Calendar";
// import BathBarChart from "../components/graph/BarChart";
import { useNavigate } from "react-router-dom";
import Eggchange from "../components/Eggchange";
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();

  const [totalPoints, setTotalPoints] = useState<number>(() => {
    const saved = localStorage.getItem("furotamaData");
    if (!saved) return 0;
    try {
      const parsed = JSON.parse(saved);
      return parsed.totalPoints ?? 0;
    } catch {
      return 0;
    }
  });

  const [skincareCount, setSkincareCount] = useState<number>(() => {
    const saved = localStorage.getItem("furotamaData");
    if (!saved) return 0;
    try {
      const parsed = JSON.parse(saved);
      return parsed.skincareCount ?? 0;
    } catch {
      return 0;
    }
  });

  const [haircareCount, setHaircareCount] = useState<number>(() => {
    const saved = localStorage.getItem("furotamaData");
    if (!saved) return 0;
    try {
      const parsed = JSON.parse(saved);
      return parsed.haircareCount ?? 0;
    } catch {
      return 0;
    }
  });

  const [noneCount, setNoneCount] = useState<number>(() => {
    const saved = localStorage.getItem("furotamaData");
    if (!saved) return 0;
    try {
      const parsed = JSON.parse(saved);
      return parsed.noneCount ?? 0;
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    const saved = localStorage.getItem("furotamaData");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTotalPoints(parsed.totalPoints ?? 0);
        setSkincareCount(parsed.skincareCount ?? 0);
        setHaircareCount(parsed.haircareCount ?? 0);
        setNoneCount(parsed.noneCount ?? 0);
      } catch {}
    }
  }, []);
  return (
    <div className="home-container">
      <h1 className="page-title">ホーム</h1>
      <div className="calendar-area">
        <CalendarComponent />
        <p>スキンケア回数: {skincareCount}</p>
        <p>ヘアケア回数: {haircareCount}</p>
        <p>ケアなし回数: {noneCount}</p>

        <p>累計ポイント: {totalPoints}</p>

        <Eggchange
          totalPoints={totalPoints}
          skincareCount={skincareCount}
          haircareCount={haircareCount}
          noneCount={noneCount}
        />
      </div>
      <div className="calendar-button-area">
        <button className="btn-natural" onClick={() => navigate("/input")}>
          入力画面へ
        </button>
      </div>
    </div>
  );
}

export default Home;
