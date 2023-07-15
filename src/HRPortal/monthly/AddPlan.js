import ProfileUser from '../../components/profileUser/ProfileUser'
import SideBar from '../../components/sidebar/SideBar'
import style from './AddPlan.module.css'
import arrow from '../../assets/images/addEmployee/arrow.svg'
import date from '../../assets/images/employeeProfile/Calendar.svg'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'
import Navbar from '../../components/navbar/Navbar'
import { useState } from 'react'

function AddPlan() {
    const [offcanvas, setOffcanvas] = useState(false)
    const [optvalue2, setoptvalue2] = useState('something')
    const [optvalue3, setoptvalue3] = useState('something')
    const [dropd2, setdropd2] = useState(false)
    const [dropd3, setdropd3] = useState(false)
    const [optvalue, setoptvalue] = useState('something')
    const [dropd, setdropd] = useState(false)
    const optManager = (e) => {
        setdropd(!dropd)
        setoptvalue(e)
    }
    const optManager2 = (e) => {
        setdropd2(!dropd2)
        setoptvalue2(e)
    }
    const optManager3 = (e) => {
        setdropd3(!dropd3)
        setoptvalue3(e)
    }
    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
                <Navbar func={() => {
                    setOffcanvas(!offcanvas)
                }} />
                <HROffcanvas status={offcanvas} />
                <SideBar />
            </div>
            <ProfileUser path='/hr/profile' />
            <div className={style.subparent}>
                <div className={style.headers}>
                    <div className={style.spans}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={style.heading}>
                        Add Monthly Plan
                    </div>
                </div>
                <div className={style.formDivider}>
                    <div className={style.sec1}>
                        <div className={style.dropdown}>
                            <p>Month Name</p>
                            <div className={style.indicator2}>
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
                        <div className={style.inputParent}>
                            <div className={style.para}>
                                <p>Date</p>
                            </div>
                            <div>
                                <input type="date" placeholder='dd----yyyy' />
                            </div>
                        </div>
                        <div className={style.inputParent}>
                            <div className={style.para}>
                                <p>Time</p>
                            </div>
                            <div>
                                <input type="time" placeholder='(e.g) 9:00 AM to 6:00 PM' />
                            </div>
                        </div>
                   
                        <div className={style.dropdown}>
                            <p>Department</p>
                            <div className={style.indicator2}>
                                <p className={style.optStyle}>{optvalue3}</p>
                                <div onClick={() => optManager2(optvalue2)}>
                                    <img className={dropd ? style.rotate : null} src={arrow} alt="" />
                                </div>
                            </div>
                            {dropd2 ?
                                <div className={style.droper}>
                                    <p className={style.optStyle} onClick={() => optManager2('add opts')}>Add options</p>
                                    <p className={style.optStyle} onClick={() => optManager2('add opts')}>Add options</p>
                                    <p className={style.optStyle} onClick={() => optManager2('add opts')}>Add options</p>
                                    <p className={style.optStyle} onClick={() => optManager2('add opts')}>Add options</p>
                                </div> : null
                            }
                        </div>
                        <div className={style.dropdown}>
                            <p>Training</p>
                            <div className={style.indicator2}>
                                <p className={style.optStyle}>{optvalue3}</p>
                                <div onClick={() => optManager3(optvalue3)}>
                                    <img className={dropd ? style.rotate : null} src={arrow} alt="" />
                                </div>
                            </div>
                            {dropd3 ?
                                <div className={style.droper}>
                                    <p className={style.optStyle} onClick={() => optManager3('add opts')}>Add options</p>
                                    <p className={style.optStyle} onClick={() => optManager3('add opts')}>Add options</p>
                                    <p className={style.optStyle} onClick={() => optManager3('add opts')}>Add options</p>
                                    <p className={style.optStyle} onClick={() => optManager3('add opts')}>Add options</p>
                                </div> : null
                            }
                        </div>
                    </div>
                    <div className={style.sec2}>
                        <div className={style.inputParent}>
                            <div className={style.para}>
                                <p>Venue</p>
                            </div>
                            <div>
                                <input type="text" placeholder='(e.g) Training Hall' />

                            </div>
                        </div>
                        <div className={style.inputParent}>
                            <div className={style.para}>
                                <p>Duration</p>
                            </div>
                            <div>
                                <input type="text" placeholder='(e.g) 2 Days' />

                            </div>
                        </div>
                        <div className={`${style.checkinputParent} ${style.bg}`}>
                            <div className={style.para}>
                                <p>Internal/External</p>
                            </div>
                            <div className={style.dropdown2}>
                                <div className='d-flex justify-content-between align-items-center gap-2' >
                                    <input style={{ width: '26px', height: '36px' }} type="radio" />
                                    <p className={style.paraind}>Internal</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center gap-2' >
                                    <input style={{ width: '26px', height: '36px' }} type="radio" />
                                    <p className={style.paraind}>External</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.btn}>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default AddPlan
