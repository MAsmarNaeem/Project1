import style from './App.module.css';
import { Route, Routes } from "react-router-dom";
import WellcomePage from './pages/welcomePage/Wellcome';
import HRProfile from './pages/HRProfile/HRProfile';
import EmployeeProfile from './pages/employeeeProfile/EmployeeProfile';
import Employees from './pages/Employees/Employees';
import AddEmployees from './pages/addEmployees/AddEmployees';
import AddTrainer from './pages/addTrainer/AddTrainer';
import AddTraining from './pages/addTraining/AddTraining';
import YearlyPlan from './pages/yearlyPlan/YearlyPlan';
import Trainings from './pages/trainings/Training';
import Monthly from './pages/monthly/Monthly';

function App() {
  return (
    <div className={style.webParent}>
      <Routes>
        <Route path="/" element={<WellcomePage />} />
        <Route path="/hrprofile" element={<HRProfile />} />
        <Route path="/employeeprofile" element={<EmployeeProfile />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/addemployees" element={<AddEmployees />} />
        <Route path="/addtrainer" element={<AddTrainer />} />
        <Route path="/addtrainings" element={<AddTraining />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/yearlyplan" element={<YearlyPlan />} />
        <Route path="/monthly" element={<Monthly />} />
      </Routes>
    </div>
  );
}

export default App;
