import style from '../machines/AddMachine.module.css'
import profile from '../../assets/images/techPortal/SClock2.svg'
import Phone from '../../assets/images/employeeProfile/Location.svg'
import arrow from '../../assets/images/addEmployee/arrow.svg'
import ProfileUser from '../../components/profileUser/ProfileUser'
import { useState } from 'react'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'
import Navbar from '../../components/navbar/Navbar'
import settings from '../../assets/images/techPortal/settings.svg'
import TechPortalSidebar from '../../components/sidebar/TechPortalSidebar'
import TechOffcanvas from '../../components/offcanvas/TechOffcanvas'

function AddDevices() {
    const [offcanvas, setOffcanvas] = useState(false)
    const [optvalue, setoptvalue] = useState('')
    const [dropd, setdropd] = useState(false)
    const [alert, setalert] = useState(false)
    const alertManager = () => {
        setalert(!alert)
    }

    const optManager = (e) => {
        setdropd(!dropd)
        setoptvalue(e)
    }
    return (
        <>
            <div className={style.parent}>
                <div className={style.sidebar}>
                    <Navbar func={() => {
                        setOffcanvas(!offcanvas)
                    }} />
                    <TechPortalSidebar />
                    <TechOffcanvas status={offcanvas} />
                </div>
                <div className={style.addEmployee}>
                    <ProfileUser path='/hr/profile' />
                    <div className={style.form}>
                        <div className={style.headers}>
                            <div className={style.spans}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className={style.para}>
                                Add Measuring Device
                            </div>

                        </div>
                        <div className={style.userform}>
                            <div className={style.sec1}>
                                <div>
                                    <input type="text" placeholder='Device name' />
                                    <img src={profile} alt="" />
                                </div>
                                <div>
                                    <input type="number" placeholder='Device location' />
                                    <div className={style.indicator}>
                                        <img src={Phone} alt="" />
                                        <div>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className={style.dropdown}>
                                    <p>Add Maintainance</p>
                                    <div className={style.indicator2}>
                                        <img src={settings} alt="" />
                                        <p className={style.optStyle}>{optvalue}</p>
                                        <div onClick={() => optManager(optvalue)}>
                                            <img className={dropd ? style.rotate : null} src={arrow} alt="" />
                                        </div>
                                    </div>
                                    {dropd ?
                                        <div className={style.droper}>
                                            <p className={style.optStyle} onClick={() => optManager('Daily')}>Daily</p>
                                            <p className={style.optStyle} onClick={() => optManager('Weekly')}>Weekly</p>
                                            <p className={style.optStyle} onClick={() => optManager('Monthly')}>Monthly</p>
                                            <p className={style.optStyle} onClick={() => optManager('Yearly')}>Yearly</p>
                                        </div> : null
                                    }
                                </div>
                                <div className={style.btns}>
                                    <button className={style.submit} onClick={alertManager}>Submit</button>
                                </div>
                            </div>

                        </div>
                        <div className={style.resbtns}>
                            <button className={style.submit} onClick={alertManager}>Submit</button>
                        </div>

                    </div>

                </div>
            </div>
            {
                alert ?
                    <div class={style.alertparent}>
                        <div class={style.alert}>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Comment here'></textarea>
                            <div className={style.alertbtns}>
                                <button onClick={alertManager} className={style.btn1}>Submit</button>
                                <button onClick={alertManager} className={style.btn2}>Cencel</button>
                            </div>
                        </div>
                    </div> : null
            }

        </>
    )
}

export default AddDevices
