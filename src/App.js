import './App.css';
import Timer from './components/Timer'

function App() {

  const firstStartTimer = {
    id: 1,
    startTimer: 10,
    step: 1,
    autoplay: true
  }

  const secondStartTimer = {
    id: 2,
    startTimer: 30,
    step: 2,
    autoplay: false
  }

  return (
    <div>
      <Timer {...firstStartTimer}/>
      <Timer {...secondStartTimer}/>
    </div>
  );
}

export default App;
