import React from 'react';
import style from './hero.module.css';
import arrow_btn from '../../Assets/arrow_btn.png';
import play_icon from '../../Assets/play_icon.png';
import pause_icon from '../../Assets/pause_icon.png';


const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className={style.hero}>
        <div className={style.hero_text}>
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className={style.hero_explore}>
            <p>Explore the features</p>
            <img src={arrow_btn} alt="" />
        </div>
        <div className={style.hero_dot_play}>
            <ul className={style.hero_dots}>
                <li onClick={()=>setHeroCount(0)} className={heroCount===0?`${style.hero_dot} ${style.orange}` : style.hero_dot}></li>
                <li onClick={()=>setHeroCount(1)} className={heroCount===1?`${style.hero_dot} ${style.orange}` : style.hero_dot}></li>
                <li onClick={()=>setHeroCount(2)} className={heroCount===2?`${style.hero_dot} ${style.orange}` : style.hero_dot}></li> 
            </ul>
            <div className={style.hero_play}>
                <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
                <p>See the Video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero;