import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import Banner from './components/Banner';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import WhyChoose from './components/WhyChoose';
import Tabs from './components/Tabs';
import Footer from './components/Footer';
import SectionMap from './components/SectionMap';
import RegisterNow from './components/RegisterNow';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <WhyChoose />
      <Tabs />
      <SectionMap />
      <RegisterNow />
      <Footer />
      
    </>
    
  );
}

export default App;
