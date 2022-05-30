import React from 'react'
import './LibrarySong.css'
function LibrarySong({song,songs,setsongs,id,setcurrentsong,audioplay,isplaying,setcolor}) {

  let selectLibraryHender = (e) => {
    let selectLibrary = songs.filter((item) => item.id === id)
    setcurrentsong(selectLibrary[0])
    if (audioplay) {
      let audioPromise = audioplay.current.play()
      if (audioPromise !== undefined) {
        setcolor(false)
        audioPromise.then((audio)=> {
          audioplay.current.play()
        })
      }
    }
    setsongs(newSongs)
  }

  let newSongs = songs.map(song => {
    if (song.id === id) {
      // console.log("ok");
      return {
        ...song,
      active:true,
    }
    }
    else {
      // console.log("no ok");
      return {
        ...song,
        active:false,
      }
    }
  })
  // setsongs(newSongs)
  
  return (
     <div onClick={selectLibraryHender} className={`library-element ${song.active ? 'blue' : ''}`}>
          <img className='library-img' src={song.cover} alt={song.name} />
          <div className='library-content'>
             <p className='library-name'>{song.name}</p>
             <p className='library-artist'>{song.artist}</p>
          </div>
      </div>
  )
}

export default LibrarySong