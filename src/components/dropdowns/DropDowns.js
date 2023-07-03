import React, { useState } from 'react';
import style from './DropDowns.module.css'
import arrow from '../../assets/images/sidebar/dropdownArrow.svg'
import profile from '../../assets/images/sidebar/profile.svg'
import user from '../../assets/images/sidebar/User Multiple Group.svg'
import clipboardChecked from '../../assets/images/sidebar/Clipboard Check.svg'
import calendar from '../../assets/images/sidebar/Blank Calendar.svg'
import copyPaste from '../../assets/images/sidebar/Copy Paste.svg'
import lift from '../../assets/images/sidebar/Lift.svg'
import pageS from '../../assets/images/sidebar/Page Setting.svg'
import addLayer from '../../assets/images/sidebar/Add Layer 2.svg'

const DropDowns = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [indicator, setIndicator] = useState('a');

    const toggleDropdown = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };
    const indicatorManager = (e) => {
        setIndicator(e)
    }

    return (
        <div className={style.parent}>
            <div className={style.dropdown}>
                <div className={style.content}>
                    <div >
                        <img src={profile} alt="" />
                    </div>
                    <p >HR Panel</p>
                    <div className='flex-grow-1' onClick={toggleDropdown}>
                        <img className={isOpen ? style.rotate : style.notrotate} src={arrow} alt="" />
                    </div>
                </div>
                {isOpen ? <div className={style.optsParent}>
                    <ul className={style.opts}>
                        <li className={indicator === 'a' ? style.checkedli : null} onClick={() => indicatorManager('a')}>
                            <img src={user} alt="" />
                            Employees
                        </li>
                        <li className={indicator === 'b' ? style.checkedli : null} onClick={() => indicatorManager('b')}>
                            <img src={copyPaste} alt="" />
                            Training Records</li>
                        <li className={indicator === 'c' ? style.checkedli : null} onClick={() => indicatorManager('c')}>
                            <img src={pageS} alt="" />
                            Trainings</li>
                        <li className={indicator === 'd' ? style.checkedli : null} onClick={() => indicatorManager('d')}>
                            <img src={addLayer} alt="" />
                            Trainers</li>
                        <li className={indicator === 'e' ? style.checkedli : null} onClick={() => indicatorManager('e')}>
                            <img src={lift} alt="" />
                            Personal Recuisition</li>
                        <li className={indicator === 'f' ? style.checkedli : null} onClick={() => indicatorManager('f')}>
                            <img src={calendar} alt="" />
                            Yearly Plan
                        </li>
                        <li className={indicator === 'g' ? style.checkedli : null} onClick={() => indicatorManager('g')}>
                            <img src={clipboardChecked} alt="" />
                            Monthly Plan
                        </li>
                    </ul>
                </div> : null}
            </div>
        </div>
    );
};

export default DropDowns;

