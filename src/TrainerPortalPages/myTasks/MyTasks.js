import style from './Mytasks.module.css'
import search from '../../assets/images/employees/Search.svg'
import add from '../../assets/images/employees/Application Add.svg'
import ProfileUser from '../../components/profileUser/ProfileUser'
import SidebarForTrainerpor from '../../components/sidebar/SidebarForTrainerpor'
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
    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
                <SidebarForTrainerpor />
            </div>
                <ProfileUser />
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

export default MyTasks
