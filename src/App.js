import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wrapper from './Wrapper';
function App() {
  return <>
   <Router>
    <Routes>
    <Route path="/" index element={<Wrapper/>}/>
    {/* <Route path="/תקנון"  element={<Takanon/>}/>
    <Route path="/מתנה"  element={<PresentPage/>}/>
    <Route path="/חבר מביא חבר"  element={<FriendsPage/>}/> */}
 </Routes>
 </Router>
  
  </>
}

export default App;
