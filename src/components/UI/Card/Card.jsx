import React from 'react'

export const Card = ({image, name}) => {
  return (
      <>
          <div className="card">
                <div className="card-title">
                    <h2>{name}</h2>
                </div>
                <img className="card-img" src={image} alt="character" />
          </div>   
      </>
  )
}