import { useEffect, useRef } from 'react'
import { createMoneyElement } from './helpers/createMoneyElement'
import styles from './gamePage.module.scss'

const GamePage = () => {
    const gameElementRef = useRef(null);

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
        </div>
    )
} 

export default GamePage