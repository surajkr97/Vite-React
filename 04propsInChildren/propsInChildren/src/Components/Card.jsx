import React from 'react'

const Card = ({children}) => {
  return (
    <div style={{
      border: "2px solid #ccc",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
      minWidth: "250px",
      margin: "20px auto",
      textAlign: "center",
    }}>
      {children}
    </div>
  )
}

export default Card
