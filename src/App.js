import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
        its worked
    </div>
  );
}

export default App;
