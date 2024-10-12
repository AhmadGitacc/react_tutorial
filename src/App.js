import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import TodoList from './TodoList';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="/todo" element={<TodoList/> } />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
