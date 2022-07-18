import classes from "./main.module.css"
import main from "./main.jpg"
import { Link } from "wouter"




function Main() {
    return (
        <div className={classes.wrapper}>
            <img style={{width:"100vw",height:"180vh"}} src={main} className={"uk-animation-fade uk-animation-slow"}/>
            <div style={{width:"100vw"}} className={`${classes.bottom} uk-animation-fade uk-animation-slow`}>
                <Link href="/cards/voenie" className={classes.link}>Узнать как это было <i className="fas fa-arrow-right"></i></Link>
            </div>
        </div>
    );
}

export default Main;