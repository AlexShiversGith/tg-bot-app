import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/header/Header';

function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    window.Telegram.WebApp.ready();
  }, []);

  return (
    <div className="App">
      <Header />
        <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;