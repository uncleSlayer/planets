import { create } from 'zustand';
// import { devtools, persist } from 'zustand/middleware'
import { planetsNames } from "./planetsNames";


const usePlanetStore = create((set) => ({
    currentPlanet: planetsNames.ear,
    updatePlanet: (planetName) => {
        let planet = planetsNames.ear

        console.log(planetName);
        switch (planetName) {
            case 'Mercury':

                planet = planetsNames.mer
                break;

            case 'Venus':

                planet = planetsNames.ven
                break;

            case 'Earth':

                planet = planetsNames.ear
                break;

            case 'Mars':

                planet = planetsNames.mar
                break;

            case 'Jupiter':

                planet = planetsNames.jup
                break;

            case 'Satun':

                planet = planetsNames.sat
                break;

            case 'Uranus':

                planet = planetsNames.ura
                break;

            case 'Neptune':

                planet = planetsNames.nep
                break;

            default:
                planet = planetsNames.ear

        }

        set(() => ({
            currentPlanet: planet
        }))
    }
}))


export default usePlanetStore;