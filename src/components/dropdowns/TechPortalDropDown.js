import React, { useState } from 'react';
import style from './DropDowns.module.css'
import arrow from '../../assets/images/sidebar/dropdownArrow.svg'
import profile from '../../assets/images/sidebar/profile.svg'
import SClock from '../../assets/images/techPortal/SClock.svg'
import menu2 from '../../assets/images/techPortal/colorswatches.svg'
import { useNavigate } from 'react-router-dom';

const TechPortalDropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [indicator, setIndicator] = useState('');
    const navigate = useNavigate()

    const toggleDropdown = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };
    const indicatorManager = (e) => {
        setIndicator(e)
        navigate(e)
    }
    return (
        <div className={style.parent}>
            <div className={style.dropdown}>
                <div className={style.content}>
                    <div >
                        <img src={profile} alt="" />
                    </div>
                    <p >Tech Panel</p>
                    <div className='flex-grow-1' onClick={toggleDropdown}>
                        <img className={isOpen ? style.rotate : style.notrotate} src={arrow} alt="" />
                    </div>
                </div>
                {isOpen ? <div className={style.optsParent}>
                    <ul className={style.opts}>
                        <li className={indicator === '/tech/machines' ? style.checkedli : null} onClick={() => indicatorManager('/tech/machines')}>
                            <img src={SClock} alt="" />
                            Machinery
                        </li>
                        <li className={indicator === '/tech/devices' ? style.checkedli : null} onClick={() => indicatorManager('/tech/devices')}>
                            <img src={menu2} alt="" />
                            Measuring Devices
                        </li>
                    </ul>
                </div> : null}
            </div>
        </div>
    );
};

export default TechPortalDropDown;

