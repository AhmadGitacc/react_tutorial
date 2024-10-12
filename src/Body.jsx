import { useEffect } from "react";
import { useState } from "react";

const Body = () => {

    //useState Syntax 
    const [names, setName] = useState("")
    const [names2, setName2] = useState([])


    const peopleNames = [
        { state: "FCT ", capital: "Abuja" },
        { state: "FT ", capital: "Abj" },
        { state: "Keffi ", capital: "qwerty" },
    ]

    let name = "Worldlight🌞"
    const changeState = () => {
        setName(name)
    }

    //useEffect  
    useEffect(() => {
        //Setting a state 
        // setName(name)
        alert("Hello world")
        setName2(peopleNames)
    }, [])

    console.log(names2)
    return (
        <div>
            <h2>This is the body </h2>
            <button onClick={changeState}>Change</button>

            <p>{names}</p>

            {names2.map((name, index) => (
                <div key={index}>
                    <p>No: {index} {name.state}</p>
                    <p>{name.capital}</p>
                </div>
            ))}



        </div>
    );
}

export default Body;