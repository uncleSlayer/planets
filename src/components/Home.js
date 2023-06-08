import React from 'react'
import '../static/styles/navbar.css'
import usePlanetStore from '../context/currentPlanetStore'
import PlanetDescription from './PlanetDescription'

function Home() {
  const planetStoreData = usePlanetStore((state) => state.currentPlanet)
  const changePlanetStoreData = usePlanetStore((state) => state.updatePlanet)

  const handleClick = (e) => {
    console.log('clicked');
    console.log((e.target.innerText));
    changePlanetStoreData(e.target.innerText)
  }

  return (
    <div style={{ backgroundImage: `url(${planetStoreData.imageUrl})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='nav-container' >
        <div onClick={handleClick}> Mercury </div>
        <div onClick={handleClick}> Venus</div>
        <div onClick={handleClick}> Earth</div>
        <div onClick={handleClick}> Mars</div>
        <div onClick={handleClick}> Jupiter</div>
        <div onClick={handleClick}> Satun</div>
        <div onClick={handleClick}> Uranus</div>
        <div onClick={handleClick}> Neptune</div>
      </div>
      <div className='planet-description-holder'>
        <PlanetDescription />
      </div>
    </div>


  )
}

export default Home