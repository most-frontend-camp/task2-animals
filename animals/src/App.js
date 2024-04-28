function App() {
    const handleClick = () => {
      console.log('Мы нажали на кнопку!');
    };

    return <div>
    <button onClick={handleClick}>Add animal</button>
    </div>;
}

export default App;