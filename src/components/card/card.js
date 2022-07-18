import classes from './card.module.css'
import { useLocation } from "wouter";


function Card({id,img,title,desc}) {

    const [location, setLocation] = useLocation();

    return (
        <div onClick={() => setLocation(`/page/${id}`)} className={classes.wrapper}>
            <img className={"uk-responsive-width"} src={img}/>
         <div>
             <h1>{title}</h1>
             <p>{desc}</p>
         </div>
        </div>
    );
}

export default Card;