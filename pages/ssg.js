import React from 'react'
import fetch from 'isomorphic-unfetch'
import { Button } from 'govuk-react'

const Home = ({ data }) => {
  return (
    <main>
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

export async function getStaticProps() {
  const response = await fetch('https://swapi.dev/api/films/')
  const data = await response.json()

  return { props: { data: data.results } }
}

function sayHello() {
  alert('Hello!');
}

export default Home
