import React from 'react'
import './Song.css'
function Song({currentsong,setMenu,Menu}) {
  let menuHendler = () => {
    setMenu(!Menu)
  }
  return (
  <div className='song-content'>
     <div className='conteiner' style={{background: `linear-gradient(to right, ${currentsong.color[0]}, ${currentsong.color[1]})`}}>
      <div className='Song'>
      <button className='Song__btn' onClick={menuHendler}><i className='bx bx-menu'></i></button>
      <img className='Song__img' src={currentsong.cover} alt={currentsong.name} />
      <div className='Song__compositor'>
         <h1 className='Song__title'>{currentsong.name}</h1>
      </div>
    </div>
   </div>
  </div>
  )
}

export default Song