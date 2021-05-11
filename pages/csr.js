import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { Button } from 'govuk-react'

const Home = () => {
  const [data, setData] = useState([])

  function sayHello() {
    alert('Hello!');
  }

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://swapi.dev/api/films/')
      const data = await response.json()
      setData(data.results)
    }
    getData()
  })
  return (
    <main>
      <h1>The Starwars films</h1>
      <Button>My React Gov Button</Button>
      <h1>The Starwars films</h1>
      <ul>
        {data.map(item => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
      <button onClick={sayHello}>Clicker</button>
    </main>
  )
}

export default Home
