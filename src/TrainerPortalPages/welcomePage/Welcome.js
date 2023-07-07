import React from 'react'
import style from './Welcome.module.css'
import welcomeImg from '../../assets/images/sidebar/welcomeimg.svg'
import SidebarForTrainerpor from '../../components/sidebar/SidebarForTrainerpor'

function Welcome() {
  return (
    <div className={`${style.parent}`}>
      <div className={`${style.sidebar}`}>
        <SidebarForTrainerpor/>
      </div>
      <div className={style.welcome}>
        <img src={welcomeImg} alt="" />
        <p>Welcome to Trainer Panel!</p>
      </div>
    </div>
  )
}

export default Welcome
