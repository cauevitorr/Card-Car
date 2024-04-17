import "./Button.css"
const Button = ({backgroundColor, color, text, className}) => {
    return(
        <button className={className} style={{backgroundColor:backgroundColor, color:color}}> {text}</button>
    )
}

export default Button
