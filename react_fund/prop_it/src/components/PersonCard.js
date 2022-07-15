import {useState} from 'react';
const PersonCard = (props) => {
    const {person} = props;

    const [state, setState] = useState(person.age)
    

    return(
        <div>
            <h1>First Name: {person.firstName}</h1>
            <h1>Last Name: {person.lastName}</h1>
            <h2>Age: {state}</h2>
            <h2>Hair Color: {person.hairColor}</h2>
            <button onClick= {()=>setState(state+1)}>Birthday Button {person.firstName}</button>
        </div>
    )
}
export default PersonCard;