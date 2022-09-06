import React from 'react'
import'./style/Offers.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function Offers() {
  return (
    <div className='Top'>
   Top Brands For You
  
  <img
    src="images/saini.webp" 
    className="img-circle"
    />
    <img
    src="images/baoji.webp" 
    className="baoji"
    />
     <img
    src="images/pizaaking.webp" 
    className="pizza"
    />
     <img
    src="images/bakery.webp" 
    className="Bakery"
    />

<p className='hisar'>Hisar Locality Restaurants</p>

<div className=''>
<Card style={{ width: '20rem' , height:'15rem',postion:'relative', top:'250px', left:'10px'  }}>
<Card.Img variant="top" src="images/par.webp" />
      <Card.Body>
        <Card.Title>BreakFast Special</Card.Title>
        <Card.Text className='text'>
        North Indian
              ₹ 40
        </Card.Text>
        <Card.Text className='text1'>
       Discount:10%
        </Card.Text>
        <Button variant="primary" href="order">Order</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' , height:'15rem',postion:'relative', top:'10px', left:'420px'  }}>
<Card.Img variant="top" src="images/ras.webp" />
      <Card.Body>
        <Card.Title>BreakFast Special</Card.Title>
        <Card.Text className='text'>
         Indian Desert
              ₹ 120
        </Card.Text>
        <Card.Text className='text1'>
       Discount:20%
        </Card.Text>
        <Button variant="primary" href="order">Order</Button>
      </Card.Body>
    </Card>



    <Card style={{ width: '20rem' , height:'15rem',postion:'relative', top:'-235px', left:'900px'  }}>
<Card.Img variant="top" src="images/nan.webp" />
      <Card.Body>
        <Card.Title>BreakFast Special</Card.Title>
        <Card.Text className='text'>
        Tandorii Naan
              ₹ 80
        </Card.Text>
        <Card.Text className='text1'>
       Discount:25%
        </Card.Text>
        <Button variant="primary" href="order">Order</Button>
      </Card.Body>
    </Card>
  
    </div> 
 </div>
  )
}
