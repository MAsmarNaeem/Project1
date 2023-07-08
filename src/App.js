import style from './App.module.css';
import { Route, Routes } from "react-router-dom";
import WellcomePage from './HRPortal/welcomePage/Wellcome';
import HRProfile from './HRPortal/HRProfile/HRProfile';
import EmployeeProfile from './HRPortal/Employees/EmployeeProfile';
import Employees from './HRPortal/Employees/Employees';
import AddEmployees from './HRPortal/Employees/AddEmployees';
import AddTrainer from './HRPortal/addTrainer/AddTrainer';
import AddTraining from './HRPortal/trainings/AddTraining';
import YearlyPlan from './HRPortal/yearlyPlan/YearlyPlan';
// import Trainings from './HRPortal/trainings/Training';
import Monthly from './HRPortal/yearlyPlan/Monthly';
import Checked from './HRPortal/yearlyPlan/Checked';
import Input from './HRPortal/yearlyPlan/Input';
import AddPlan from './HRPortal/monthly/AddPlan';
import PersonalRec from './HRPortal/personalRec/PersonalRec';
import AddPerson from './HRPortal/personalRec/AddPerson';
import ViewTrainings from './HRPortal/infoSec/ViewTrainings';
import ViewTrainings2 from './HRPortal/infoSec/ViewTrainings2';
// import ComputTraining from './HRPortal/viewTraings/ComputTraining';
import AprovementTable from './HRPortal/plannedTrainings/PlannedTrainings';
import AprovementTable2 from './HRPortal/personalRec/Main';
import AssignTrainings from './HRPortal/plannedTrainings/AssignTraining';
import Welcome from './TrainerPortalPages/welcomePage/Welcome';
import MyTasks from './TrainerPortalPages/myTasks/MyTasks';
import TrainerProfile from './TrainerPortalPages/trainerProfile/TrainerProfile';
import Info from './TrainerPortalPages/infoSec/Info';
import TrainingInfo from './HRPortal/trainingRecords/Info';
import MainForTrainerPortal from './TrainerPortalPages/viewTraings/MainForTrainerPortal';
import ShowAddPersom from './HRPortal/personalRec/ShowAddPerson';
import ShowPersonalRec from './HRPortal/personalRec/ShowPersonalRec';
import Trainings from './HRPortal/trainingRecords/Trainings';
import TrainedEmployees from './HRPortal/trainingRecords/TrainedEmployees';
import TrainingsRef from './HRPortal/trainings/TrainingsRef';
// import planedTrainings from './HRPortal/plannedTrainings/PlannedTrainings'
import PlannedTrainings from './HRPortal/plannedTrainings/PlannedTrainings';
import Main from './HRPortal/personalRec/Main';

function App() {
  return (
    <div className={style.webParent}>
      <Routes>
        {/* --->HR Portal<--- */}
        {/* Employee Button Pages */}
        <Route path="/hr" element={<WellcomePage />} />
        <Route path="/hr/profile" element={<HRProfile />} />
        <Route path="/hr/employeeProfile" element={<EmployeeProfile />} />
        <Route path="/hr/employees" element={<Employees />} />
        <Route path="/hr/addemployee" element={<AddEmployees />} />
        {/* Training recs */}
        <Route path="/hr/trainings" element={<Trainings />} />
        <Route path="/hr/traininginfo" element={<TrainingInfo />} />
        <Route path="/hr/trainedemployees" element={<TrainedEmployees />} />
        {/* Training */}
        <Route path="/hr/trainingsref" element={<TrainingsRef />} />
        <Route path="/hr/addtraining" element={<AddTraining />} />
        <Route path="/hr/planned/trainings" element={<PlannedTrainings />} />
        <Route path="/hr/assign/trainings" element={<AssignTrainings />} />
        {/* personalRec */}
        <Route path="/hr/personalrec" element={<Main />} />
        <Route path="/hr/showrecdetails" element={<ShowAddPersom />} />
        <Route path="/hr/giveplan" element={<Input />} />
        <Route path="/hr/showpersonalrec" element={<ShowPersonalRec />} />
        <Route path="/hr/hiriningrec" element={<PersonalRec />} />
        {/* <Route path="/hr/traininginfo" element={<Info />} /> */}
        {/* <Route path="/trainings" element={<Trainings />} /> */}
        <Route path="/hr/addmonthlyplan" element={<AddPlan />} />
        <Route path="/hr/yearlyplan" element={<YearlyPlan />} />
        <Route path="/hr/trainingweeks" element={<Checked />} />
        <Route path="/hr/addtrainer" element={<AddTrainer />} />
        {/* <Route path="/hr/trainings" element={<ComputTraining />} /> */}
        <Route path="/hr/addpersonalrec" element={<AddPerson />} />
        <Route path="/hr/selectmonth" element={<Monthly />} />
        <Route path="/viewtrainings" element={<ViewTrainings />} />
        {/* Trainer Portal */}
        <Route path="/trainer" element={<Welcome />} />
        <Route path="/trainer/tasks" element={<MyTasks />} />
        <Route path="/trainer/profile" element={<TrainerProfile />} />
        <Route path="/trainer/traininginfo" element={<Info />} />
        <Route path="/trainer/trainings" element={<MainForTrainerPortal />} />
      </Routes>
    </div>
  );
}

export default App;
