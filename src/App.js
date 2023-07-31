import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Counter />
      <div>Emi</div>
      <Users />
      <Todos />
    </div>
  );
}

export default App;
