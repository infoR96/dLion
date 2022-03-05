import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';
import { NewProject } from '../components/Projectos/NewProject';
import { Lista_proyectos } from '../components/Projectos/Lista_proyectos';
import { Menu } from '../components/Projectos/Menu';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        marginTop: '70px'
    },
    menu:{
        borderRadius:'100%',
        backgroundColor:'red',
        marginLeft:'18px',
        padding:theme.spacing(2),
        color: 'black',

        

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
            <Button onClick={mostrar}>
             <MenuIcon variant="contained" className={classes.menu}/>
             </Button>
            <h1>Presentacion de datos</h1>



            <Lista_proyectos />
            {seleccionado}


            <Menu abierto={abierto}/>

            <button onClick={mostrar}>MOSTRAR MENU</button>



        </div>

    )
}
