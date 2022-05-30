import './App.css';
import Player from './Player/Player';
import Song from './Song/Song';
import data from './data'
import { useRef, useState } from 'react';
import Library from './Library/Library';

function App() {
  let [color,setcolor] = useState(false)
  let audioRef = useRef(null)
  let [Bookmark, setBookmark] = useState(true)
  let [Menu, setMenu] = useState(true)

  let [songs, setsongs] = useState(data())
  let [currentsong, setcurrentsong] = useState(songs[0])
  let [isplaying, setisplaying] = useState(true)

  let audioplay = useRef(null)

  const [songInfo, setSongInfo] = useState({
    currentTime:0,
    durationTime:0,
  })

  return (
    <div className="App" >
      <Song currentsong={currentsong} Bookmark={Bookmark} setBookmark={setBookmark} Menu={Menu} setMenu={setMenu}/>
      <Player isplaying={isplaying}
       setisplaying={setisplaying}
       currentsong={currentsong} 
       audioplay = {audioplay} 
       audioRef={audioRef}
       songInfo={songInfo}
       setSongInfo={setSongInfo}
       songs={songs}
       setcurrentsong={setcurrentsong}
       setsongs={setsongs}
       Bookmark={Bookmark}
       setBookmark={setBookmark}
       color={color}
       setcolor={setcolor}
       />
       <Library isplaying={isplaying} audioplay={audioplay} songs={songs} setsongs={setsongs} setcurrentsong={setcurrentsong} setcolor={setcolor} setMenu={setMenu} Menu={Menu}/>
    </div>
  );
}

export default App;
