import { useState } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import style from './AddTraining.module.css'
import style2 from '../HRProfile/HRProfile.module.css'
import profileImg from '../../assets/images/hrprofile/Dropdown.svg'
import circularuser from '../../assets/images/hrprofile/UserCircle.svg'
import logout from '../../assets/images/hrprofile/Logout.svg'
import office from '../../assets/images/employeeProfile/Office.svg'
import copyp from '../../assets/images/employeeProfile/CopyP.svg'
import cnic from '../../assets/images/employeeProfile/UserCard.svg'

function AddTraining() {
    const [isOpen, setIsOpen] = useState(false)
    const toggler = () => {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }
    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
                <SideBar />
            </div>
            <div className={style.form}>
                <div className={style2.userInfo}>
                    <img src={profileImg} onClick={toggler} alt="" />
                    {
                        isOpen ?
                            <div className={style2.dropdown}>
                                <div>
                                    <img src={circularuser} alt="" />
                                    <p>Profile</p>
                                </div>
                                <div>
                                    <img src={logout} alt="" />
                                    <p>Logout</p>
                                </div>
                            </div> : null
                    }
                </div>
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
