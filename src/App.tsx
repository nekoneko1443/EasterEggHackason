import { useEffect, useState } from "react";
import Eggchange from "./components/components/Eggchange";

function App() {
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
      return parsed.haircareCount ?? 0;
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

  const [lastRecordedDate, setLastRecordedDate] = useState<string>(() => {
    const saved = localStorage.getItem("furotamaData");
    if (!saved) return "";

    try {
      const parsed = JSON.parse(saved);
      return parsed.lastRecordedDate ?? "";
    } catch {
      return "";
    }
  });

  const [didBath, setDidBath] = useState(false);
  const [usedCleanser, setUsedCleanser] = useState(false);
  const [soakedTub, setSoakedTub] = useState(false);
  const [didSkincare, setDidSkincare] = useState(false);
  const [didHaircare, setDidHaircare] = useState(false);

  const today = new Date().toLocaleDateString("ja-JP");
  const alreadyRecordedToday = lastRecordedDate === today;

  useEffect(() => {
    const dataToSave = {
      totalPoints,
      skincareCount,
      haircareCount,
      noneCount,
      lastRecordedDate,
    };

    localStorage.setItem("furotamaData", JSON.stringify(dataToSave));
  }, [totalPoints, skincareCount, haircareCount, noneCount, lastRecordedDate]);

  const handleRecord = () => {
    if (alreadyRecordedToday) {
      alert("今日はもう記録済みです");
      return;
    }

    let dailyPoints = 0;

    if (didBath) dailyPoints += 2;
    if (usedCleanser) dailyPoints += 1;
    if (soakedTub) dailyPoints += 1;

    dailyPoints = Math.min(dailyPoints, 4);

    setTotalPoints((prev) => prev + dailyPoints);

    if (didSkincare) {
      setSkincareCount((prev) => prev + 1);
    }

    if (didHaircare) {
      setHaircareCount((prev) => prev + 1);
    }

    if (!didSkincare && !didHaircare) {
      setNoneCount((prev) => prev + 1);
    }

    setLastRecordedDate(today);

    setDidBath(false);
    setUsedCleanser(false);
    setSoakedTub(false);
    setDidSkincare(false);
    setDidHaircare(false);
  };

  const handleReset = () => {
    setTotalPoints(0);
    setSkincareCount(0);
    setHaircareCount(0);
    setNoneCount(0);
    setLastRecordedDate("");

    setDidBath(false);
    setUsedCleanser(false);
    setSoakedTub(false);
    setDidSkincare(false);
    setDidHaircare(false);

    localStorage.removeItem("furotamaData");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>ふろたま</h1>

      <p>今日: {today}</p>

      {alreadyRecordedToday && <p>今日はすでに記録済みです</p>}

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

      <hr />

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
  );
}

export default App;