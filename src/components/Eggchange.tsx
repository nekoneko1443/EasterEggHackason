import egg1 from "../assets/egg1.png";
import egg2 from "../assets/egg2.png";
import egg3 from "../assets/egg3.png";
import unc1 from "../assets/unc1.png";
import unc2 from "../assets/unc2.png";
import unc1plus from "../assets/unc1plus.png";
import unc2plus from "../assets/unc2plus.png";

type EggchangeProps = {
  totalPoints: number;
  skincareCount: number;
  haircareCount: number;
  noneCount: number;
};

function Eggchange({
  totalPoints,
  skincareCount,
  haircareCount,
  noneCount,
}: EggchangeProps) {
  // ① 段階判定
  let stage = "";

  if (totalPoints <= 6) {
    stage = "egg1";
  } else if (totalPoints <= 12) {
    stage = "egg2";
  } else if (totalPoints <= 18) {
    stage = "egg3";
  } else if (totalPoints <= 24) {
    if (skincareCount >= haircareCount && skincareCount >= noneCount) {
      stage = "unc1";
    } else {
      stage = "unc2";
    }
  } else {
    if (skincareCount >= haircareCount && skincareCount >= noneCount) {
      stage = "unc1plus";
    } else {
      stage = "unc2plus";
    }
  }

  // ② 画像を決定
  let imageSrc;

  if (stage === "egg1") {
    imageSrc = egg1;
  } else if (stage === "egg2") {
    imageSrc = egg2;
  } else if (stage === "egg3") {
    imageSrc = egg3;
  } else if (stage === "unc1") {
    imageSrc = unc1;
  } else if (stage === "unc2") {
    imageSrc = unc2;
  } else if (stage === "unc1plus") {
    imageSrc = unc1plus;
  } else {
    imageSrc = unc2plus;
  }

  // ③ 表示
  return (
    <div>
      <img src={imageSrc} alt={stage} style={{ width: "200px" }} />
    </div>
  );
}

export default Eggchange;
