import SideBar from '../../components/sidebar/SideBar'
import style from './AddTraining.module.css'
import office from '../../assets/images/employeeProfile/Office.svg'
import copyp from '../../assets/images/employeeProfile/CopyP.svg'
import cnic from '../../assets/images/employeeProfile/UserCard.svg'
import ProfileUser from '../../components/profileUser/ProfileUser'

function AddTraining() {
    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
                <SideBar />
            </div>
            <ProfileUser />
            <div className={style.form}>
                <div className={style.headers}>
                    <div className={style.spans}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={style.para}>
                        Add Training
                    </div>

                </div>
                <div className={style.sec1}>
                    <div>
                        <p>Training Name</p>
                        <div>
                            <img src={office} alt="" />
                            <input type="text" />
                        </div>
                    </div>
                    <div>
                        <p>Description</p>
                        <div>
                            <img src={copyp} alt="" />
                            <textarea className={style.fortextarea} type="text" />
                        </div>
                    </div>
                    <div>
                        <p>Evaluation Criteria</p>
                        <div>
                            <img src={cnic} alt="" />
                            <textarea className={style.fortextarea}  type="text" />
                        </div>
                    </div>
                    <div className={style.btns}>
                        <button>Training Material</button>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTraining
