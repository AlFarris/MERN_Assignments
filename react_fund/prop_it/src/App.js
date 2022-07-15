
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  
  const person = {
    firstName: "Ali",
    lastName: "Farris",
    age: 26,
    hairColor:"Blonde"
  }
  const person2 = {
    firstName: "Haley",
    lastName: "Farris",
    age: 30,
    hairColor:"Brunette"
  }
  const person3 = {
    firstName: "Maddi",
    lastName: "Farris",
    age: 31,
    hairColor:"Blonde"
  }
  const person4 = {
    firstName: "Connie",
    lastName: "Farris",
    age: 60,
    hairColor:"Brunette"
  }
  return (
    <div className="App">
      <PersonCard person={person} />
      <PersonCard person={person2} />
      <PersonCard person={person3} />
      <PersonCard person={person4} />
    </div>
  );
}

export default App;
