import React from 'react'
import { Header } from '../../layout/Header/Header'
import { Nav } from '../../layout/Nav/Nav'
import { Title } from '../../UI/Title/Title'

export const Episodes = () => {
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

    </section>
  </>
  )
}
