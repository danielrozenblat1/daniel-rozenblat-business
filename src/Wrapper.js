import { useEffect } from 'react';
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


const Wrapper=()=>{

// useEffect(()=>{
//     const socket = io('https://daniel-rozenblat-421d37a33cb7.herokuapp.com');

// },[])


    return <div style={{width:'100%', justifyContent:"center", overflow:"hidden"}}>
        <PersistentDrawerRight/>
       
        <FirstScreen/>
        <ThirdScreen/>
        <From/>
        <SecondScreen/>
     
        <Me/>
        <WhoFits/>
        <FormScreen/>
        <Works/>
        <FifthScreen/>
        {/* <Popped/> */}
 </div>
}
export default Wrapper