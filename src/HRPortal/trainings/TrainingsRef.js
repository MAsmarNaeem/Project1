import SideBar from '../../components/sidebar/SideBar'
import style from './TrainingsRef.module.css'
import search from '../../assets/images/employees/Search.svg'
import add from '../../assets/images/employees/Application Add.svg'
import ProfileUser from '../../components/profileUser/ProfileUser'
import Navbar from '../../components/navbar/Navbar'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function TrainingsRef() {
    const [offcanvas, setOffcanvas] = useState(false)
    let data = [
        'Intro To Computing',
        'Intro To Computing',
        'Intro To Computing',
        'Intro To Computing',
        'Intro To Computing',
        'Intro To Computing',
        'Intro To Computing',
        'Intro To Computing',
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
            <div className={style.subparent}>
                <ProfileUser path='/hr/profile' />
                <div className={style.searchbar}>
                    <div className={style.sec1}>
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search Training by name' />
                    </div>
                    <div className={style.sec2} onClick={() => {
                        navigate('/hr/addtraining')
                    }}>
                        <img src={add} alt="" />
                        <p>Add New</p>
                    </div>
                </div>
                <div className={style.tableParent}>

                    <table className={style.table}>
                        <tr className={style.headers}>
                            <td>Training ID</td>
                            <td>Training Name</td>
                            <td>Description</td>
                            <td>Evaluation Criteria </td>
                            <td>Documents</td>
                        </tr>
                        {
                            data.map((employee, i) => {
                                return (
                                    <tr className={style.tablebody} key={i}>
                                        <td className={style.simpleContent}>
                                            <p>
                                                {i + 116}
                                            </p>
                                        </td>
                                        <td className={style.simpleContent}>{employee}</td>
                                        <td >

                                            <p onClick={() => {
                                                navigate('/hr/training/info')
                                            }} className={style.click}>Click Here</p>
                                        </td>
                                        <td >

                                            <p onClick={() => {
                                                navigate('/hr/training/info')
                                            }} className={style.click}>Click Here</p>
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

export default TrainingsRef
