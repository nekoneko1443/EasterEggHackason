import CalendarComponent from "../components/Calendar/Calendar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>ホーム</h1>
        <CalendarComponent />
      </div>
      <button
  className="btn-natural"
  onClick={() => navigate("/input")}
>
  入力画面へ
</button>
    </div>
  );
}

export default Home;
