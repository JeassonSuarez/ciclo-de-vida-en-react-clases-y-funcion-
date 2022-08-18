import logo from './logo.svg';
import './App.css';
import { Clock } from './components/pure/clockFuncional';
import ClockClase from './components/pure/clockClase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Clock />
      <ClockClase />
    </div>
  );
}

export default App;
