import { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { PagesLinks } from './shared/PagesLinks';
import BoostsPage from './pages/BoostsPage/BoostsPage';
import GamePage from './pages/GamePage/GamePage';
import RewardsPage from './pages/RewardsPage/RewardsPage';
import ShopPage from './pages/ShopPage/ShopPage';
import StatPage from './pages/StatsPage/StatPage';
import BonusPage from './pages/BonusPage/BonusPage';
import MainPage from './pages/MainPage/MainPage';
import LoaderPage from './pages/LoaderPage/LoaderPage';
import StartPage from './pages/StartPage/StartPage';

const tg = window.Telegram.WebApp

function App() {
  const handleClose = () => {
    tg.close()
  }
  useEffect(() => {
    alert(tg.initData)

    
  }, [])
    return (
      <div className={styles.app}>
      <Routes>
        <Route path={PagesLinks.BOOSTS_URL} element={<BoostsPage/>}/>
        <Route path={PagesLinks.GAME_URL} element={<GamePage/>}/>
        <Route path={PagesLinks.REWARDS_URL} element={<RewardsPage/>}/>
        <Route path={PagesLinks.SHOP_URL} element={<ShopPage/>}/>
        <Route path={PagesLinks.STATS_URL} element={<StatPage/>}/>
        <Route path={PagesLinks.BONUS_URL} element={<BonusPage/>}/>
        <Route path={PagesLinks.MAIN_URL} element={<MainPage/>}/>
        <Route path={PagesLinks.LOADING_URL} element={<LoaderPage/>}/>
        <Route path='/' element={<StartPage/>}/>
      </Routes>
      {
        currentUrl !== '/' && currentUrl!== PagesLinks.LOADING_URL && <FooterMenuModule/>
      }
    </div>
  );
}

export default App;
