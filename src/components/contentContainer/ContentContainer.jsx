import React from 'react'
import "./ContentContainer.scss"

export default function ContentContainer({ children }) {
  return (
    <div className='contentContainer'>
      {children}
    </div>
  )
}
