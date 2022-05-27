import React from 'react'
import { Ancla } from '../../UI/Ancla/Ancla'

export const Nav = () => {
  return (
    <>
        <Ancla clase="ancla" references="/" textAncla="Home"></Ancla>
        <Ancla clase="ancla" references="/characters" textAncla="Characters"></Ancla>
        <Ancla clase="ancla" references="/location" textAncla="Locations"></Ancla>
        <Ancla clase="ancla" references="/episodes" textAncla="Episodes"></Ancla>
    </>
  )
}
