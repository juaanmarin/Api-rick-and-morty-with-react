/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import { Footer } from '../../layout/Footer/Footer'
import { Header } from '../../layout/Header/Header'
import { Nav } from '../../layout/Nav/Nav'
import { Card } from '../../UI/Card/Card'
import { Title } from '../../UI/Title/Title'

export const Episodes = () => {

  const url="https://rickandmortyapi.com/api/episode"

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
      <Title textTitle='Episodes'></Title>
    </header>

    <nav className="Home-Nav">
      <Nav></Nav>
    </nav>

    <section className='Home-section'>
      <div className='cards'>
      {locations.map((item, index) => (
        
          <div className='card'key={index}>
            <Card txtName='Name: ' name={item.name} txtType='Air_date": ' type={item.air_date} txtDimens='Episode:' dimension={item.episode}></Card>
            
            {/* <ImageUI image={character}></ImageUI> */}
          </div>

        ))} 
      </div>
    </section>

    <footer>
        <Footer></Footer>
      </footer>
  </>
  )
}
