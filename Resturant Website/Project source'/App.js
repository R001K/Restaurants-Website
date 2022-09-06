//import logo from './logo.svg';
import './App.css';
import container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Edit from './components/Edit';
//import Menu from './components/Menu';

import About from './components/About';

import Home from './components/Home';

import Contact from './components/Contact';
import Offers from './components/Offers';
//import Location from './components/Location';
import Error from './components/Error';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';



import Explore from './components/Explore';
import St1 from './components/St1';
import St2 from './components/St2';
import Fetch from './components/Fetch';
import Fetch1 from './components/Fetch1';
import Fetch2 from './components/Fetch2';
import NavBar from './components/NavBar';
import Front from './components/Front';
import Form from './components/Form';
import Props from './components/Navbarr';
import Navbarr from './components/Navbarr';
import Textform from './components/Textform';
import Textform1 from './components/Textform1';
import Registatiion from './components/Registatiion';
import Form1 from './components/Form1';
import Fetch3 from './components/Fetch3';
import Fetch4 from './components/Fetch4';
import Storage from './components/Storage';
import Login from './components/Login';
import FirstPage from './components/FirstPage';
import Menu from './components/Menu';

import Button from './components/FindBurger';
import OrderNow from './components/OrderNow';
import Menu2 from './components/Menu2';
import Fetch5 from './components/Fetch5';
import FindBurger from './components/FindBurger';
import Log1 from './components/Log1';
import Redux from './components/Redux';


//import OurStory from './components/OurStory';



function App() {
  return (

    <div className="App">
   {/* <Redux></Redux> */}
   {/* <Storage></Storage> */}
{/* <Login></Login>  */}
         {/* <Router> 
        <Menu1></Menu1> 
      <Routes>
  <Route path="/First" element={<FirstPage/>} />
  
  </Routes>
</Router>    */}



{/* <Fetch3></Fetch3> */}

{/* 
<Fetch4></Fetch4> */}

 {/* <N></N>  */}
  
     {/* <Front></Front>     */}
   
    
      <Router>
      <Navbarr/>
     <Routes>
      <Route path='/' element={<Front/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/offers' element={<Offers/>}/>
      <Route path='/about' element={<About/>}/>
       <Route path='/FindBurger' element={<FindBurger/>}/>
       <Route path='/Explore' element={<Explore/>}/>
       <Route path='/Order' element={<OrderNow/>}/>
      <Route path='*' element={<Error/>} />
 </Routes>
   </Router> 

  


    
   
        
        
        
        
        
        
        
        
        
 


      {/* <Form1></Form1> */}
      {/* <Registatiion></Registatiion> */}
{/* <Textform1></Textform1> */}
          {/* <Textform></Textform> */}

     
      {/* <Fetch2></Fetch2> */}
{/* <Form></Form> */}
{/* <NavBar></NavBar>
 <Front></Front> */}

{/* <Fetch5></Fetch5> */}


 
{/* 
      <Router>
      <Menu2></Menu2>
      <Routes>
     
<Route path='/' element={<Home/>} />
<Route path='/Log' element={<Log1/>} />
<Route path='/contact' element={<Contact/>}/>
<Route path='/Fetch' element={<Fetch4/>}/>
<Route path='/Edit/:id' element={<Edit/>}/>
<Route path='/Login' element={<Login/>}/>
<Route path='*' element={<Error/>} />
</Routes>
</Router>     */}


   
      {/* <Fetch1></Fetch1> */}
      {/* <Fetch></Fetch> */}
    {/* <St1></St1> */}
    {/* <St2></St2> */}
    

{/* <Home></Home>
<About></About>
<Contact></Contact>  */}

{/* <container >
  <Row>
  <Col>  <Third title='html' data="hyper text markup language"></Third></Col>
  <Col>  <Third title='css' data="cascading style sheet" imgsrc="images/siya4.jpg" ></Third></Col> 
  <Col>  <Third title='javascript' data="Scripting language"></Third></Col> 
 
    </Row>
    </container>

 */}
       {/* <div className='container'>
         <First course='java' fees='3000' data='login'>  This is java course</First>
        <First course="python" fees="4000" data='send'>This is python course </First>
        <First course="php" fees="6000" data='Save'> this is php course</First>
        <Second course="swimming" fees="7000">This is a fun Activites</Second>
        <Third name="pankaj" course= "10"> hello</Third>
        <Third name="Rahul" course= "20">bye</Third>
     </div> 
     {/* <header className="App-header"> */}
       {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"  
          rel="noopener noreferrer"
        >
          Learn React with Rahul
        </a>
  </header>*/} 
    </div>
   
  );
}

export default App;
