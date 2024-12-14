import { useEffect, useState } from 'react';
import FirstScreen from './screens/FirstScreen';
import PersistentDrawerRight from './components/MuiPerfect';

import ThirdScreen from './screens/ThirdScreen';
import Me from './components/Me/Me';
import ForthScreen from './screens/ForthScreen';
import FormScreen from './components/form/FormScreen';
import Popped from './components/poppedUpWindow/Popped';
import Works from './components/works/Works';

import { useLocation } from 'react-router-dom';
import Recommends from './components/recommends/Recommends';
import SixthScreen from './screens/SixthScreen';
import Navbar from './components/fixedNav/FixedNav';
import SeventhScreen from './screens/SeventhScreen';


const Wrapper=()=>{
const location=useLocation()
// useEffect(()=>{
//     const socket = io('https://daniel-rozenblat-421d37a33cb7.herokuapp.com');

// },[])
 const [scrolled, setScrolled] = useState(false);


useEffect(() => {
 


  window.addEventListener("scroll", handleScroll);

  return () => {
      window.removeEventListener("scroll", handleScroll);
  };
}, []);

const handleScroll = () => {
  if (window.pageYOffset > 0) {
    setScrolled(true);
  } else {
    setScrolled(false);
  }
};

    return <div style={{width:'100%', justifyContent:"center", overflow:"hidden", background:"linear-gradient(165deg, rgba(250,241,255,1) 20%, rgba(252,250,255,1) 35%, rgba(255,255,255,1) 50%, rgba(255,253,250,1) 65%, rgba(250,241,255,1) 80%)"}}>
        {/* <PersistentDrawerRight/> */}
       {/* <NavBar/> */}
       <Navbar/>
        <FirstScreen scrolled={scrolled} />
       
        <ThirdScreen/>
      
        <Recommends/>
        {/* <FormScreen/> */}
        <Works/>
        <Me/>
        <FormScreen/>
        {/* <From/> */}
        {/* <SecondScreen/> */}
  
        {/* <WhoFits/> */}
      <ForthScreen/>
        <SeventhScreen/>
        <SixthScreen/>
        {/* <FifthScreen/> */}

        {location.pathname !== "/%D7%AA%D7%95%D7%93%D7%94" && <Popped/>}
 </div>
}
export default Wrapper