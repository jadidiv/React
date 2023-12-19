import { useState } from "react";

export default function Age() {

    let [age, setAge] = useState('');

    function handelAgeChange(e) {
        setAge(e.target.value);
    }

    function handleReset() {
        setAge('');
    }

    return (
        <>
            <div className="age">
                {age ? (<h1>You are {age} years old. 😋</h1>) : (<h1>Enter your age </h1>)}
                <form onSubmit={e => e.preventDefault()}>
                    <input
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={handelAgeChange}
                    />
                    <button onClick={handleReset}>Reset</button>
                </form>
            </div>
        </>
    )
}