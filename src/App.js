import style from  './App.module.css';
import { Route, Routes } from "react-router-dom";
import WellcomePage from './pages/welcomePage/Wellcome';
import HRProfile from './pages/HRProfile/HRProfile';
import EmployeeProfile from './pages/employeeeProfile/EmployeeProfile';
import Employees from './pages/Employees/Employees';
import AddEmployees from './pages/addEmployees/AddEmployees';

function App() {
  return (
    <div className={style.webParent}>
      <Routes>
        <Route path="/" element={<WellcomePage />} />
        <Route path="/hrprofile" element={<HRProfile />} />
        <Route path="/employeeprofile" element={<EmployeeProfile />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/addemployees" element={<AddEmployees/>} />
      </Routes>
    </div>
  );
}

export default App;
