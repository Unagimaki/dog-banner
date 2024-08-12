import { useEffect, useRef } from 'react'
import { createMoneyElement } from './helpers/createMoneyElement'
import styles from './gamePage.module.scss'
import { ModuleStats } from '../../modules/ModuleStats/ModuleStats'

const GamePage = () => {
    const gameElementRef = useRef<any>(null);

    useEffect(() => {
        const gameElement = gameElementRef.current       
        const elementSizeViewport = 3
        const elementSpawnRate = 1000  
        const elementFallingSpeed = 10

        setInterval(() => {
            createMoneyElement(gameElement, elementSizeViewport, elementFallingSpeed)
        }, elementSpawnRate)
    }, [])


    return(
        <div ref={gameElementRef} className={styles.game}>
            <ModuleStats/>
        </div>
    )
} 

export default GamePage