import React from 'react'
import catImage from '../assets/images/cat-main.svg'

export const HomePage = () => {
  return (
    <section className="home-section">
      <div className="container d-flex">
        <h1>Adopta a un amigo peludo o busca un dueño.</h1>
        <img src={catImage}/>
      </div>   
    </section>
  )
}
