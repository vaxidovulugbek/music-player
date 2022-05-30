import React from 'react'
import './Saved.css'
function Saved({newarr,Bookmark}) {
  return (
    <div className={`Saved ${Bookmark ? "left" : "right"}`}>
      {
        newarr.map(item => {
          return <div className='Saved__info'> 
                <img className='library-img' src={item.cover} alt={item.name} />
                <div className='library-content'>
                  <p className='library-name'>{item.name}</p>
                  <p className='library-artist'>{item.artist}</p>
                </div>
          </div>
        })
      }
    </div>
  )
}

export default Saved
