import { useState } from "react";

export default function SimpleForm(){

    const [person, setPerson] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com"
    });

    function handleChange(e){
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    };

    function handleSubmit(e){
        e.preventDefault();
        alert("PERSON::::", person);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" value={person.firstName} onChange={handleChange} />
                </div>

                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={person.lastName} onChange={handleChange} />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={person.email} onChange={handleChange} />
                </div>

                <div>
                    <button>Submit</button>
                </div>
            </form>

            <div>
                <h3>Form Details</h3>
                <p>First Name: {person.firstName}</p>
                <p>Last Name: {person.lastName}</p>
                <p>Email: {person.email}</p>
            </div>
        </div>
    );
}