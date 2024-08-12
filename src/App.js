import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.webApp

function App() {
  useEffect(() => {
    console.log(tg)    
  }, [])
  const handleClose = () => {
    tg.close()
  }
    return (
    <div className="App">
      <button onClick={handleClose}>Закрыть</button>
    </div>
  );
}

export default App;
