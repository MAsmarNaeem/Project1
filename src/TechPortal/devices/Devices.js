import style from './Devices.module.css'
import search from '../../assets/images/employees/Search.svg'
import add from '../../assets/images/employees/Application Add.svg'
import ProfileUser from '../../components/profileUser/ProfileUser'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'
import Navbar from '../../components/navbar/Navbar'
import TechPortalSidebar from '../../components/sidebar/TechPortalSidebar'
import TechOffcanvas from '../../components/offcanvas/TechOffcanvas'


function Devices() {
    const [offcanvas, setOffcanvas] = useState(false)
    let sampledata = {
        code: '3310',
        name: 'Weaving Machine',
        location: 'Main Hall',
        daily: 'selected',
        weekly: 'selected',
        mothly: 'selected',
        yearly: 'selected',
    }
    let data = [
        sampledata,
        sampledata,
        sampledata,
        sampledata,
        sampledata,
        sampledata,
        sampledata,
        sampledata,
    ]
    let next = 'Next page >>'

    const navigate = useNavigate()
    const pushAddEmployee = () => {
        navigate('/tech/adddevice')
    }
    const pushEmployeeProfile = () => {
        alertManager()
    }
    const [alert, setalert] = useState(false)
    const alertManager = () => {
        setalert(!alert)
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
                <div className={style.subparent}>
                    <ProfileUser path='/hr/profile' />
                    <div className={style.searchbar}>
                        <div className={style.sec1}>
                            <img src={search} alt="" />
                            <input type="text" placeholder='Search Measuring Device by name or code' />
                        </div>
                        <div onClick={pushAddEmployee} className={style.sec2}>
                            <img src={add} alt="" />
                            <p>Add Device</p>
                        </div>
                    </div>
                    <div className={style.tableParent}>

                        <table className={style.table}>
                            <tr className={style.headers}>
                                <td>Measuring Device Code</td>
                                <td>Measuring Device Name</td>
                                <td>Measuring Device Location</td>
                                <td>Daily</td>
                                <td>Weekly</td>
                                <td>Monthly</td>
                                <td>Yearly</td>
                            </tr>
                            {
                                data.map((machaine, i) => {
                                    return (
                                        <tr className={style.tablebody} key={i}>
                                            <td className={style.txtStyle1}>
                                                <p>{machaine.code}</p>
                                            </td>
                                            <td className={style.txtStyle2}>
                                                {machaine.name}</td>
                                            <td className={style.txtStyle4}>{machaine.location}</td>
                                            <td className={style.txtStyle3}>{machaine.daily} <button className={style.viewBtn} onClick={pushEmployeeProfile}>
                                                View
                                            </button></td>
                                            <td className={style.txtStyle3}>{machaine.weekly} <button className={style.viewBtn} onClick={pushEmployeeProfile}>
                                                View
                                            </button></td>
                                            <td className={style.txtStyle3}>{machaine.mothly} <button className={style.viewBtn} onClick={pushEmployeeProfile}>
                                                View
                                            </button></td>
                                            <td className={style.txtStyle3}>{machaine.yearly} <button className={style.viewBtn} onClick={pushEmployeeProfile}>
                                                View
                                            </button></td>
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
                {/* {
                alert ? */}
                {/* } */}

            </div>
            {
                alert ?
                    <div class={style.alertparent}>
                        <div class={style.alert}>
                            <p class={style.msg}>This Device has serious defect.
                                It has to be maintained daily</p>
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

export default Devices
