import style from './Info.module.css'
import ProfileUser from '../../components/profileUser/ProfileUser'
import SideBar from '../../components/sidebar/SideBar'
import clock from '../../assets/images/viewtrainings/Clock.svg'
import star from '../../assets/images/viewtrainings/Star.svg'
import mos from '../../assets/images/viewtrainings/mos.svg'
import copy from '../../assets/images/employeeProfile/CopyP.svg'
import calender from '../../assets/images/employeeProfile/Calendar.svg'
import office from '../../assets/images/employeeProfile/Office.svg'
import cnic from '../../assets/images/employeeProfile/UserCard.svg'
import SidebarForTrainerpor from '../../components/sidebar/SidebarForTrainerpor'

function Info() {
    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
                <SidebarForTrainerpor />
            </div>
            <ProfileUser />
            <div className={style.subparent}>
                <div className={style.cardParent}>
                    <div className={style.card1headers}>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div>
                            <p>Info</p>
                        </div>
                    </div>
                    <div className={style.cardbody}>
                        <div className={style.sec1} >
                            <div>
                                <img src={calender} alt="" />
                                <div>
                                    <p className={style.card1para}>Plan Date</p>
                                    <p className={style.card1para2}>24-04-2023</p>
                                </div>
                            </div>
                            <div>
                                <img src={calender} alt="" />
                                <div>
                                    <p className={style.card1para}>Actual Date</p>
                                    <input className={style.calender} type="date" placeholder='dd----yyyy'/>
                                </div>
                            </div>
                            <div>
                                <img src={clock} alt="" />
                                <div>
                                    <p className={style.card1para}>Time</p>
                                    <p className={style.card1para2}>2:00 to 4:00 PM</p>
                                </div>
                            </div>
                            <div>
                                <img src={star} alt="" />
                                <div>
                                    <p className={style.card1para}>Month Name</p>
                                    <p className={style.card1para2}>August</p>
                                </div>
                            </div>
                            <div>
                                <img src={star} alt="" />
                                <div>
                                    <p className={style.card1para}>Training Description</p>
                                    <p className={style.bluetxt}>View</p>
                                </div>
                            </div>


                        </div>
                        <div className={style.sec2} >
                            <div>
                                <img src={mos} alt="" />
                                <div>
                                    <p className={style.card1para}>Venue </p>
                                    <p className={style.card1para2}>Johar Hall</p>
                                </div>
                            </div>
                            <div>
                                <img src={cnic} alt="" />
                                <div>
                                    <p className={style.card1para}>Evaluation Criteriaa</p>
                                    <p className={style.bluetxt}>View</p>
                                </div>
                            </div>
                            <div>
                                <img src={copy} alt="" />
                                <div>
                                    <p className={style.card1para}>Internal/External</p>
                                    <p className={style.card1para2}>External</p>
                                </div>
                            </div>

                            <div>
                                <img src={office} alt="" />
                                <div>
                                    <p className={style.card1para}>Trainer Name</p>
                                    <p className={style.card1para2}>John Doe</p>
                                </div>
                            </div>
                            <div>
                                <img src={cnic} alt="" />
                                <div>
                                    <p className={style.card1para}>Training Status</p>
                                    <p className={style.redtxt}>Conducted</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.cardsBtn}>
                        <div className={style.cardbtn1}><p className={style.btntxt}>Images</p><button>Upload</button></div>
                        <div className={style.cardbtn2}><p className={style.btntxt}>Training Material</p><button>Download</button></div>

                    </div>
                </div>
                <div className={style.bottomside}>
                    <p className={style.bheading}>Employess who are getting trained</p>
                    <button className={style.bottombtn}>Click Here</button>

                </div>
            </div>
        </div>
    )
}

export default Info
