
import React, { useEffect, useState } from "react";

const VirtualAudioPlayer = (props) => {
  const [audios, setAudios] = useState({});
  const [playing, setPlaying] = useState(null);
  const {audioMuteState}=props;

  
  useEffect(() => {
    if (props.virtualAudioTracks) {
      const object = {};
      for (let key in props.virtualAudioTracks) {
        const audio = props.virtualAudioTracks[key];
        const audioElem = new Audio();
       
        audioElem.src = audio;
        //audioElem.muted=audioMuteState;
        audioElem.load();
        object[key] = audioElem;
      }
      setAudios(object);
    }
    
  }, []);

  useEffect(() => {
    if (props.audioSrc && !audioMuteState) {
     
      if (playing) {
        audios[playing].pause();
        audios[playing].currentTime = 0;
      }
      audios[props.audioSrc].play();
      audios[props.audioSrc].onended = (e) => {
        setPlaying(null);
        audios[props.audioSrc].pause();
        audios[props.audioSrc].currentTime = 0;


      };
      setPlaying(props.audioSrc);
    }
  }, [props.audioSrc]);

  return null;
};

export default VirtualAudioPlayer;
