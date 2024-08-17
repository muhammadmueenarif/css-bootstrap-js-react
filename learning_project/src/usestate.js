import { useState } from "react";

const Home = () => {
    
    const [name, setName] = useState('John');
    const handleClick = ()=>{
       setName('Jane');       
    }

    return (
        <div className= "Home">
            <h2>Home Page</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
      );
}
 
export default Home;
