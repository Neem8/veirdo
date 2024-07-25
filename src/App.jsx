import AboutUs from './component/Body/AboutUs.jsx'
import BestSeller from './component/Body/BestSeller.jsx'
import NewArrivals from './component/Body/NewArrivals.jsx'
import TopCategories from './component/Body/TopCategories.jsx'
import VideoPage from './component/Body/VideoPage.jsx'
import Carousel from './component/Carousel/Carousel.jsx'
import Header from './component/header/Header.jsx'
import Geeks from './component/Body/Geeks.jsx'
import RiskFreeShopping from './component/Body/RiskFreeShopping.jsx'
import Spot from './component/Body/Spot.jsx'

function App() {

  return (
    <>
      <Header/>
      <Carousel/>
      <BestSeller/>
      <TopCategories/>
      <VideoPage/>
      <NewArrivals/>
      <AboutUs/>
      {/* <Geeks/> */}
      <RiskFreeShopping/>
      <Spot/>

    </>
  )
}

export default App
