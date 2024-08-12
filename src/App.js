import './App.css';

const tg = window.Telegram.WebApp


function App() {
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
