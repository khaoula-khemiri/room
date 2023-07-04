import './App.css';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';

function App() {
  return (
    <div className="App">
      <h1>Room Design Board </h1>
      <div className='flex'>
        <LeftContainer />
        <RightContainer />
      </div>
    </div>
  );
}

export default App;
