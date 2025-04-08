import { useState } from 'react';
import './App.css';
import GameScreen from './components/GameScreen';
import DifficultyScreen from './components/DifficultyScreen';

function App() {
  const [difficulty, setDifficulty] = useState(null);
  let screen;

  function handleDifficultySelection(difficulty) {
    setDifficulty(difficulty);
  }

  if (difficulty) {
    screen = <GameScreen difficulty={difficulty}></GameScreen>;
  } else {
    screen = (
      <DifficultyScreen
        onDifficultySelected={handleDifficultySelection}
      ></DifficultyScreen>
    );
  }
  return screen;
}

export default App;
