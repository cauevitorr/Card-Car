import Card from '../Card/Card'
// import Button from '../Button/Button'
import './App.css'
import IconSedan from "../../images/icon-sedans.svg"
import IconSuv from "../../images/icon-suvs.svg"
import IconLuxury from "../../images/icon-luxury.svg"


const App = () => {
 return(
  <main>
   <Card 
   backgroundColor="hsl(31, 77%, 52%)" 
   className="card01"
   image={IconSedan}
   titulo="SEDANS"
   text="Choose a sedan for its affordability and excellent fuel economy. Ideal fro cruising in teh city or on your next road trip"
   color="hsla(0, 0%, 100%, 0.75)"
   />
   <Card 
   backgroundColor="hsl(184, 100%, 22%)" 
   className="card02"
   image={IconSuv}
   titulo="SUV"
   text="Take an suv for its spacious interior, power and versatility. Perfect for yuor next family vacation and off-road adventures"
   color="hsla(0, 0%, 100%, 0.75)"
   />
   <Card 
   backgroundColor="hsl(179, 100%, 13%)" 
   className="card03"
   image={IconLuxury}
   titulo="LUXURY"
   text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style"
   color="hsla(0, 0%, 100%, 0.75)"
   />
  </main>
 )
}

export default App
