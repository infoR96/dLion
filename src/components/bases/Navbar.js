import React from 'react'
import { AppBar,makeStyles,Toolbar,Typography, IconButton, Button} from '@material-ui/core'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from "react-router-dom";


const useStyles = makeStyles(theme=>({ 
    ofset:theme.spacing(2),
    menuButton: {
        marginRight: theme.spacing(2),
   
      },
      list:{
        [theme.breakpoints.down('sm')]:{
          display:"none",
          float: "right",
          position: 'relative'
      },
      },
    title:{
        flexGrow:1
    },
    boton: {
        background: "linear-gradient(70deg, #212121 30%, #f50057 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        marginRight:theme.spacing(2),
      },

    
}))

export const Navbar = ({mostrar}) =>{
    const classes = useStyles();
    return(
        <div>
            <AppBar >
                    <div className='lista'>
                    <Link className='curri' to="/proyectos"> 
                    <IconButton aria-label="menu" 
                    color="inherit"
                     className={classes.menuButton}
                     onClick={mostrar}>
                    <img src={`/assets/DELION logo.PNG`} alt='logo Delion' className='logo '/>
                    </IconButton>
                    </Link>
         
               
                <div   className={`${classes.list} ` }>
                    <Link className='curri' to="/proyectos"><Button  variant= "contained" 
                    className={`${classes.boton} curri ` } startIcon={<AccountTreeIcon/>}>Proyectos</Button></Link> 
                    <Link className='curri' to="/data"><Button  variant= "contained" 
                    className={`${classes.boton} curri ` } startIcon={<StorageIcon/>}>Base de datos</Button></Link> 
                    <Link className='curri' to="/configuraciones"><Button variant = "contained" 
                    className={classes.boton} startIcon={<SettingsIcon/>}>Configuraciones</Button></Link> 
                    </div>
                    </div>
                    
            </AppBar>

        </div>
    )
}
