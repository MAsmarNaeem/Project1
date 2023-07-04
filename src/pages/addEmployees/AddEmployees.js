import SideBar from '../../components/sidebar/SideBar'
import style from './AddEmployees.module.css'

function AddEmployees() {
    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
                <SideBar />
            </div>
            <div className={style.addEmployee}>


            </div>
        </div>
    )
}

export default AddEmployees
