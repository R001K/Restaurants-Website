import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from './FindBurger';
import'./style/Front.css'
export default function Front() {
  return (
    <div className='front'>
        <Carousel>
      <Carousel.Item>
         <img
          className="d-block w-100"
          src="images/staw.jpg" width="220px" height="600px;"
          alt="First slide"
        /> 
        <Carousel.Caption>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/burger.jpg" width="200px" height="650px;"
          alt="Second slide"
        />

        
<Carousel.Caption>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/green.jpg" width="100px" height="700px;"
          alt="Second slide"
        />

        
<Carousel.Caption>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/chiken.jpg" width="200px" height="600px;"
          alt="Second slide"
        />

        <Carousel.Caption>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/star.jpg" width="200px" height="900px;"
          alt="Third slide"
        />
          <Carousel.Caption>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/orange.jpg" width="200px" height="650px;"
          alt="Third slide"
        />
          <Carousel.Caption>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/role.jpg" width="250px" height="600px;"
          alt="Third slide"
        />



        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <div className='find'>
     Dragron Burger

     <b><p  className='find1'>This Is Our Challenge Burger! SPICYY!. HOT!!
     Be Carefull </p></b>
  {/* <button className='find2' href="button"> Find Burger</button> */}
        <ul >
          <li >
            <a className='find2' href="FindBurger">
           Find Burger  
            </a>
          </li>
          </ul>
  
      <div >
      <img
          className="burger"
          src="images/spicy.jpg" width="1500px" height="500px;"
          alt="Second slide"
        />
        <p className='div2' ><b>HOT OFF OF THE GRILL</b></p>
        {/* <div className='div2'>
<p ><b>HOT OFF OF THE GRILL</b></p>
</div> */}

      </div>
      </div>
     
      <div className="R1" > 
      
       <img
       
       
      src="images/R1.jpg"  width="1700px" height="700px;"
      /> 
        <h1 className='R2'> FULLFILL YOUR DESIRE </h1>
      <p className='R3'>  Love our burgers? Now is the time to explore adding Back Yard Burgers to your portfolio.
</p>
<ul >
          <li >
            <a className='R4' href="Explore">
           Explore  
            </a>
          </li>
          </ul>
      </div>

      <div className='footer1'>
    <b> “EATING GOOD FOOD<br/>
WITH GOOD FRIENDS AND FAMILY.<br/>
WELCOME TO OUR BURGER PALCE.”<br/>
<p>FOLLOW US AT INSTAGRAM @BURGER.PALCE</p>
</b> 
      </div>
<div className='last'>
 <p><b>Powered By   KhambraVFX</b> </p>
</div>



        
        </div>
  )
}
