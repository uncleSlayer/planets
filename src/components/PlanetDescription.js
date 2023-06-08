import React from 'react'
import usePlanetStore from '../context/currentPlanetStore'
import { Link } from 'react-router-dom'

function PlanetDescription() {
    const currentPlanet = usePlanetStore((state) => state.currentPlanet)
  return (
    <div className='details-holder'>
        <h3>{currentPlanet.name}</h3>
        <p>{currentPlanet.description}</p>
        <Link to={currentPlanet.wiki} style={{color: 'white', textDecoration: 'none'}} target='_blank'>Wiki / {currentPlanet.name + ' >'}</Link>
    </div>
  )
}

export default PlanetDescription