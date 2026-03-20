import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function BathBarChart() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("bathHistory") || "[]");

    const counts = {
      //   facewash: 0,
      shower: 0,
      bodywash: 0,
      bath: 0,
      skincare: 0,
      haircare: 0,
      others: 0,
    };

    history.forEach((day: any) => {
      type Keys = keyof typeof counts;

      (Object.keys(counts) as Keys[]).forEach((key) => {
        if (day[key]) counts[key]++;
      });
    });

    const labels = {
      //   facewash: "洗顔のみ",
      shower: "シャワーのみ",
      bodywash: "全身",
      bath: "湯船",
      skincare: "スキンケア",
      haircare: "ヘアケア",
      others: "ケアなし",
    };

    const formatted = Object.entries(counts).map(([key, value]) => ({
      name: labels[key as keyof typeof labels],
      count: value,
    }));

    setData(formatted);
  }, []);

  return (
    <div>
      <h2>記録グラフ</h2>

      <BarChart width={650} height={400} data={data}>
        <CartesianGrid />
        <XAxis dataKey="name" tick={{ fill: "black" }} />
        <YAxis tick={{ fill: "black" }} />
        <Tooltip />
        <Bar dataKey="count" fill="#86705fff" barSize={40} />
      </BarChart>
    </div>
  );
}
