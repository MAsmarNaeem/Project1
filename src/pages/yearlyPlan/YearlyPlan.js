import style from './YearlyPlan.module.css'
import SideBar from '../../components/sidebar/SideBar'
import profileImg from '../../assets/images/hrprofile/Dropdown.svg'
import circularuser from '../../assets/images/hrprofile/UserCircle.svg'
import logout from '../../assets/images/hrprofile/Logout.svg'
import { useState } from 'react'
import hrStyle from '../HRProfile/HRProfile.module.css'
import search from '../../assets/images/employees/Search.svg'
import add from '../../assets/images/employees/Application Add.svg'
function YearlyPlan() {
    const [isOpen, setIsOpen] = useState(false)
    const toggler = () => {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }
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
    let next = 'Next page >>'
    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
                <SideBar />
            </div>
            <div className={style.subparent}>
                <div className={hrStyle.userInfo}>
                    <img src={profileImg} onClick={toggler} alt="" />
                    {
                        isOpen ?
                            <div className={hrStyle.dropdown}>
                                <div>
                                    <img src={circularuser} alt="" />
                                    <p>Profile</p>
                                </div>
                                <div>
                                    <img src={logout} alt="" />
                                    <p>Logout</p>
                                </div>
                            </div> : null
                    }
                </div>
                <div className={style.searchbar}>
                    <div className={style.sec1}>
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search Employee by name or id' />
                    </div>
                    <div className={style.sec2}>
                        <img src={add} alt="" />
                        <p>Add Employee</p>
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
                                        <td ><button className={style.view}>
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
        </div>
    )
}

export default YearlyPlan
