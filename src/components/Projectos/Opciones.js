import React from 'react'
import {
    ListItem,
    Button,
    makeStyles
} from '@material-ui/core';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import StorageIcon from '@mui/icons-material/Storage';


const estilos = makeStyles(theme=>({
    
    boton: {
        background: "linear-gradient(70deg, #f50057 15%,  #212121  50%)",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        height: 48,
        textdecoration:"none"
      }
    }))

export const Opciones = ({mostrar}) => {

    const classes = estilos();
    return (
        <div>
                <ListItem  button   className={classes.boton} >
                <Button startIcon={<AccountTreeIcon/>}>Fragmentacion</Button>
                </ListItem>
                <ListItem button className={classes.boton}>
                <Button   startIcon={<StorageIcon/>}>Vibracion </Button>
                </ListItem>
                <ListItem button className={classes.boton}>
                <Button   startIcon={<StorageIcon/>}>Daños a los contornos </Button>
                </ListItem>
                <ListItem button className={classes.boton}>
                <Button   startIcon={<StorageIcon/>}>Avance </Button>
                </ListItem>
                <ListItem button className={classes.boton}>
                <Button   startIcon={<StorageIcon/>}>Malla Perforada </Button>
                </ListItem>
                <ListItem button className={classes.boton}>
                <Button   startIcon={<StorageIcon/>}>Accesorios de Voladura</Button>
                </ListItem>
                <ListItem button className={classes.boton}>
                <Button   startIcon={<StorageIcon/>}>Explosivo </Button>
                </ListItem>
          
          
          
          
        
        </div>
    )
}
