import UserCard from './Components/userCard/index'
import './App.css';


const info = {
  name: 'Damian',
  surname: 'Wayne',
  description: 'Son of Batman. The fifth robin of Gotham.',
}

function App() {
  return (
    <div className="App">
      <UserCard />
    </div>
  );
}

export default App;
