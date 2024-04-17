import Button from '../Button/Button'
import './Card.css'

const Card = ({color, image, backgroundColor, titulo, className, text}) => {
    return(
        <div className={className} style={{backgroundColor: backgroundColor}} >
            <img src={image} alt="" />
            <h1 style={{color:color}}>{titulo}</h1>
            <p style={{color:color}}>{text}</p>
            <Button className="button01" text="Learn More" color={backgroundColor}/>
        </div>
    )
}

export default Card
