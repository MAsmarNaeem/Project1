import SideBar from '../../components/sidebar/SideBar'
import style2 from '../HRProfile/HRProfile.module.css'
import style from './AddEmployees.module.css'
import profileImg from '../../assets/images/hrprofile/Dropdown.svg'
import circularuser from '../../assets/images/hrprofile/UserCircle.svg'
import logout from '../../assets/images/hrprofile/Logout.svg'
import { useState } from 'react'
import edit from '../../assets/images/addEmployee/edit.svg'
import profile from '../../assets/images/addEmployee/prof.svg'
import mail from '../../assets/images/hrprofile/mail.svg'
import Phone from '../../assets/images/employeeProfile/Phone.svg'
import copyp from '../../assets/images/employeeProfile/CopyP.svg'
import Location from '../../assets/images/employeeProfile/Location.svg'
import Office from '../../assets/images/employeeProfile/Office.svg'
import UserCard from '../../assets/images/employeeProfile/UserCard.svg'
import Calendar from '../../assets/images/employeeProfile/Calendar.svg'
import arrow from '../../assets/images/addEmployee/arrow.svg'
import man from '../../assets/images/hrprofile/man.svg'

function AddEmployees() {
    const [isOpen, setIsOpen] = useState(false)
    const toggler = () => {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }
    let info = '>'
    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
                <SideBar />
            </div>
            <div className={style.addEmployee}>
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
                <div className={style.form}>
                    <div className={style.headers}>
                        <div className={style.spans}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={style.para}>
                            Add&nbsp;Employee
                        </div>

                    </div>
                    <div className={style.profile}>
                        <img src={profile} alt="" />
                        <div>
                            <img src={edit} alt="" />
                        </div>
                    </div>
                    <div className={style.userform}>
                        <div className={style.sec1}>
                            <div>
                                <input type="text" placeholder='Name here' />
                                <img src={man} alt="" />
                            </div>
                            <div>
                                <input type="text" placeholder='Phone Number here' />
                                <img src={Phone} alt="" />
                            </div>
                            <div>
                                <input type="text" placeholder='Email here' />
                                <img src={mail} alt="" />
                            </div>
                            <div>
                                <input type="text" placeholder='CNIC here' />
                                <img src={UserCard} alt="" />
                            </div>
                            <div>
                                <input type="text" placeholder='Qualification here' />
                                <img src={copyp} alt="" />
                            </div>
                        </div>
                        <div className={style.sec2}>
                            <div>
                                <input type="text" placeholder='Department here' />
                                <div className={style.indicator}>
                                    <img src={man} alt="" />
                                    <div>
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <input type="text" placeholder='Address here' />
                                <img src={Location} alt="" />
                            </div>
                            <div>
                                <input type="text" placeholder='Designation here' />
                                <div className={style.indicator}>
                                    <img src={mail} alt="" />
                                    <div>
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={style.btns}>
                                <button>Upload Documents</button>
                                <button>Submit</button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default AddEmployees
