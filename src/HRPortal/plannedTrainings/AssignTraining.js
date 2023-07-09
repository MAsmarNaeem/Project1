import style from './AssignTrainings.module.css'
import SideBar from '../../components/sidebar/SideBar'
import search from '../../assets/images/employees/Search.svg'
import add from '../../assets/images/employees/Application Add.svg'
import avatar from '../../assets/images/employees/Avatar.png'
import ProfileUser from '../../components/profileUser/ProfileUser'
import { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'
function AssignTrainings() {
    const [offcanvas, setOffcanvas] = useState(false)
    let sampleData = {
        img: avatar,
        code: '3310',
        name: 'Tanner Finsha',
        cnic: '33101-1543434-2',
        phonen: '0306-56302121',
        email: 'Emetowinner@gmail.com',
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
                <SideBar />
                <HROffcanvas status={offcanvas} />
            </div>
            <ProfileUser path='/hr/profile' />
            <div className={style.subparent}>
                <div className={style.searchbar}>
                    <div className={style.sec1}>
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search Training by name' />
                    </div>
                    <div className={style.sec2}>
                        <p>Assign Training</p>
                    </div>
                </div>
                <div className={style.tableParent2}>
                    <table className={style.table}>
                        <tr className={style.headers}>
                            <td></td>
                            <td>Employee Code</td>
                            <td>Name</td>
                            <td>CNIC</td>
                            <td>Phone Number</td>
                            <td>Email</td>
                        </tr>
                        {
                            data.map((employee, i) => {
                                return (
                                    <tr className={style.tablebody} key={i}>
                                        <td><input type="checkbox" /></td>
                                        <td>
                                            <p>{employee.code}</p>
                                        </td>
                                        <td className={style.textStyle1}><img src={employee.img} alt="" /> {employee.name}</td>
                                        <td className={style.textStyle2}>{employee.cnic}</td>
                                        <td className={style.textStyle2}>{employee.phonen}</td>
                                        <td className={style.textStyle3}>{employee.email}</td>
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

export default AssignTrainings
