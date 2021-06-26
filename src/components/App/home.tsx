import React, {useState} from 'react';

const Home: React.FC = () =>{
  const [name, setName] = useState("Nicola");
  return ( <h4 className="pt-3">Hello, {name}</h4>
)}
export default Home;