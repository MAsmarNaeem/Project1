import SideBar from '../../components/sidebar/SideBar'
import style from './Main.module.css'
import search from '../../assets/images/employees/Search.svg'
import add from '../../assets/images/employees/Application Add.svg'
import ProfileUser from '../../components/profileUser/ProfileUser'
import { useNavigate } from 'react-router-dom'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'
import Navbar from '../../components/navbar/Navbar'
import { useState } from 'react'


function Main() {
    const [offcanvas, setOffcanvas] = useState(false)
    const [reason, setReason] = useState('add the reson')
    let sample = {
        station: 'New York',
        jobTitle: 'Software Engineer',
        Supervisor: 'Taskeen',
        department: 'Taskeen',
        status: 'pending',
        reason: "somthing"
    }
    let data = [
        sample,
        sample,
        sample,
        sample,
        sample,
        sample,
        sample,
        sample,
    ]
    let next = 'Next page >>'

    const navigate = useNavigate()
    const showform = () => {
        navigate('/hr/addpersonalrec')
    }
    const [alert, setalert] = useState(false)
    const [alert2, setalert2] = useState(false)
    const alertManager = () => {
        setalert(!alert)
    }
    const alertManager2 = (e) => {
        setalert2(!alert2)
        setReason(e)

    }
    return (
        <>
            <div className={style.parent}>
                <div className={style.sidebar}>
                    <Navbar func={() => {
                        setOffcanvas(!offcanvas)
                    }} />
                    <HROffcanvas path='/hr/profile' status={offcanvas} />
                    <SideBar />
                </div>
                <div className={style.subparent}>
                    <ProfileUser path='/hr/profile' />
                    <div className={style.searchbar}>
                        <div className={style.sec1}>
                            <img src={search} alt="" />
                            <input type="text" placeholder='Search by name ' />
                        </div>
                        <div className='d-flex'>
                            <div onClick={showform} className={style.sec2}>
                                <img src={add} alt="" />
                                <p>Add New</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.tableParent}>

                        <table className={style.table}>
                            <tr className={style.headers}>
                                <td>Station</td>
                                <td>job title</td>
                                <td>Supervisor</td>
                                <td>Department</td>
                                <td>Action</td>
                                <td>Action</td>
                                <td></td>
                                <td>Status</td>
                                <td>Reason</td>
                            </tr>
                            {
                                data.map((employee, i) => {
                                    return (
                                        <tr className={style.tablebody} key={i}>
                                            <td className={style.textStyle2}>{employee.station}</td>
                                            <td className={style.textStyle3}>{employee.jobTitle}</td>
                                            <td className={style.textStyle3}>{employee.Supervisor}</td>
                                            <td className={style.textStyle3}>{employee.department}</td>
                                            <td ><button onClick={() => {
                                                navigate('/hr/showrecdetails')
                                            }} className={style.viewBtn}>View</button>
                                            </td>
                                            <td >
                                                <button className={style.viewBtn2}>Approve</button>
                                                <button onClick={alertManager} className={style.orangebtn}>Disapprove</button>
                                            </td>
                                            <td className={style.textStyle3}></td>
                                            <td className={employee.status === 'pending' ? `${style.status} ${style.blue}` : employee.status === 'positive' ? `${style.status} ${style.green}` : `${style.status} ${style.red}`}>{employee.status}</td>
                                            <td ><button onClick={() => alertManager2(employee.reason)} className={style.viewBtn}>View</button>
                                            </td>
                                        </tr>
                                    )

                                })
                            }
                        </table>
                    </div>
                    <div className={style.next}>
                        <button>
                            {next}
                        </button>
                    </div>
                </div>
            </div>
            {
                alert ?
                    <div class={style.alertparent}>
                        <div class={style.alert}>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Reason here'></textarea>
                            <div className={style.alertbtns}>
                                <button onClick={alertManager} className={style.btn1}>Submit</button>
                                <button onClick={alertManager} className={style.btn2}>Cencel</button>
                            </div>
                        </div>
                    </div> : null
            }
            {
                alert2 ?
                    <div class={style.alertparent}>
                        <div class={style.alert}>
                            <p>{reason}</p>
                            <div className={style.alertbtns}>
                                <button onClick={alertManager2} className={style.btn3}>Back</button>
                            </div>
                        </div>
                    </div> : null
            }
        </>
    )
}

export default Main
