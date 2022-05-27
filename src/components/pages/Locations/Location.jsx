import React, {useEffect, useState} from 'react'
import { Footer } from '../../layout/Footer/Footer'
import { Header } from '../../layout/Header/Header'
import { Nav } from '../../layout/Nav/Nav'
import { Card } from '../../UI/Card/Card'
import { Title } from '../../UI/Title/Title'

export const Location = () => {

  const url="https://rickandmortyapi.com/api/location"

  const [locations, setLocations]= useState([]);

  const fetchApi=()=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=> dataCollector(data))
  }

  function dataCollector(data){
    
    setLocations(data.results)
  }

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <>
    <header className="Home-header">
      <Header></Header>
      <Title textTitle='Locations'></Title>
    </header>

    <nav className="Home-Nav">
      <Nav></Nav>
    </nav>

    <section className='Home-section'>
      <div className='cards'>
        {locations.map((item, index) => (
          <Card key={index}  name={item.name}></Card>
        ))}
      </div>
    </section>

    <footer>
        <Footer></Footer>
      </footer>
  </>
  )
}
