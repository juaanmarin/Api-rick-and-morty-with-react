import React, {useEffect, useState} from 'react'
import { Header } from '../../layout/Header/Header'
import { Footer } from '../../layout/Footer/Footer'
import { Nav } from '../../layout/Nav/Nav'
import { Card } from '../../UI/Card/Card'
import { Title } from '../../UI/Title/Title'

export const Home = () => {

  const url="https://rickandmortyapi.com/api/character";

  const [characters, setCharacters]= useState([]);
  
  // //fetch funcion asincrona
  // const fetchApi= async () => {    
  //   // const response=await fetch(url);
  //   // const responseJson= await response.json();
  //   // setCharacters(responseJson.results);
  //   // console.log(responseJson)
  //   // console.log(characters);
  // }

  const fetchApi=(url)=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=> setCharacters(data.results))
    .then(error=> console.log(error))
  }

  useEffect(() => {
    fetchApi(url);
  }, [])
  

  return (
    <>
      <header className="Home-header">
        <Header></Header>
        <Title></Title>
      </header>

      <nav className="Home-Nav">
        <Nav></Nav>
      </nav>

      <section className='Home-section'>
        <div className='cards'>
        <Card characters={characters}></Card>
        </div>
      </section>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}
