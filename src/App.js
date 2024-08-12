import { useEffect } from 'react';
import './App.css';
const tg = window.Telegra.webApp

function App() {
  useEffect(() => {

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
