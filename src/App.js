import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks = ['Anoar', 'alomgir', 'salman', 'shuvo']
  const friends = ['beli', 'lili', 'joli', 'koli']
  const products = [
    { name: 'photoshop', price: '$90.99' },
    { name: 'ilustrator', price: '$60.99' },
    { name: 'pdf reader', price: '$8.99' },
    { name: 'premier EI', price: '$268.99' }
  ]

  return (
    <div className="App">
      <header className="App-header">

        <p>my first paragraph</p>
        <Counter></Counter>
        <Users></Users>
        {/* <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul> */}
        {
          products.map(pd => <Product product={pd}></Product>)
        }

      </header>
    </div>
  );
}
//INCREASE AND decrese by using onclick and moushover 
function Counter() {
  const [count, setCount] = useState(17);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
//useing 'useEffect' to load data
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])

  return (
    <div>
      <h3>Dynamic Users:{users.length}</h3>
    <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </ul>
    </div>
  )
}
function Product(props) {
  const productStyle = {
    color: 'red',
    border: '1px solid red',
    borderRadius: '3PX',
    // backgroundColor: 'grey',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '10px'
  }

  console.log(props);
  return (
    <div style={productStyle}>
      <h1>{props.name}</h1>

      <h2>{props.price}</h2>
      <h1></h1>
      <button>Buy Now</button>
    </div>
  )

}

// function Person(props) {
//   return (
//     <div style={{ border: '2px solid red', width: '300px', margin: '10px' }}>
//       <h1>My Name:{props.name}</h1>
//       <p>My profession:{props.job}</p>
//     </div>
//   )
// }

export default App;


//component declaration
//component => similar in look and feel different in data
// props
//state => changeble, shoping cart can be change by using mousemove, click
//how data can be load dynamically, 
//