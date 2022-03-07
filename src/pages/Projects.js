import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';
import { NewProject } from '../components/Projectos/NewProject';
import { Lista_proyectos } from '../components/Projectos/Lista_proyectos';
import PersistentDrawerLeft, { Menu } from '../components/Projectos/PersistentDrawerLeft';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        marginTop: '70px'
    },
    mindraw:{
        height:'150px'
    }
}));
export const Projects = () => {
    const [seleccionado, setSeleccionar] = useState(<NewProject />)
    const [abierto, setAbrir] = useState(false)
    const seleccionar = ({ target }) => {
        console.log(target)
    }

    const mostrar = () => {

        setAbrir(!abierto)
    }


    const classes = useStyles();

    return (
        <div className={classes.root}>
       
                 <PersistentDrawerLeft seleccionado={seleccionado}/>    
    
        </div>

    )
}
