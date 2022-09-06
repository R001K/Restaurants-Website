import React from 'react'
import'./style/Menu.css'
export default function Menu() {
  return (
    <div className='menu'>
      Menu 
  <>
  <div style={{ position: "absolute", left: -500, top: 180 }}>
    <img src="images/pizza.png" width="300" height="400" />
    <p style={{ position: "absolute", left: 70, top: 10 }} />
    <h1>
      <u>
        Delicious Pizza<br/>
        Price: ₹300
        
        <u>
            </u>
      </u>
    </h1>
  </div>
  <u>
    <u>
      <div>
        <img
          src="images/burger k.png"
          style={{
            position: "absolute",
            left: -80,
            top: 210,
            height: 320,
            width: 350
          }}
        />
        <p style={{ position: "absolute", left: -30, top: 580, fontSize: 25 }}>
          <u style={{ fontSize: 30 }}>
            <h1>Delicious Burger <br/>
            Price:₹170</h1>
          </u>
        </p>
        <p style={{ position: "absolute", left: 450, top: 1850, fontSize: 25 }}>
          {" "}
          <b>
            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit{" "}
            <b>
              <b>
                {" "}
                <u> $15</u>
              </b>
            </b>
          </b>
        </p>
      </div>
      <b>
        <b>
          <div>
            <img
              src="images/pasta.png"
              style={{
                position: "absolute",
                right: 580,
                top: 180,
                height: 430,
                width: 390
              }}
            />
            <p
              style={{
                position: "absolute",
                right: 620,
                top: 580,
                fontSize: 25
              }}
            >
              <u style={{ fontSize: 30 }}>
                <h1>Delicious Pasta
                  <br/>
                  Price:₹350
                </h1>
              </u>
            </p>
         
           
          </div>

           
         
        </b>
      </b>
    </u>
  </u>
</>
<div>
<ul >
          <li >
            <a className='order' href="order">
           OrderNow 
            </a>
          </li>
          </ul>
</div>
    </div>
  )
} 
