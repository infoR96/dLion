import React from 'react'
import {
    Drawer,
    makeStyles
} from '@material-ui/core'
import { Opciones } from './Opciones';

const estilos = makeStyles(theme => ({
    drawer: {
        flexShrink: 0,
        background: 'black',
        height:'200px',
        color:'white'
    },
    seleccion:{
    }
}))

export const Menu = ({variant,abierto,onClose,mostrar}) => {
    const classes = estilos();
    return (
        <div>
        <Drawer
            className={classes.drawer}
            anchor="left"
            variant={variant}
            open={abierto}
            onClose={mostrar}
            >  
            <div
                className={classes.toolbar}>
            <Opciones mostrar={mostrar}/>
            </div>

        </Drawer>
        </div>
    )
}
