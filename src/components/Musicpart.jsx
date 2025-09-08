import { useState } from "react";
import { useRef } from "react";
import bgmusic from "../assets/audio.mp3";
import eyeglass from "../assets/logomain.jpg";
import contracept from "../assets/contracept.png";

function Musicpart() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [isMuted, setIsMuted] = useState(false);

  const handlePlayMusic = () => {
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  // const handleToggleMute = () => {
  //   if (audioRef.current) {
  //     if (isMuted) {
  //       audioRef.current.muted = false;
  //     } else {
  //       audioRef.current.muted = true;
  //     }
  //     setIsMuted(!isMuted);
  //   }
  // };

  return (
    <div className="relative w-full h-fulls">
      {!isPlaying && (
        <div className="bg-black/60 backdrop-blur-xl fixed top-0 w-full h-screen flex flex-col justify-center items-center z-[100] ftop-10">
          {/* <img src={logo} alt="" className='w-60' /> */}
          <img
            src={eyeglass}
            alt="Enter"
            className="lg:w-[40vw] w-[95vw] p-3 z-[100] cursor-pointer rounded-3xl hover:scale-110 active:scale-105 transition-all"
            onClick={handlePlayMusic}
          />
          {/* <img
            src={contracept}
            alt="Enter"
            className="w-96 p-3 z-[100] cursor-pointer"
            onClick={handlePlayMusic}
          />{" "} */}
        </div>
      )}
      <audio ref={audioRef} src={bgmusic} loop />
    </div>
  );
}

export default Musicpart;