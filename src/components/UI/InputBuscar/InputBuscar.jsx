import React from 'react'

export const InputBuscar = ({clase, event, description}) => {
  return (
    <>
        <input id={clase} className={clase} type="text" onChange={event} placeholder={description}/>
    </>
  )
}
