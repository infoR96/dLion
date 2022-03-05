import React from 'react'
import {
    ListItem,
    Button,
    makeStyles
} from '@material-ui/core';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from "react-router-dom";

const estilos = makeStyles(theme=>({
    
    boton: {
        background: "linear-gradient(70deg, #f50057 15%,  #212121  50%)",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        height: 48,
        textdecoration:"none"
      }
    }))

export const Listas = ({mostrar}) => {

    const classes = estilos();
    return (
        <div>
                <ListItem  button   className={classes.boton} >
                <Link  onClick={mostrar} className ='curri2' to="/proyectos"><Button  className ='curri' startIcon={<AccountTreeIcon/>}>Proyectos </Button></Link>
                </ListItem>
                <ListItem button className={classes.boton}>
                <Link  onClick={mostrar} className ='curri2' to="/data"><Button  className ='curri' startIcon={<StorageIcon/>}>Base de datos </Button></Link>
                </ListItem>
                <ListItem button className={classes.boton}>
                <Link   className ='curri2' onClick={mostrar} to="/configuraciones"><Button className ='curri'  startIcon={<SettingsIcon/>}>Configuraciones</Button> </Link> 
                </ListItem>
        
        </div>
    )
}
