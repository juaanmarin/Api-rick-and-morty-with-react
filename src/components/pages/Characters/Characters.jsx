import React, {useEffect, useState} from 'react'
import { Header } from '../../layout/Header/Header'
import { Footer } from '../../layout/Footer/Footer'
import { Nav } from '../../layout/Nav/Nav'
import { Card } from '../../UI/Card/Card'
import { Title } from '../../UI/Title/Title'
import { InputBuscar } from '../../UI/InputBuscar/InputBuscar'

export const Characters = () => {

  const url="https://rickandmortyapi.com/api/character";
  
  const input=document.getElementById("input");

  const [characters, setCharacters]= useState([]);

  const fetchApi=(url)=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=> setCharacters(data.results))
    .then(error=> console.log(error))
  }

  function search(){
    let search=(url)+`/?name=${input.value}`  
    fetch(search)
    .then(res=> res.json())
    .then(data=> setCharacters(data.results))
    
  }

  useEffect(() => {
    fetchApi(url);
  }, [])

  return (
    <>
    <header className="Home-header">
      <Header></Header>
      <Title textTitle='Character'></Title>
    </header>

    <nav className="Home-Nav">
      <Nav></Nav>
    </nav>

    <section className='Home-section'>
        <div className='search'>
          <InputBuscar clase="input" event={search} description="buscar"/>
        </div>
        <div className='cards'>
          {characters.map((item, index) => (
            <Card key={index} image={item.image} name={item.name}></Card>
          ))}
        </div>
       
      </section>

      <footer>
        <Footer></Footer>
      </footer>


  </>
  )
}

