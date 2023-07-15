import SideBar from '../../components/sidebar/SideBar'
import style from './Employees.module.css'
import search from '../../assets/images/employees/Search.svg'
import add from '../../assets/images/employees/Application Add.svg'
import avatar from '../../assets/images/employees/Avatar.png'
import ProfileUser from '../../components/profileUser/ProfileUser'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'
import Navbar from '../../components/navbar/Navbar'


function Employees() {
    const [offcanvas, setOffcanvas] = useState(false)
    let sampledata = {
        img: avatar,
        code: '3310',
        name: 'Tanner Finsha',
        cnic: '33101-1543434-2',
        phonen: '0306-56302121',
        email: 'Emetowinner@gmail.com',
        dep: 'Manufacture',
        status: 'Not Trained'
    }
    let data = [
        sampledata,
        sampledata,
        sampledata,
        // sampledata,
        // sampledata,
        // sampledata,
        // sampledata,
        // sampledata,
    ]
    let next = 'Next page >>'

    const navigate = useNavigate()
    const pushAddEmployee = () => {
        navigate('/hr/addemployee')
    }
    const pushEmployeeProfile = () => {
        navigate('/hr/employeeProfile')
    }
    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
                <Navbar func={() => {
                    setOffcanvas(!offcanvas)
                }} />
                <SideBar />
                <HROffcanvas status={offcanvas} />
            </div>
            <div className={style.subparent}>
                <ProfileUser path='/hr/profile' />
                <div className={style.searchbar}>
                    <div className={style.sec1}>
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search Employee by name or id' />
                    </div>
                    <div onClick={pushAddEmployee} className={style.sec2}>
                        <img src={add} alt="" />
                        <p>Add Employee</p>
                    </div>
                </div>
                <div className={style.tableParent}>

                    <table className={style.table}>
                        <tr className={style.headers}>
                            <td>Employee ID</td>
                            <td>Name</td>
                            <td>CNIC</td>
                            <td>Phone Number</td>
                            <td>Email</td>
                            <td>Department</td>
                            <td>Training Status</td>
                            <td>Action</td>
                            <td>CV Certificate</td>
                        </tr>
                        {
                            data.map((employee, i) => {
                                return (
                                    <tr className={style.tablebody} key={i}>
                                        <td className={style.txtStyle1}>
                                            <p>{employee.code}</p>
                                        </td>
                                        <td className={style.txtStyle2}><img src={employee.img} alt="" /> {employee.name}</td>
                                        <td className={style.txtStyle4}>{employee.cnic}</td>
                                        <td className={style.txtStyle4}>{employee.phonen}</td>
                                        <td className={style.txtStyle3}>{employee.email}</td>
                                        <td className={style.txtStyle4}>{employee.dep}</td>
                                        <td className={employee.status === 'Trained' ? style.txtStyle5 : style.txtStyle6}>{employee.status}</td>
                                        <td>
                                            <button className={style.viewBtn} onClick={pushEmployeeProfile}>
                                                View
                                            </button>
                                        </td>
                                        <td>
                                            <button className={style.downloadBtn}>
                                                Download
                                            </button>
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
    )
}

export default Employees
