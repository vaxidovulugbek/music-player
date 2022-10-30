import { v4 as uuidv4 } from "uuid";
import stay from './Assets/Musics/stay.mp3'
import reather from './Assets/Musics/RatherBe.mp3'
import solo from './Assets/Musics/solo.mp3'
import Ily from './Assets/Musics/Ily.mp3'
import reatherimg from './Assets/Imgs/rather.jpg'
import soloimg from './Assets/Imgs/solo.jpg'
import Ilyimg from './Assets/Imgs/ily.jpg'
console.log(stay);
function chillHop() {
  return [
    {
      name: "ILY",
      cover:Ilyimg,
      artist: "Surf Mesa feat. Emilee",
      audio: Ily,
      color: ["#41283E", "#636CB4"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Solo",
      cover:soloimg,
      artist: "Clean Bandit feat. Demi Lovato",
      audio: solo,
      color: ["#5C6B80", "#D0D4D7"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Rather Be",
      cover:reatherimg,
      artist: "Clean Bandit",
      audio: reather,
      color: ["#556CA9", "#BF8A92"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
