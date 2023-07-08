import ProfileUser from '../../components/profileUser/ProfileUser'
import style from './AddPersom.module.css'
import SideBar from '../../components/sidebar/SideBar'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'
import { useState } from 'react'

function AddPerson() {
    const [offcanvas, setOffcanvas] = useState(false)
    const navigate = useNavigate()
    const showrec = () => {
        navigate('/hr/hiriningrec')
    }
    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
            <Navbar func={() => {
                        setOffcanvas(!offcanvas)
                    }} />
                    <SideBar />
                    <HROffcanvas path='/hr/profile' status={offcanvas} />
            </div>
            <ProfileUser path='/hr/profile'/>
            <div className={style.subparent}>
                <div className={style.formDivider}>
                    <div className={style.sec1}>
                        <div className={style.headers}>
                            <div className={style.spans}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className={style.para}>
                                Employee Details
                            </div>
                        </div>

                        <div className={style.card1bodyp}>
                            <div className={style.card1body}>
                                <div style={{ width: '70%', }} className='d-flex justify-content-start align-items-start'>
                                    <p className={style.paraincard}>Station</p>
                                </div>
                                <div className={style.inputp}>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className={style.card1body}>
                                <div style={{ width: '70%', }} className='d-flex justify-content-start align-items-start'>
                                    <p className={style.paraincard}>Job Title</p>
                                </div>
                                <div className={style.inputp}>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className={style.card1body}>
                                <div style={{ width: '70%', }} className='d-flex justify-content-start align-items-start'>
                                    <p className={style.paraincard}>Department</p>
                                </div>
                                <div className={style.inputp}>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className={style.card1body}>
                                <div style={{ width: '70%', }} className='d-flex justify-content-start align-items-start'>
                                    <p className={style.paraincard}>Section</p>
                                </div>
                                <div className={style.inputp}>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className={style.card1body}>
                                <div style={{ width: '70%', }} className='d-flex justify-content-start align-items-start'>
                                    <p className={style.paraincard}>Supervisor</p>
                                </div>
                                <div className={style.inputp}>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.sec2}>
                        <div className={style.sec1p1}>
                            <div className={style.headers}>
                                <div className={style.spans}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className={style.para}>
                                    Employement Terms
                                </div>
                            </div>
                            <div className={` ${style.bg} ${style.checksParent}`}>
                                <div className={style.checks}>
                                    <div className='d-flex justify-content-between align-items-center gap-2' >
                                        <input style={{ width: '26px', height: '36px' }} type="radio" />
                                        <p className={style.paraind}>High</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center gap-2' >
                                        <input style={{ width: '26px', height: '36px' }} type="radio" />
                                        <p className={style.paraind}>Medium</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center gap-2' >
                                        <input style={{ width: '26px', height: '36px' }} type="radio" />
                                        <p className={style.paraind}>Average</p>
                                    </div>
                                </div>
                            </div>
                            <div className={` ${style.bg} ${style.checksParent}`}>
                                <div className={style.checks}>
                                    <div className='d-flex justify-content-between align-items-center gap-2' >
                                        <input style={{ width: '26px', height: '36px' }} type="radio" />
                                        <p className={style.paraind}>Part Time</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center gap-2' >
                                        <input style={{ width: '26px', height: '36px' }} type="radio" />
                                        <p className={style.paraind}>Temporary</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center gap-2' >
                                        <input style={{ width: '26px', height: '36px' }} type="radio" />
                                        <p className={style.paraind}>Internship</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={style.sec1p2}>
                            <div className={style.headers}>
                                <div className={style.spans}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className={style.para}>
                                    Salary
                                </div>

                            </div>
                            <div className={style.card1bodyp}>
                                <div className={style.card1body}>
                                    <div style={{ width: '70%', }} className='d-flex justify-content-start align-items-start'>
                                        <p className={style.paraincard}>Cross Salary</p>
                                    </div>
                                    <div className={style.inputp}>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className={style.card1body}>
                                    <div style={{ width: '70%', }} className='d-flex justify-content-start align-items-start'>
                                        <p className={style.paraincard}>Next Salary</p>
                                    </div>
                                    <div className={style.inputp}>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className={` ${style.bg} ${style.checksParent2}`}>
                                <div className={style.checks}>
                                    <div className='d-flex justify-content-between align-items-center gap-2' >
                                        <input style={{ width: '26px', height: '36px' }} type="radio" />
                                        <p className={style.paraind}>Basic Salary</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center gap-2' >
                                        <input style={{ width: '26px', height: '36px' }} type="radio" />
                                        <p className={style.paraind}>Allowance</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center gap-2' >
                                        <input style={{ width: '26px', height: '36px' }} type="radio" />
                                        <p className={style.paraind}>Incentives</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={style.btn}>
                    <button onClick={showrec}>Next Page</button>
                </div>
            </div>
        </div>
    )
}

export default AddPerson
