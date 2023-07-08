import style from './Trainers.module.css'
import SideBar from '../../components/sidebar/SideBar'
import search from '../../assets/images/employees/Search.svg'
import add from '../../assets/images/employees/Application Add.svg'
import avatar from '../../assets/images/employees/Avatar.png'
import ProfileUser from '../../components/profileUser/ProfileUser'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'
import { useState } from 'react'
function Trainers() {
    const [offcanvas, setOffcanvas] = useState(false)
    let sampleData = {
        code: '3310',
        name: 'Tanner Finsha',
        img: avatar,
        age: '24 Years',
        exp: '2 Years',
        email: 'Emetowinner@gmail.com'
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
    const navigate = useNavigate()
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
                <div className={style.searchbar}>
                    <div className={style.sec1}>
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search Trainer by name or id' />
                    </div>
                    <div onClick={() => {
                        navigate('/hr/addtrainer')
                    }} className={style.sec2} >
                        <img src={add} alt="" />
                        <p>Add Trainer</p>
                    </div>
                </div>
                <div className={style.tableParent2}>
                    <table className={style.table}>
                        <tr className={style.headers}>
                            <td>Employee Code</td>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Email</td>
                            <td>Experience</td>
                            <td>Speciality</td>
                            <td>Documents</td>
                        </tr>
                        {
                            data.map((employee, i) => {
                                return (
                                    <tr className={style.tablebody} key={i}>
                                        <td>
                                            <p>{employee.code}</p>
                                        </td>
                                        <td><img src={employee.img} alt="" /> {employee.name}</td>
                                        <td>{employee.age}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.exp}</td>
                                        <td >
                                            <p onClick={() => {
                                            }} className={style.view}>View</p>
                                        </td>
                                        <td >
                                            <p className={style.download}>Download</p>
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

export default Trainers
