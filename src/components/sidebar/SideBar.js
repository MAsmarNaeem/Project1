import style from './Sidebar.module.css'
import logo from '../../assets/images/sidebar/logo.svg'
import DropDowns from '../dropdowns/DropDowns'

function SideBar() {
    return (
        <div className={`${style.sidebarParent}`}>
            <div className={style.logo}>
                <img className={`${style.logoImg}`} src={logo} alt="logo" />
            </div>
            <div>
                <DropDowns />
            </div>
        </div>
    )
}

export default SideBar
