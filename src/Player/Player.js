import React, { useEffect, useRef, useState } from 'react'
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faForwardStep, faBackwardStep, faPlay,faPause,faShuffle,faHeart,faBookmark } from '@fortawesome/free-solid-svg-icons'
import Saved from '../Saved/Saved'

function Player({currentsong,isplaying,setisplaying,songInfo,setSongInfo,audioplay,songs,setcurrentsong,setsongs,Bookmark,setBookmark,color,setcolor}) {

  // let p = useRef(null)
  // useEffect(() => {
    //   console.log(p.current);
    //   p.current.style.color = "blue"
    // },[])
    
  let [newarr, setnewarr] = useState([])

  let [shufflecolor,setshufflecolor] = useState(false)

  let playsong = (e) => {
    if (isplaying) {
      audioplay.current.play()
      // audioplay.current.pause()
    }
    else {
      audioplay.current.pause()
      // audioplay.current.play()
    }
    setisplaying(!isplaying)
  }

  // let audioplay = useRef(null)
  // const [songInfo, setSongInfo] = useState({
  //   currentTime:0,
  //   durationTime:0,
  // })

  let updateTimeHendler = (e) => {
    let current = e.target.currentTime
    let duration = e.target.duration
    setSongInfo({...songInfo,currentTime:current,durationTime:duration})
  }

  let gettime = (time) => {
    if (time) {
      return (
        Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
      )
    }
    else {
      return "0:00"
    }
  }

  let draghendler = (e) => {
    audioplay.current.currentTime = e.target.value
    setSongInfo({...songInfo,currentTime:e.target.value})
  }
// =================================================================================================================================
  let prevMusic = () => {
    setisplaying(false)
    setcolor(false)
    let prev = songs.findIndex((song) => song.id === currentsong.id)
    if (shufflecolor) {
      if ((prev - 1) % songs.length === -1) {
        setcurrentsong(songs[songs.length - 1])
        return
      }
    }
    else {
      if ((prev - 1) % songs.length === -1) {
        setcurrentsong(songs[songs.length - 1])
        return
      }
    }
    setcurrentsong(songs[(prev - 1) % songs.length])
  }

// =================================================================================================================================
  let nextMusic = () => {
    setisplaying(false)
    setcolor(false)
    let next = songs.findIndex((song) => song.id === currentsong.id)
    // setcurrentsong(songs[(next + 1) % songs.length ])
    if (shufflecolor) {
      setcurrentsong(songs[(next + Math.floor(Math.random() * songs.length)) % songs.length ])
    }
    else {
      setcurrentsong(songs[(next + 1) % songs.length ])
    }
  }
// ============================================================================================================================================
  let saveHendler = (e) => {
    setcolor(!color)
    if (color) {
      // console.log(newarr);
        setnewarr(newarr.filter(item=> {
          return item.id !== currentsong.id
        }))
    }
    else {
      if(newarr.indexOf(currentsong) !== -1) return
      setnewarr([...newarr,currentsong])
      // console.log(newarr);
    }
  }



// =============================================================================================================================================
  let shuffleHendler = () => {
    setshufflecolor(!shufflecolor)
  }
// =============================================================================================================================================

  useEffect(() => {
    let newSongs = songs.map(song => {
      if (song.id === currentsong.id) {
        return {
          ...song,
        active:true,
      }
      }
      else {
        return {
          ...song,
          active:false,
        }
      }
    })
    if (audioplay) {
      let audioPromise = audioplay.current.play()
      if (audioPromise !== undefined) {
        audioPromise.then((audio)=> {
          audioplay.current.play()
        })
      }
      // setisplaying(true)
      // console.log(isplaying);
    }
    setsongs(newSongs)
  },[currentsong])
// ========================================================================================================================================
  let bookmarkHendler = () => {
    setBookmark(!Bookmark)
  }
  return (
   <div className='conteiner'> 
      <div className='Player'>
        <p className='Player__start'>{gettime(songInfo.currentTime)}</p>
        <input style={{background: `linear-gradient(to right, ${currentsong.color[0]}, ${currentsong.color[1]})`}}
           min={0} 
           max={songInfo.durationTime || 0}
           value={songInfo.currentTime } 
           className='Player__music' 
           type="range" 
           onChange={draghendler} />

        <p className='Player__end'>{gettime(songInfo.durationTime)}</p>
      </div>
      <div className='Player-subcontrol'>
        <FontAwesomeIcon onClick={shuffleHendler} className='Player-shuffle' icon={faShuffle} style={{color: shufflecolor ? "#000" : "#ccc"}} />
        <div className='Player-control'>
          <FontAwesomeIcon className='PREV Player-control__icons' onClick={prevMusic} icon={faBackwardStep} />
          <FontAwesomeIcon className='PLAY Player-control__icons' icon={isplaying ? faPlay : faPause} onClick={playsong}/> 
          {/* <FontAwesomeIcon className='PLAY Player-control__icons' icon={isplaying ? faPause : faPlay} onClick={playsong}/> */}
          <FontAwesomeIcon className='NEXT Player-control__icons' onClick={nextMusic} icon={faForwardStep} />
        </div>
        {/* <FontAwesomeIcon onClick={bookmarkHendler} className='Bookmark' icon={faBookmark} /> */}
        {/* <FontAwesomeIcon className='Player-heart' onClick={saveHendler} icon={faHeart} style={{color: color ? "#000" : "#ccc"}}/> */}
        <audio onTimeUpdate={updateTimeHendler} ref={audioplay} src={currentsong.audio}></audio>
      </div>
      <Saved Bookmark={Bookmark} newarr={newarr}/>
   </div>
  )
}
export default Player
