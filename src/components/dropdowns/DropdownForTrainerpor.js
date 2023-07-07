import React, { useState } from 'react';
import style from './DropdownForTrainerpor.module.css'
import arrow from '../../assets/images/sidebar/dropdownArrow.svg'
import profile from '../../assets/images/sidebar/profile.svg'
import user from '../../assets/images/sidebar/User Multiple Group.svg'
import copyPaste from '../../assets/images/sidebar/Copy Paste.svg'

const DropdownForTrainerpor = () => {
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
                    <p >Trainer Panel</p>
                    <div className='flex-grow-1' onClick={toggleDropdown}>
                        <img className={isOpen ? style.rotate : style.notrotate} src={arrow} alt="" />
                    </div>
                </div>
                {isOpen ? <div className={style.optsParent}>
                    <ul className={style.opts}>
                        <li className={indicator === 'a' ? style.checkedli : null} onClick={() => indicatorManager('a')}>
                            <img src={copyPaste} alt="" />
                            My tasks
                        </li>
                    </ul>
                </div> : null}
            </div>
        </div>
    );
};

export default DropdownForTrainerpor;

