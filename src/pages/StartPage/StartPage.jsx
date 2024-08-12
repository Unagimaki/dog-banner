import { Leaves } from './Leaves/Leaves'
import { Logo } from './Logo/Logo'
import { PlayButton } from './PlayButton/PlayButton'
import { QRCode } from './QRCode/QRCode'
import { useInitData } from '@vkruglikov/react-telegram-web-app';

import styles from './startPage.module.scss'
import { useEffect } from 'react';

const tg = window.Telegram.WebApp


const StartPage = () => {
    useEffect(() => {
        alert(tg.initData)
    }, [])

    return(
        <div className={styles.start}>
            <Logo/>
            <QRCode/>
            <PlayButton/>
            <Leaves/>
        </div>  
    )
}

export default StartPage