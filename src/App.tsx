import React from 'react';
import './App.css';
import Counter from './component/Counter';
import Users from './component/Users';

let student:string = 'Jolly';
let age: number = 69;
let isSmart: boolean = true;
let students:string[]=['joe','biden','john']
let fees:number[] =[12,34,56,46,65]
interface Person {
  name: string,
  job: string,
  age?: string | number,
  location?:string|boolean
}
const person:Person = {
  name: 'bill Clinton',
  job: 'jobles',
  age: 65,
  location:true,
}

const handleAddUser = (name:string,age:number,address:string):number => {
  const total: number = 50;
  console.log(name,age,address);
  return total;
}
function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
