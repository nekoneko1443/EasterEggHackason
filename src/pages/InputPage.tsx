import { useState } from "react";

export default function InputPage() {
  const [checks, setChecks] = useState({
    facewash: false,
    shower: false,
    bodywash: false,
    bath: false,
    skincare: false,
    haircare: false,
    bathadd: false,
  });

  const toggle = (key: keyof typeof checks) => {
    setChecks({ ...checks, [key]: !checks[key] });
  };

  const saveData = () => {
    const history = JSON.parse(localStorage.getItem("bathHistory") || "[]");
    history.push(checks);
    localStorage.setItem("bathHistory", JSON.stringify(history));
    alert("保存したよ！");
  };

  const today = new Date().toLocaleDateString("ja-JP");

  // ← ここ！ return の「前」に items を置く
  const items = {
    facewash: "化粧落としただけ（洗顔のみ）",
    shower: "シャワーのみ",
    bodywash: "全身洗った",
    bath: "湯船に入った",
    skincare: "スキンケア",
    haircare: "ヘアケア",
    bathadd: "入浴剤の利用",
  };

  return (
    <div style={{ padding: "20px", fontSize: "18px" }}>
      {/* 日付 */}
      <h2>日付（自動取得）</h2>
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

      <button onClick={saveData} style={{ marginTop: "20px" }}>
        保存
      </button>
    </div>
  );
}