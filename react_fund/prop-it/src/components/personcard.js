const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;

    return(
        <div className="border">
            <h1>First Name: {firstName}</h1>
            <h1>Last Name: {lastName}</h1>
            <h2>Age: {age}</h2>
            <h2>Hair Color: {hairColor}</h2>
        </div>
    )
}
export default PersonCard;