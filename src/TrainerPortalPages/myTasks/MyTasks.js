import style from './Mytasks.module.css'
import search from '../../assets/images/employees/Search.svg'
import ProfileUser from '../../components/profileUser/ProfileUser'
import SidebarForTrainerpor from '../../components/sidebar/SidebarForTrainerpor'
import { useNavigate } from 'react-router-dom'
import Offcanvas from '../../components/offcanvas/Offcanvas'
import Navbar from '../../components/navbar/Navbar'
import { useState } from 'react'
function MyTasks() {
    let data = [
        'Intro to Computing',
        'Intro to Computing',
        'Intro to Computing',
        'Intro to Computing',
        'Intro to Computing',
        'Intro to Computing',
        'Intro to Computing',
        'Intro to Computing',
    ]
    let next = 'Next page >>'
    const [offcanvas, setOffcanvas] = useState(false)
    const navigate = useNavigate()
    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
                <SidebarForTrainerpor />
                <Navbar func={() => {
                    setOffcanvas(!offcanvas)
                }} />
                <Offcanvas status={offcanvas} />
            </div>
            <ProfileUser path='/trainer/profile' />
            <div className={style.subparent}>
                <div className={style.searchbar}>
                    <div className={style.sec1}>
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search by name ' />
                    </div>
                </div>
                <div className={style.tableParent2}>
                    <table className={style.table}>
                        <tr className={style.headers}>
                            <td>Trainer Name</td>
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
                                            navigate('/trainer/traininginfo')
                                        }} className={style.view}>
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

export default MyTasks
