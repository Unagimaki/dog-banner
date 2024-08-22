import { Route, Routes, useLocation } from 'react-router-dom';
import { PagesLinks } from './shared/PagesLinks';
import BoostsPage from './pages/BoostsPage/BoostsPage';
import GamePage from './pages/GamePage/GamePage';
import ShopPage from './pages/ShopPage/ShopPage';
import StatPage from './pages/StatsPage/StatPage';
import MainPage from './pages/MainPage/MainPage';
import LoaderPage from './pages/LoaderPage/LoaderPage';
import StartPage from './pages/StartPage/StartPage';

import styles from './App.module.scss'
import FooterMenu from './features/FooterMenu/FooterMenu';
import { Background } from './features/Background/Background';
import OffersPage from './pages/OffersPage/OffersPage';
import { StatButton } from './pages/StatsPage/components/StatButton/StatButton';
import { useSelector } from 'react-redux';
import { OfferModal } from './pages/OffersPage/components/OfferModal/OfferModal';

// const tg = window.Telegram.WebApp

function App() {
  // alert(`Window width: ${window.innerWidth}px, Window height: ${window.innerHeight}px`);
    const token = useSelector(state => state.user.token)
    const currentUrl = useLocation().pathname
    const offerModalVisible = useSelector(state => state.offers.isVisible)
    return (
      <div className={styles.app}>
        {
          currentUrl !== PagesLinks.MAIN_URL && <Background/>
        }
      <Routes>
        <Route path={PagesLinks.BOOSTS_URL} element={<BoostsPage/>}/>
        <Route path={PagesLinks.GAME_URL} element={<GamePage/>}/>
        <Route path={PagesLinks.SHOP_URL} element={<ShopPage token={token}/>}/>
        <Route path={PagesLinks.STATS_URL} element={<StatPage/>}/>
        <Route path={PagesLinks.BONUS_URL} element={<OffersPage/>}/>
        <Route path={PagesLinks.MAIN_URL} element={<MainPage/>}/>
        <Route path={PagesLinks.LOADING_URL} element={<LoaderPage/>}/>
        <Route path='/' element={<StartPage/>}/>
      </Routes>
      {
        currentUrl !== '/' && currentUrl!== PagesLinks.LOADING_URL && <FooterMenu/>
      }
      {
        currentUrl === PagesLinks.STATS_URL && <StatButton/>
      }
      {
        offerModalVisible && <OfferModal/>
      }
    </div>
  );
}

export default App;
