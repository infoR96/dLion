import React,{useState} from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { Projects } from '../pages/Projects'
import { Navbar } from '../components/bases/Navbar';
import { Hidden } from '@material-ui/core';
import { Cajon } from '../components/bases/Cajon';
import '../App.css';
import { Datos } from '../pages/Datos';
import { Configuraciones } from '../pages/Configuraciones';

function Rutas () {
    const [abrir, setAbrir] = useState(false)
    const mostrar = () => {
        setAbrir(!abrir)
      }

    return (
       <BrowserRouter>
       <Navbar mostrar={mostrar}/>
       <Hidden mdUp>
          <Cajon variant='temporary'
            open={abrir}
            onClose={mostrar}
            mostrar={mostrar} />
        </Hidden>
       <Routes>
       <Route path='/proyectos' element={<Projects/>}/>
       <Route path='/data' element={<Datos/>}/>
       <Route path='/configuraciones' element={<Configuraciones/>}/>
       </Routes>
       </BrowserRouter>

    )}

export default Rutas;
