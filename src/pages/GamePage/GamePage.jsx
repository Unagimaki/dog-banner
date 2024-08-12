import { useEffect, useRef } from 'react'
import { createMoneyElement } from './helpers/createMoneyElement'
import styles from './gamePage.module.scss'
import FooterMenu from '../../features/FooterMenu/FooterMenu';
import { useNavigate } from 'react-router-dom';

const GamePage = () => {
    const gameElementRef = useRef(null)
    const navigate = useNavigate()
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
            <FooterMenu/>
            <MainButton
                text="Back"
                onClick={() => navigate(-1)}
            />            
        </div>
    )
} 

export default GamePage