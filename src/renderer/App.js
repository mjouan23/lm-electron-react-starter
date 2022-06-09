import { useEffect, useState } from 'react';
import logo from '../logo.svg';
import './App.css';

function App() {
  const [title, setTitle] = useState('Welcome !')
  const handleClick = () => {
    window.electron.send('get-new-title', '');
  }
  useEffect(() => {
    window.electron.recieve('display-new-title', (data) => {
      setTitle(data);
    })
  }, [title])
  
  return (
    <div className="App">
      <header className="App-header">
        <img id="logo" src={logo} className="App-logo" alt="logo" />
        <div className="title">
          <h1>{title}</h1>
          <img src="./potion.svg" className="App-potion" alt="potion" />
        </div>
        <p>Official Boilerplate for React Electron App</p>
        <a title="Site La Manu" className="App-link" href="https://lamanu.fr" target="_blank" rel="noopener noreferrer">Visit La Manu</a>
        <button onClick={handleClick} id="changeTitle">Change Title</button>
      </header>
    </div>
  );
}

export default App;
