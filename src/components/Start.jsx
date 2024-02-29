import React, { useState } from 'react';
import numRandom from '../utils/numRandom';
import './styles/start.css';

const Start = ({setColors}) => {

    const [isOpen, setIsOpen] = useState(true);

    const handleStart = () => {
      setIsOpen(false);
      setTimeout(() => {
        setColors(numRandom([]));
      }, 1000);
      const music = new Audio('../../assets/music.mp3');
      music.volume = 0.1;
      music.loop = true;
      music.play();
    }

  return (
    <div className={`start ${isOpen?'open':''}`}>
        <article>
            <h2>Welcome to simon game</h2>
            <p>how long sequence can you remember?</p>
            <button onClick={handleStart}>start</button>
        </article>
    </div>
  )
}

export default Start;