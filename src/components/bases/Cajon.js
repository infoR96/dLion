import React from 'react'
import {
    Drawer,
    makeStyles
} from '@material-ui/core'
import { Listas } from './Listas';

const estilos = makeStyles(theme => ({
    drawber: {
        flexShrink: 0,
        background: 'black'
    },
}))

export const Cajon = ({variant,open,onClose,mostrar}) => {
    const classes = estilos();
    return (
        <Drawer
            className={classes.drawer}
            anchor="top"
            variant={variant}
            open={open}
            onClose={onClose}
            >  
            <div
                className={classes.toolbar}>
            <Listas mostrar={mostrar}/>
            </div>

        </Drawer>
    )
}
