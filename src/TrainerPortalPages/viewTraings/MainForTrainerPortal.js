import style from './Main.module.css'
import search from '../../assets/images/employees/Search.svg'
import avatar from '../../assets/images/employees/Avatar.png'
import ProfileUser from '../../components/profileUser/ProfileUser'
import Switch from '../../components/switch/Switch'
import SidebarForTrainerpor from '../../components/sidebar/SidebarForTrainerpor'
import Navbar from '../../components/navbar/Navbar'
import Offcanvas from '../../components/offcanvas/Offcanvas'
import { useState } from 'react'
import Btns from '../../components/btns/Btns'


function MainForTrainerPortal() {
    const [offcanvas, setOffcanvas] = useState(false)
    let sampleData = {
        img: avatar,
        code: '3310',
        name: 'Tanner Finsha',
        cnic: '33101-1543434-2',
        phonen: '0306-56302121',
        email: 'Emetowinner@gmail.com',
        dep: 'Manufacture',
        status: 'pending',
        marks: 36

    }
    let data = [
        sampleData,
        sampleData,
        sampleData,
        sampleData,
        sampleData,
        sampleData,
        sampleData,
        sampleData,
    ]
    let next = 'Next page >>'
    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
                <Navbar func={() => {
                    setOffcanvas(!offcanvas)
                }} />
                <Offcanvas status={offcanvas} />
                <SidebarForTrainerpor />
            </div>
            <div className={style.subparent}>
                <p className={style.redtxt}>Employees who are getting trained</p>
                <ProfileUser path='/trainer/profile' />
                <div className={style.searchbar}>
                    <div className={style.sec1}>
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search Training by name' />
                    </div>
                </div>
                <div className={style.tableParent}>
                    <table className={style.table}>
                        <tr className={style.headers}>
                            <td>Employee Code</td>
                            <td>Name</td>
                            <td>CNIC</td>
                            <td>Phone Number</td>
                            <td>Email</td>
                            <td>Pass/Fail</td>
                            <td>Attendence</td>
                            <td>Obtained Marks</td>
                            <td>Remarks</td>
                            <td>Generate Certificate</td>
                        </tr>
                        {
                            data.map((employee, i) => {
                                return (
                                    <tr className={style.tablebody} key={i}>
                                        <td>
                                            <p>{employee.code}</p>
                                        </td>
                                        <td className={style.name}><img src={employee.img} alt="" /> {employee.name}</td>
                                        <td>{employee.cnic}</td>
                                        <td>{employee.phonen}</td>
                                        <td>{employee.email}</td>
                                        {/* <td>{employee.status}</td> */}
                                        <td>{employee.attendence ? <Switch state={employee.attendence} /> : <Switch state={employee.attendence} />}</td>
                                        <td>
                                            {employee.pass ? <Switch state={employee.pass} /> : <Switch state={employee.pass} />}
                                        </td>
                                        <td>{employee.marks}</td>
                                        <td>
                                            <p className={style.btn}>Click Here</p>
                                        </td>
                                        <td>
                                            <p className={style.btn}>Click Here</p>
                                        </td>
                                    </tr>
                                )

                            })
                        }
                    </table>
                </div>
                <Btns />
            </div>
        </div>
    )
}

export default MainForTrainerPortal
