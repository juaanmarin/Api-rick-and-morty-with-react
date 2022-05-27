import React from 'react'

export const Card = ({characters=[]}) => {
  return (
      <>
        {characters.map((item, index) => (
          <div key={index} className="card">
                <div className="card-title">
                    <h2>{item.name}</h2>
                </div>
                <img className="card-img" src={item.image} alt="character" />
          </div>
        ))}
      
      </>
    
  )
}
