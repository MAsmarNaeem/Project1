import style from './YearlyPlan.module.css'
import SideBar from '../../components/sidebar/SideBar'
import search from '../../assets/images/employees/Search.svg'
import add from '../../assets/images/employees/Application Add.svg'
import ProfileUser from '../../components/profileUser/ProfileUser'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'
import { useState } from 'react'
import Btns from '../../components/btns/Btns'
function YearlyPlan() {
    const [offcanvas, setOffcanvas] = useState(false)
    let data = [
        '2023',
        '2023',
        '2023',
        '2023',
        '2023',
        '2023',
        '2023',
        '2023',
    ]
    const navigate = useNavigate()

    let next = 'Next page >>'
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
                        <input type="text" placeholder='Search Year By Name' />
                    </div>
                    <div onClick={() => {
                        navigate('/hr/giveplan')
                    }} className={style.sec2}>
                        <img src={add} alt="" />
                        <p>Add New</p>
                    </div>
                </div>
                <div className={style.tableParent2}>
                    <table className={style.table}>
                        <tr className={style.headers}>
                            <td>Year</td>
                            <td>Action</td>
                        </tr>
                        {
                            data.map((year, i) => {
                                return (
                                    <tr className={style.tablebody} key={i}>
                                        <td>
                                            <p>{year}</p>
                                        </td>
                                        <td ><button onClick={() => {
                                            navigate('/hr/selectmonth')
                                        }} className={style.view}>
                                            View
                                        </button></td>
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

export default YearlyPlan
