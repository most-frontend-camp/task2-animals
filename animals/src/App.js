import {useState} from 'react';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

console.log(getRandomAnimal());

function App() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
      // console.log('Мы нажали на кнопку!');
        setCount(count + 1);
    };

    return <div>
    <button onClick={handleClick}>Add animal</button>
        <div>Число животных будет {count}</div>
    </div>;
}

export default App;