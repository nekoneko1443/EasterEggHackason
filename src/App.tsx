import Home from "./pages/Home";
import InputPages from "./pages/InputPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Eggchange from "./components/Eggchange";

function App() {
  // const [totalPoints, setTotalPoints] = useState<number>(() => {
  //   const saved = localStorage.getItem("furotamaData");
  //   if (!saved) return 0;
  //   try {
  //     const parsed = JSON.parse(saved);
  //     return parsed.totalPoints ?? 0;
  //   } catch {
  //     return 0;
  //   }
  // });

  // const [skincareCount, setSkincareCount] = useState<number>(() => {
  //   const saved = localStorage.getItem("furotamaData");
  //   if (!saved) return 0;
  //   try {
  //     const parsed = JSON.parse(saved);
  //     return parsed.skincareCount ?? 0;
  //   } catch {
  //     return 0;
  //   }
  // });

  // const [haircareCount, setHaircareCount] = useState<number>(() => {
  //   const saved = localStorage.getItem("furotamaData");
  //   if (!saved) return 0;
  //   try {
  //     const parsed = JSON.parse(saved);
  //     return parsed.haircareCount ?? 0;
  //   } catch {
  //     return 0;
  //   }
  // });

  // const [noneCount, setNoneCount] = useState<number>(() => {
  //   const saved = localStorage.getItem("furotamaData");
  //   if (!saved) return 0;
  //   try {
  //     const parsed = JSON.parse(saved);
  //     return parsed.noneCount ?? 0;
  //   } catch {
  //     return 0;
  //   }
  // });

  // useEffect(() => {
  //   const saved = localStorage.getItem("furotamaData");
  //   if (saved) {
  //     try {
  //       const parsed = JSON.parse(saved);
  //       setTotalPoints(parsed.totalPoints ?? 0);
  //       setSkincareCount(parsed.skincareCount ?? 0);
  //       setHaircareCount(parsed.haircareCount ?? 0);
  //       setNoneCount(parsed.noneCount ?? 0);
  //     } catch {}
  //   }
  // }, []);
  return (
    <>
      {/* <Home />
      <h1>バス記録アプリ</h1>
      <InputPages /> */}
      <div className="app">
        <h1>ふろたま</h1>
        {/* <p>今日: {today}</p> */}

        {/* {alreadyRecordedToday && <p>今日はすでに記録済みです</p>}

        <div style={{ margin: "10px 0" }}>
          <label>
            <input
              type="checkbox"
              checked={didBath}
              onChange={(e) => setDidBath(e.target.checked)}
              disabled={alreadyRecordedToday}
            />
            お風呂に入った
          </label>
        </div>

        <div style={{ margin: "10px 0" }}>
          <label>
            <input
              type="checkbox"
              checked={usedCleanser}
              onChange={(e) => setUsedCleanser(e.target.checked)}
              disabled={alreadyRecordedToday}
            />
            洗顔料などを使った
          </label>
        </div>

        <div style={{ margin: "10px 0" }}>
          <label>
            <input
              type="checkbox"
              checked={soakedTub}
              onChange={(e) => setSoakedTub(e.target.checked)}
              disabled={alreadyRecordedToday}
            />
            湯船に入った
          </label>
        </div>

        <hr />

        <p>ケア内容</p>

        <div style={{ margin: "10px 0" }}>
          <label>
            <input
              type="checkbox"
              checked={didSkincare}
              onChange={(e) => setDidSkincare(e.target.checked)}
              disabled={alreadyRecordedToday}
            />
            スキンケアをした
          </label>
        </div>

        <div style={{ margin: "10px 0" }}>
          <label>
            <input
              type="checkbox"
              checked={didHaircare}
              onChange={(e) => setDidHaircare(e.target.checked)}
              disabled={alreadyRecordedToday}
            />
            ヘアケアをした
          </label>
        </div>

        <button
          type="button"
          onClick={handleRecord}
          disabled={alreadyRecordedToday}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            marginTop: "10px",
            cursor: alreadyRecordedToday ? "not-allowed" : "pointer",
            marginRight: "10px",
            opacity: alreadyRecordedToday ? 0.6 : 1,
          }}
        >
          記録する
        </button>

        <button
          type="button"
          onClick={handleReset}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          リセット
        </button>

        <hr /> */}

        {/* <p>スキンケア回数: {skincareCount}</p>
        <p>ヘアケア回数: {haircareCount}</p>
        <p>ケアなし回数: {noneCount}</p>

        <p>累計ポイント: {totalPoints}</p>

        <Eggchange
          totalPoints={totalPoints}
          skincareCount={skincareCount}
          haircareCount={haircareCount}
          noneCount={noneCount}
        /> */}
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
