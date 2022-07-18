import wrap from './wrap.jpg'
import classes from './wrap.module.css'
import {Link} from "wouter";

function Wrap({style,children}) {
    return (
      <div className={classes.wrapper}>
          <Link href="/" className={classes.link}></Link>
          <div className={classes.left}>
              <div className={classes.lCon}><img style={{width:"3wh"}} src={"https://media.discordapp.net/attachments/824911882120986676/910543688323715102/2021-11-17_175500-removebg-preview.png"}/><Link href="/cards/voenie"><p>Военные события</p></Link></div>
              <div className={classes.lCon}><img src={"https://media.discordapp.net/attachments/824911882120986676/910551983923032104/7ed47a93d3d6acce.png"}/><Link href="/cards/prepria"><p>Предприятия</p></Link></div>
              <div className={classes.lCon}><img style={{height:"4vh"}} src={"https://media.discordapp.net/attachments/824911882120986676/910544746974437448/2021-11-17_175928-removebg-preview.png"}/><Link href="/cards/lichnosti"><p>Личности</p></Link></div>
              <div className={classes.lCon}><img style={{height:"4vh"}} src={"https://media.discordapp.net/attachments/824911882120986676/910544984678223964/2021-11-17_180028-removebg-preview.png"}/><Link href="/cards/politsobit"><p>Политические события</p></Link></div>
              <div className={classes.lCon}><img style={{width:"3wh"}} src={"https://media.discordapp.net/attachments/824911882120986676/910545655699750912/2021-11-17_180302-removebg-preview.png"}/><Link href="/cards/chaes"><p>ЧАЭС</p></Link></div>
          </div>
          <img className={classes.wrapImg} src={wrap}/>
          <div className={style}>
              {children}
          </div>
      </div>
    );
}

export default Wrap;