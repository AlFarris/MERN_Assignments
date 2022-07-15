const PersonCard = (props) => {
    const {person} = props;

    return(
        <div>
            <h1>First Name: {person.firstName}</h1>
            <h1>Last Name: {person.lastName}</h1>
            <h2>Age: {person.age}</h2>
            <h2>Hair Color: {person.hairColor}</h2>
        </div>
    )
}
export default PersonCard;