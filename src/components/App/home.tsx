import React, {useState, useEffect} from 'react';

const Home: React.FC = () =>{
  const [name, setName] = useState("Nicola");
  
  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/spells/acid-arrow/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
    });
  }, [])
  
  return ( 
    <div>
      <h4 className="pt-3">Hello, {name}</h4>
    </div>
)}
export default Home;