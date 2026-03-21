import CalendarComponent from "../components/Calendar/Calendar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
  <h1 className="page-title">ホーム</h1>
   <div className="calendar-area">
  <CalendarComponent />
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
