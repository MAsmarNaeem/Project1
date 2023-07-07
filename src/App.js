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
import ComputTraining from './pages/viewTraings/ComputTraining';
import AprovementTable from './pages/personalRec/AprovementTable';
import AprovementTable2 from './pages/personalRec/AprovementTable2';
import AssignTrainings from './pages/trainings/AssignTraining';
import Welcome from './TrainerPortalPages/welcomePage/Welcome';
import MyTasks from './TrainerPortalPages/myTasks/MyTasks';
import TrainerProfile from './TrainerPortalPages/trainerProfile/TrainerProfile';
import Info from './TrainerPortalPages/infoSec/Info';
import MainForTrainerPortal from './TrainerPortalPages/viewTraings/MainForTrainerPortal';

function App() {
  return (
    <div className={style.webParent}>
      <Routes>
        {/* HR Portal */}
        <Route path="/" element={<WellcomePage />} />
        <Route path="/hrprofile" element={<HRProfile />} />
        <Route path="/employeeprofile" element={<EmployeeProfile />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/addemployees" element={<AddEmployees />} />
        <Route path="/addtrainer" element={<AddTrainer />} />
        <Route path="/addtrainings" element={<AddTraining />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/yearly" element={<YearlyPlan />} />
        <Route path="/monthly" element={<Monthly />} />
        <Route path="/weekly1" element={<Checked />} />
        <Route path="/weekly2" element={<Input />} />
        <Route path="/addmonthlyplan" element={<AddPlan />} />
        <Route path="/addpersonalrec" element={<PersonalRec />} />
        <Route path="/addperson" element={<AddPerson />} />
        <Route path="/viewtrainings" element={<ViewTrainings />} />
        <Route path="/viewtrainings2" element={<ViewTrainings2 />} />
        <Route path="/viewtrainingslist" element={<Main />} />
        <Route path="/computertainings" element={<ComputTraining />} />
        <Route path="/aprovementtable" element={<AprovementTable />} />
        <Route path="/aprovementtable2" element={<AprovementTable2 />} />
        <Route path="/assigntrainings" element={<AssignTrainings />} />
        {/* Trainer Portal */}
        <Route path="/trainerportal/welcome" element={<Welcome />} />
        <Route path="/trainerportal/mytasks" element={<MyTasks />} />
        <Route path="/trainerportal/profile" element={<TrainerProfile />} />
        <Route path="/trainerportal/traininginfo" element={<Info />} />
        <Route path="/trainerportal/trainings" element={<MainForTrainerPortal />} />
      </Routes>
    </div>
  );
}

export default App;
