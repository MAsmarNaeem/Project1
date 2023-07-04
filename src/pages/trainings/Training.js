import style from './Trainings.module.css'
import SideBar from '../../components/sidebar/SideBar'
import profileImg from '../../assets/images/hrprofile/Dropdown.svg'
import circularuser from '../../assets/images/hrprofile/UserCircle.svg'
import logout from '../../assets/images/hrprofile/Logout.svg'
import { useState } from 'react'
import hrStyle from '../HRProfile/HRProfile.module.css'
import search from '../../assets/images/employees/Search.svg'
import add from '../../assets/images/employees/Application Add.svg'
import avatar from '../../assets/images/employees/Avatar.png'
function Trainings() {
    const [isOpen, setIsOpen] = useState(false)
    const toggler = () => {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }
    let data = [
        {
            img: avatar,
            code: '3310',
            name: 'Tanner Finsha',
            cnic: '33101-1543434-2',
            phonen: '0306-56302121',
            email: 'Emetowinner@gmail.com',
            dep: 'Manufacture',
            status: 'Not Trained'
        },
        {
            img: avatar,
            code: '3310',
            name: 'Emeto  Winner',
            cnic: '33101-1543434-2',
            phonen: '0306-56302121',
            email: 'Emetowinner@gmail.com',
            dep: 'Manufacture',
            status: 'Manufacture'
        },
        {
            img: avatar,
            code: '3310',
            name: 'Tassy Omah',
            cnic: '33101-1543434-2',
            phonen: '0306-56302121',
            email: 'Emetowinner@gmail.com',
            dep: 'Manufacture',
            status: 'Manufacture'
        },
        {
            img: avatar,
            code: '3310',
            name: 'James Muriel',
            cnic: '33101-1543434-2',
            phonen: '0306-56302121',
            email: 'Emetowinner@gmail.com',
            dep: 'Manufacture',
            status: 'Manufacture'
        },
        {
            img: avatar,
            code: '3310',
            name: 'Emeto  Winner',
            cnic: '33101-1543434-2',
            phonen: '0306-56302121',
            email: 'Emetowinner@gmail.com',
            dep: 'Manufacture',
            status: 'Manufacture'
        },
        {
            img: avatar,
            code: '3310',
            name: 'Tassy Omah',
            cnic: '33101-1543434-2',
            phonen: '0306-56302121',
            email: 'Emetowinner@gmail.com',
            dep: 'Manufacture',
            status: 'Manufacture'
        },
        {
            img: avatar,
            code: '3310',
            name: 'James Muriel',
            cnic: '33101-1543434-2',
            phonen: '0306-56302121',
            email: 'Emetowinner@gmail.com',
            dep: 'Manufacture',
            status: 'Manufacture'
        },
        {
            img: avatar,
            code: '3310',
            name: 'Emeto  Winner',
            cnic: '33101-1543434-2',
            phonen: '0306-56302121',
            email: 'Emetowinner@gmail.com',
            dep: 'Manufacture',
            status: 'Manufacture'
        }
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
                            <td>Employee Code</td>
                            <td>Name</td>
                            <td className={style.onetwenty}>Documents</td>
                        </tr>
                        {
                            data.map((employee, i) => {
                                return (
                                    <tr className={style.tablebody} key={i}>
                                        <td>
                                            <p>{employee.code}</p>
                                        </td>
                                        <td><img src={employee.img} alt="" /> {employee.name}</td>
                                        <td className={style.onetwenty}><button className={style.downloadD}>
                                            Download
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

export default Trainings
