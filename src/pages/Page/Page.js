import Wrap from "../../components/wrap/wrap";
import main from "../../store/main";
import {observer} from 'mobx-react-lite'
import classes from './page.module.css'

export default observer(function Page({id}) {
    return (
        <Wrap style={classes.wrapper}>
            {main.getData(Number.parseInt(id))()}
        </Wrap>
    );
})