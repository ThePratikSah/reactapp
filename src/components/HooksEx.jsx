import React, {useState} from 'react'

const HooksEx = () => {
    const [name, setname] = useState("Pratik");
    const nameChangeHandler = () => setname("Pratik Sah");
    return(
        <div>
            <p>{name}</p>
            <button onClick={nameChangeHandler}>Change Name</button>
        </div>
    );
}

export default HooksEx;