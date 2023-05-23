import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import './footer.css'


export default function Home() {
  return (
    <>
    <Header />
    <div className='conatiner mx-auto min-h-screen font-bold text-6xl center'>Herosection</div>
    <HeroSection />
    <div className='first-footer'>
      firstfooter
    </div>
    <Footer />
    </>
  )
}

