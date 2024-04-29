import './App.css';
import { useState } from 'react';
import Animals from './AnimalShow';
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

// console.log(getRandomAnimal());

function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        // animals.push(getRandomAnimal());
        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>;
    });

    return (
        <div className="app">
            <button onClick={handleClick}>Add animal</button>
        <div className="animal-list">{renderedAnimals}</div>
    </div>
    );
}

export default App;