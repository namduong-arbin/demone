import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function getRandomChanLe(): string[] {
  const result: string[] = [];
  const options: string[] = ['   chẳn  ', '   lẽ   '];

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * 2);
    result.push(options[randomIndex]);
  }

  return result;
}
function App() {
  const [count, setCount] = useState(() => getRandomChanLe());

  return (
    <>
      <div
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          flexDirection: 'column',
          gap: 50,
        }}
      >
        <div style={{ padding: 4, border: '1px solid' }}>
          {count.toString()}
        </div>
        <button onClick={() => setCount(getRandomChanLe())}>reload</button>
      </div>
    </>
  );
}

export default App;
