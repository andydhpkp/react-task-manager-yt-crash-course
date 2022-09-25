import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'first task',
        day: 'Jan 1st at 1:30pm',
        reminder: false
    },
    {
        id: 2,
        text: 'second task',
        day: 'Jan 1st at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'third task',
        day: 'Jan 1st at 1:30pm',
        reminder: false
    }
])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
