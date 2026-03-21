import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InputPage() {
  const [checks, setChecks] = useState({
    facewash: false,
    shower: false,
    bodywash: false,
    bath: false,
    skincare: false,
    haircare: false,
    others: false,
  });

  const toggle = (key: keyof typeof checks) => {
    setChecks({ ...checks, [key]: !checks[key] });
  };

  const saveData = () => {
    const today = new Date().toLocaleDateString("ja-JP");
    const existingData = JSON.parse(
      localStorage.getItem("furotamaData") || "{}",
    );

    // 今日すでに記録済みなら保存不可
    // if (existingData.lastRecordedDate === today) {
    //   alert("今日はもう記録済みです");
    //   return;
    // }

    // 今日のポイント計算
    let dailyPoints = 0;
    if (checks.shower || checks.bodywash || checks.bath) dailyPoints += 2; // お風呂系
    if (checks.facewash) dailyPoints += 1; // 洗顔
    if (checks.bath) dailyPoints += 1; // 湯船に入った場合

    dailyPoints = Math.min(dailyPoints, 4);

    // 累計データを更新
    const totalPoints = (existingData.totalPoints || 0) + dailyPoints;
    const skincareCount =
      (existingData.skincareCount || 0) + (checks.skincare ? 1 : 0);
    const haircareCount =
      (existingData.haircareCount || 0) + (checks.haircare ? 1 : 0);
    const noneCount =
      (existingData.noneCount || 0) +
      (!checks.skincare && !checks.haircare ? 1 : 0);

    const dataToSave = {
      totalPoints,
      skincareCount,
      haircareCount,
      noneCount,
      lastRecordedDate: today,
    };

    localStorage.setItem("furotamaData", JSON.stringify(dataToSave));
    alert("保存したよ！");
  };

  const today = new Date().toLocaleDateString("ja-JP");

  const items = {
    // facewash: "化粧落としただけ（洗顔のみ）",
    shower: "シャワーのみ",
    bodywash: "全身洗った",
    bath: "湯船に入った",
    skincare: "スキンケア",
    haircare: "ヘアケア",
    others: "ケアなし",
  };
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", fontSize: "18px" }}>
      {/* 日付 */}
      <p>{today}</p>

      <h2>完了項目</h2>

      {Object.entries(items).map(([key, label]) => (
        <div
          key={key}
          onClick={() => toggle(key as keyof typeof checks)}
          style={{
            cursor: "pointer",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ fontSize: "22px" }}>
            {checks[key as keyof typeof checks] ? "●" : "○"}
          </span>
          <span>{label}</span>
        </div>
      ))}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <button className="btn-natural" onClick={saveData}>
          保存
        </button>

        <button className="btn-natural" onClick={() => navigate("/")}>
          ホーム画面へ
        </button>
      </div>
    </div>
  );
}
