import './App.css';
import AutocorrectTextarea from './components/AutocorrectTextArea';
import CORRECTIONS from './constants/corrections';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Autocorrect App
      </header>
      <AutocorrectTextarea corrections={CORRECTIONS}/>
    </div>
  );
}

export default App;
