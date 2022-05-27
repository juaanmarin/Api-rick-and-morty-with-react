import React from 'react'

export const Card = ({txtName, txtType, txtDimens, name, type, dimension}) => {
  return (
      <>
        <div className="card-title">
            <h2>{txtName} {name}</h2>
            <h3>{txtType} {type}</h3>
            <h3>{txtDimens} {dimension}</h3>    
        </div>
                 
      </>
  )
}