import "./Book.css"
import OrderButton from "./OrderButton"

const Book = (props) => {
    return (
        <div className="one-book">
            <img src={props.image} alt="" />
            <h2 className="main-heading">{props.mytitle}</h2> 
            <p>{props.mypopisek}</p>
            <OrderButton />
            {}
        </div>
        
    ) 
}

export default Book