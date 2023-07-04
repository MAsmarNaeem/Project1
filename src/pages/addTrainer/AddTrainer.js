import { useState } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import style from './AddTrainer.module.css'
import style2 from '../HRProfile/HRProfile.module.css'
import profileImg from '../../assets/images/hrprofile/Dropdown.svg'
import circularuser from '../../assets/images/hrprofile/UserCircle.svg'
import logout from '../../assets/images/hrprofile/Logout.svg'
import edit from '../../assets/images/addEmployee/edit.svg'
import profile from '../../assets/images/addEmployee/prof.svg'

function AddTrainer() {
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
                        <img style={{width:'20px',height:'20px',cursor:'pointer'}} src={profile} alt="" />
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
