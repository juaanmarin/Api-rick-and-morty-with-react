import React from 'react'
import { Link } from 'react-router-dom'

export const Ancla = ({clase,references,textAncla}) => {
  return (
    <Link className={clase} to={references} >{textAncla}</Link>
  )
}
