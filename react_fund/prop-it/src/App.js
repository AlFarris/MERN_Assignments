import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  
  const person = {
    firstName: "",
    lastName: "",
    age: 35,
    hairColor:""
  }
  return (
    <div className="App">
      <PersonCard firstName={person.firstname} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
    </div>
  );
}

export default App;
