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

    return <div style={{width:'100%', justifyContent:"center", overflow:"hidden"}}>
        <PersistentDrawerRight/>
       {/* <NavBar/> */}
        <FirstScreen />
       
        <ThirdScreen/>
      
        <Me/>
        <Works/>
        <FormScreen/>
        <From/>
        {/* <SecondScreen/> */}
  
        <WhoFits/>
        <FormScreen/>
     
        <BasicAccordion/>
        <FifthScreen/>

        {location.pathname !== "/%D7%AA%D7%95%D7%93%D7%94" && <Popped/>}
 </div>
}
export default Wrapper