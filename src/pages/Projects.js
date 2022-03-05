import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';
import { NewProject } from '../components/Projectos/NewProject';
import { Lista_proyectos } from '../components/Projectos/Lista_proyectos';
import { Menu } from '../components/Projectos/Menu';

const useStyles =  makeStyles(()=>({

    root: {
        flexGrow: 1,
        marginTop:'70px'
        
    }

    
}));

export const Projects = () => {
    const [seleccionado, setSeleccionar]  = useState(<NewProject/>)
    const [abierto, setAbrir]= useState(false)
    const seleccionar = ({target}) => {
        console.log(target)
      }

      const mostrar =()=>{

        setAbrir(!abierto)
      }


    const classes = useStyles();

    return (
        <div className={classes.root}>

                <h1>Presentacion de datos</h1>
            
                <Lista_proyectos/>
            {seleccionado}
            
                
            <Menu/> 

            <button onClick={mostrar}>MOSTRAR MENU</button>
              
                
               
        </div>

    )
}
