import SideBar from '../../components/sidebar/SideBar'
import style from './AddEmployees.module.css'
import edit from '../../assets/images/addEmployee/edit.svg'
import profile from '../../assets/images/addEmployee/prof.svg'
import mail from '../../assets/images/hrprofile/mail.svg'
import Phone from '../../assets/images/employeeProfile/Phone.svg'
import copyp from '../../assets/images/employeeProfile/CopyP.svg'
import Location from '../../assets/images/employeeProfile/Location.svg'
import UserCard from '../../assets/images/employeeProfile/UserCard.svg'
import office from '../../assets/images/employeeProfile/Office.svg'
import arrow from '../../assets/images/addEmployee/arrow.svg'
import man from '../../assets/images/hrprofile/man.svg'
import ProfileUser from '../../components/profileUser/ProfileUser'
import { useRef, useState } from 'react'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'
import Navbar from '../../components/navbar/Navbar'
import Calendar from '../../assets/images/employeeProfile/Calendar.svg'

function AddEmployees() {
    const [offcanvas, setOffcanvas] = useState(false)
    const [alert, setalert] = useState(false)
    const alertManager = () => {
        setalert(!alert)
    }
    const fileInputRef = useRef(null);

    const uploadBtnH = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        // Process the selected file(s) or perform any desired actions
        for (let i = 0; i < files.length; i++) {
            console.log(files[i]);
            // Perform further actions with the file(s) such as uploading, validating, etc.
        }
    }


    return (
        <>
            <div className={style.parent}>
                <div className={style.sidebar}>
                    <Navbar func={() => {
                        setOffcanvas(!offcanvas)
                    }} />
                    <SideBar />
                    <HROffcanvas status={offcanvas} />
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
                                Add&nbsp;Employee
                            </div>

                        </div>
                        <div className={style.profile}>
                            <img src={profile} alt="" />
                            <div>  <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                                <img onClick={uploadBtnH} src={edit} alt="" />
                            </div>
                        </div>
                        <div className={style.userform}>
                            <div className={style.sec1}>
                                <div>
                                    <input type="text" placeholder='Name here' />
                                    <img src={profile} alt="" />
                                </div>
                                <div>
                                    <input type="number" placeholder='Phone Number here' />
                                    <img src={Phone} alt="" />
                                </div>
                                <div>
                                    <input type="email" placeholder='Email here' />
                                    <img src={mail} alt="" />
                                </div>
                                <div>
                                    <input type="number" placeholder='CNIC here' />
                                    <img src={UserCard} alt="" />
                                </div>
                                <div>
                                    <input type="text" placeholder='Qualification here' />
                                    <img src={copyp} alt="" />
                                </div>
                            </div>
                            <div className={style.sec2}>
                                <div style={{ border: '1px solid #A1A1A1' }}>
                                    <input type="text" placeholder='Department here' />
                                    <div className={style.indicator}>
                                        <img src={office} alt="" />
                                        <div>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <input type="text" placeholder='Address here' />
                                    <img src={Location} alt="" />
                                </div>
                                <div style={{ border: '1px solid #A1A1A1' }}>
                                    <input type="text" placeholder='Designation here' />
                                    <div className={style.indicator}>
                                        <img src={man} alt="" />
                                        <div>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <input className={style.inputDate} type="date"
                                        placeholder='Date of Birth' />
                                </div>
                                <div className={style.btns}>
                                    <button className={style.uploadBtn}>Upload Documents</button>
                                    <button className={style.submit} onClick={alertManager}>Submit</button>
                                </div>
                            </div>

                        </div>
                        <div className={style.resbtns}>
                            <button onClick={uploadBtnH} className={style.uploadBtn}>
                                Upload Documents
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                            <button className={style.submit} onClick={alertManager}>Submit</button>
                        </div>

                    </div>

                </div>
            </div>
            {
                alert ?
                    <div class={style.alertparent}>
                        <div class={style.alert}>
                            <p class={style.msg}>Do you want to submit this information?</p>
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

export default AddEmployees
