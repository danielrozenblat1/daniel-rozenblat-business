import { useEffect, useState } from 'react';
import FirstScreen from './screens/FirstScreen';
import PersistentDrawerRight from './components/MuiPerfect';
import Box from './components/Box';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import Me from './components/Me/Me';
import ForthScreen from './screens/ForthScreen';
import FormScreen from './components/form/FormScreen';
import Popped from './components/poppedUpWindow/Popped';
import Works from './components/works/Works';
import WhoFits from './components/fit/WhoFits';
import FifthScreen from './screens/FifthScreen';
import From from './components/from to/From';
import NavBar from './components/NavBar/NavBar';
import BasicAccordion from './components/Akordion/Akordion';
import { useLocation } from 'react-router-dom';
import Recommends from './components/recommends/Recommends';


const Wrapper=()=>{
const location=useLocation()
// useEffect(()=>{
//     const socket = io('https://daniel-rozenblat-421d37a33cb7.herokuapp.com');

// },[])
// const [scrolled, setScrolled] = useState(false);


// useEffect(() => {
 


//   window.addEventListener("scroll", handleScroll);

//   return () => {
//       window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

// const handleScroll = () => {
//   if (window.pageYOffset > 0) {
//     setScrolled(true);
//   } else {
//     setScrolled(false);
//   }
// };

    return <div style={{width:'100%', justifyContent:"center", overflow:"hidden" ,background:"linear-gradient(135deg, rgba(255,189,147,0.7) 0%, rgba(183,120,231,0.7030461842940301) 10%, rgba(255,189,147,0.7) 20%, rgba(183,120,231,0.7002450638458508) 30%, rgba(255,189,147,0.7) 40%, rgba(183,120,231,0.7030461842940301) 50%, rgba(255,189,147,0.7) 60%, rgba(183,120,231,0.7002450638458508) 70%, rgba(255,189,147,0.7) 80%, rgba(183,120,231,0.7002450638458508) 90%, rgba(255,189,147,0.7) 100%)"}}>
        <PersistentDrawerRight/>
       {/* <NavBar/> */}
        <FirstScreen />
       
        {/* <ThirdScreen/> */}
      
        <Recommends/>
        {/* <FormScreen/> */}
        <Works/>
        <Me/>
        <FormScreen/>
        {/* <From/> */}
        {/* <SecondScreen/> */}
  
        {/* <WhoFits/> */}
      
     
        <BasicAccordion/>
        <FifthScreen/>

        {location.pathname !== "/%D7%AA%D7%95%D7%93%D7%94" && <Popped/>}
 </div>
}
export default Wrapper