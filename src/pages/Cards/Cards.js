import Wrap from "../../components/wrap/wrap";
import classes from './cards.module.css'
import Card from "../../components/card/card";
import main from "../../store/main";
import {observer} from 'mobx-react-lite'
import {useEffect} from "react"
import {Link} from "wouter";

export default observer(function Cards({active}) {
    useEffect(()=>{
        main.setCategory(active)
    },[active])
    return (
        <>
            <div className={classes.tabs}>
                <Link href="/cards/voenie"> <h3 className={active === 'voenie' ? classes.active:''}>Военные события</h3></Link>
                <Link href="/cards/prepria"> <h3 className={active === 'prepria' ? classes.active:''}>Предприятия</h3></Link>
                <Link href="/cards/lichnosti"><h3 className={active === 'lichnosti' ? classes.active:''} >Личности</h3></Link>
                <Link href="/cards/politsobit"> <h3 className={active === 'politsobit' ? classes.active:''}>Политические события</h3></Link>
                <Link href="/cards/chaes"><h3 className={active === 'chaes' ? classes.active:''}>ЧАЭС</h3></Link>
            </div>
        <Wrap style={classes.wrapper}>

            {main.data[active].map(({id,img,title,desc})=>{
               return <Card key={id} id={id} title={title} img={img} desc={desc}/>
            })}
        </Wrap>
            </>
    );
})

