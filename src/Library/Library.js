import React from 'react'
import LibrarySong from '../LibrarySong/LibrarySong'
import './Library.css'
function Library({songs,setsongs,setcurrentsong,audioplay,isplaying,setcolor,setMenu,Menu}) {
  return (
    <div className={`library ${Menu ? "menuleft" : "menuright"}`}>
      {
        songs.map(song => {
           return <LibrarySong song={song}
             songs={songs}
             setsongs={setsongs}
             setcurrentsong={setcurrentsong}
             id={song.id}
             audioplay={audioplay}
             isplaying={isplaying}
             setcolor={setcolor}
           />
        })
      }
      
    </div>
  )
}

export default Library