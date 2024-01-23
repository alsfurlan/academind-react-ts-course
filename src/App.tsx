import './App.css';
import Header from './components/Header';
import goalsImage from './assets/goals.jpg';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import { CourseGoal } from './types/CourseGoal';


function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = () => {
    setGoals((goals) => {
      return [
        ...goals,
        {
          id: +(Math.random() * 1000).toFixed(0),
          title: 'Learn React and TS',
          description: 'Learn a lot',
        },
      ];
    });
  };

  return (
    <main>
      <Header image={{ src: goalsImage, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Addon</button>
      <CourseGoalList goals={goals}/>
    </main>
  );
}

export default App;
