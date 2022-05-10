import { useContext } from 'react';
import { Dialog, makeStyles, withStyles, Box } from '@material-ui/core';

import { UserContext } from '../../context/UserProvider';

//components
import Menu from './menu/Menu';
import ChatBox from './chat/ChatBox';
import EmptyChat from './chat/EmptyChat';

const useStyles = makeStyles({
    component:{
        display:'flex'
    },
    leftComponent:{
        minWidth:'400px',
    },
    rightComponent:{
        borderLeft:'1px solid rgba(0,0,0,0.3)',
        width:'75%'
    }
})

const style={
    dialogPaper:{
    height:'95%',
    width:'90%',
    boxShadow:'none',
    borderRadius:'0',
    maxHeight:'100%',
    maxWidth:'100%',
    overflow:'hidden'
}}


const ChatDialog = ({ classes }) => {
    const classname = useStyles();

    const { person } = useContext(UserContext);
    
    return (
        <Dialog 
            open={true} 
            classes={{paper: classes.dialogPaper}} 
            BackdropProps={{style: {backgroundColor: 'unset'}}}
        >
            <Box className={classname.component}>
                <Box className={classname.leftComponent}>
                    <Menu/>
                </Box>
                <Box className={classname.rightComponent}>
                    {
                        Object.keys(person).length  ? <ChatBox/> : <EmptyChat />
                    }
                </Box>
            </Box>
        </Dialog>
    )
}

export default withStyles(style)(ChatDialog);