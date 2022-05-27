import React, {useEffect, useState} from 'react'
import { Footer } from '../../layout/Footer/Footer'
import { Header } from '../../layout/Header/Header'
import { Nav } from '../../layout/Nav/Nav'
import { Card } from '../../UI/Card/Card'
// import { ImageUI } from '../../UI/ImageUI/ImageUI'
import { Title } from '../../UI/Title/Title'

export const Location = () => {

  const url="https://rickandmortyapi.com/api/location"

  const [locations, setLocations]= useState([]);
  const [character, setCharacter]= useState([]);


  const fetchApi=()=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=> setLocations(data.results))
  }

  function dataCollector(){
    console.log(character)
    console.log("####################");
    
    
  }

  useEffect(() => {
    fetchApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    dataCollector()
  }, [character])
  

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
        
          <div className='card'key={index}>
            <Card txtName='Name: ' name={item.name} txtType='Type: ' type={item.type} txtDimens='Dimension:' dimension={item.dimension}></Card>
            {setCharacter(item.residents)}
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
