import style from  './App.module.css';
import { Route, Routes } from "react-router-dom";
import WellcomePage from './pages/welcomePage/Wellcome';

function App() {
  return (
    <div className={style.webParent}>
      <Routes>
        <Route path="/" element={<WellcomePage />} />
      </Routes>
    </div>
  );
}

export default App;
