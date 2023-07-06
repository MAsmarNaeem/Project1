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
import Checked from './pages/weeks/Checked';
import Input from './pages/weeks/Input';
import AddPlan from './pages/monthly/AddPlan';
import PersonalRec from './pages/personalRec/PersonalRec';
import AddPerson from './pages/personalRec/AddPerson';
import ViewTrainings from './pages/infoSec/ViewTrainings';
import ViewTrainings2 from './pages/infoSec/ViewTrainings2';
import Main from './pages/viewTraings/Main';

function App() {
  return (
    <div className={style.webParent}>
      <Routes>
        {/* 1 */}
        <Route path="/" element={<WellcomePage />} />
        {/* 2 */}
        <Route path="/hrprofile" element={<HRProfile />} />
        {/* 3 */}
        <Route path="/employeeprofile" element={<EmployeeProfile />} />
        {/* 4 */}
        <Route path="/employees" element={<Employees />} />
        {/* 5 */}
        <Route path="/addemployees" element={<AddEmployees />} />
        {/* 6 */}
        <Route path="/addtrainer" element={<AddTrainer />} />
        {/* 7 */}
        <Route path="/addtrainings" element={<AddTraining />} />
        {/* 8 */}
        <Route path="/trainings" element={<Trainings />} />
        {/* 9 */}
        <Route path="/yearly" element={<YearlyPlan />} />
        {/* 10 */}
        <Route path="/monthly" element={<Monthly />} />
        {/* 11 */}
        <Route path="/weekly1" element={<Checked />} />
        {/* 12 */}
        <Route path="/weekly2" element={<Input />} />
        {/* 13 */}
        <Route path="/addmonthlyplan" element={<AddPlan />} />
        {/* 14 */}
        <Route path="/addpersonalrec" element={<PersonalRec />} />
        {/* 15 */}
        <Route path="/addperson" element={<AddPerson />} />
        {/* 16 */}
        <Route path="/viewtrainings" element={<ViewTrainings />} />
        {/* 17 */}
        <Route path="/viewtrainings2" element={<ViewTrainings2 />} />
        {/* 18 */}
        <Route path="/viewtrainingslist" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
