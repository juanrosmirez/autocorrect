import './App.css';
import AutocorrectTextarea from './components/AutocorrectTextarea';
import CORRECTIONS from './constants/corrections';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Autocorrection App
      </header>
      <AutocorrectTextarea corrections={CORRECTIONS}/>
    </div>
  );
}

export default App;
