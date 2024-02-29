import { useEffect, useState } from 'react';
import './App.css';
import numRandom from './utils/numRandom';
import sequence from './utils/sequence';
import Start from './components/Start';
import PlayIa from './components/PlayIa';
let counter = 0;

function App() { 

  const [ isIa, setIsIa ] = useState(false);
  const [ colors, setColors ] = useState([]);

  useEffect(() => {
    if (colors.length > 0) {
      setIsIa(true);
      setTimeout(() => {
        sequence(colors).finally(res => setIsIa(res));
      }, 1000);
    }
  }, [colors.length]);
  
  const handleClicks = event => {
    counter++;
    const effect = new Audio('../assets/button.mp3');
    effect.play();
    if (colors[counter-1] === +event.target.id) {
      console.log('good');
    } else {
      location.reload();
    }
    if (counter===colors.length) {
      counter = 0;
      setTimeout(() => {
        setColors(numRandom(colors));
      }, 1000);
    }
    console.log(counter);
  }

  console.log(colors);

  return (
    <div className='app'>
      <h1>Simon Game</h1>
      <div className='container' onClick={handleClicks}>
        <div id='1' className='color__btn yellow'></div>
        <div id='2' className='color__btn blue'></div>
        <div id='3' className='color__btn red'></div>
        <div id='4' className='color__btn green'></div>
      </div>
      <Start
        setColors={setColors}
      />
      <PlayIa
        isIa={isIa}
      />
    </div>
  )
}

export default App;
