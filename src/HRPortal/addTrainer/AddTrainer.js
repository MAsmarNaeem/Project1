import SideBar from '../../components/sidebar/SideBar'
import style from './AddTrainer.module.css'
import edit from '../../assets/images/addEmployee/edit.svg'
import profile from '../../assets/images/addEmployee/prof.svg'
import ProfileUser from '../../components/profileUser/ProfileUser'
import copyP from '../../assets/images/employeeProfile/CopyP.svg'
import Office from '../../assets/images/employeeProfile/Office.svg'
import msg from '../../assets/images/hrprofile/mail.svg'

function AddTrainer() {
    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
                <SideBar />
            </div>
            <div className={style.form}>
                <ProfileUser />
                <div className={style.headers}>
                    <div className={style.spans}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={style.para}>
                        Add Trainer
                    </div>

                </div>
                <div className={style.profile}>
                    <img src={profile} alt="" />
                    <div>
                        <img src={edit} alt="" />
                    </div>
                </div>
                <div className={style.sec1}>
                    <div>
                        <input type="text" placeholder='Name here' />
                        <img style={{ width: '20px', height: '20px', cursor: 'pointer' }} src={profile} alt="" />
                    </div>
                    <div>
                        <input type="text" placeholder='Age here' />
                        <img style={{ width: '20px', height: '20px', cursor: 'pointer' }} src={profile} alt="" />
                    </div>
                    <div>
                        <input type="text" placeholder='Email here' />
                        <img style={{ width: '20px', height: '20px', cursor: 'pointer' }} src={msg} alt="" />
                    </div>
                    <div>
                        <input type="text" placeholder='Experience here' />
                        <img style={{ width: '20px', height: '20px', cursor: 'pointer' }} src={Office} alt="" />
                    </div>
                    <div className={style.spec}>
                        <input type="text" placeholder='Speciality here' />
                        <img style={{ width: '20px', height: '20px', cursor: 'pointer' }} src={copyP} alt="" />
                    </div>
                    <div className={style.btns}>
                        <button>Upload Documents</button>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTrainer
