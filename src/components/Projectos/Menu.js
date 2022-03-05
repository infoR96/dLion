import React from 'react'
import {
    Drawer,
    makeStyles
} from '@material-ui/core'
import { Opciones } from './Opciones';

const estilos = makeStyles(theme => ({
    drawber: {
        flexShrink: 0,
        background: 'black'
    },
}))

export const Menu = ({variant,open,onClose,mostrar}) => {
    const classes = estilos();
    return (
        <Drawer
            className={classes.drawer}
            anchor="top"
            variant={variant}
            open={false}
            onClose={onClose}
            >  
            <div
                className={classes.toolbar}>
            <Opciones mostrar={true}/>
            </div>

        </Drawer>
    )
}
