import React from 'react'

const ChildrenTest = ({children, valueNum}) => {
  return (
      <>
      <section>
        <h1>More info:</h1>
        <p>NumInfo: {valueNum}</p>
        {children}
      </section>
      
      </>
  )
}

export default ChildrenTest


// Colocamos o children como prop