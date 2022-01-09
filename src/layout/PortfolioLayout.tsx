import { useState, useEffect } from 'react'
import { Outlet} from 'react-router-dom'; 

import { Container } from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';




import MuiAppBar from './MuiAppBar';
import ParticleBackground from './ParticleBackground';

interface LayoutProps {

}


const PortfolioLayout = (props: LayoutProps) => 
{

    const [darkMode, setDarkMode] = useState(false);
    const [navigationDrawerOpen, setNavigationDrawerOpen] = useState(false);

    useEffect(() => {
      setDarkMode(!!localStorage.getItem('darkModeCheck'));
    }, [darkMode])

    const muiTheme = createTheme(
    {
      palette: 
      {
        mode: darkMode ? 'dark' : 'light',
        primary: 
        {
          main: '#003BA3'
        },
        secondary:
        {
          main: '#7AABFF'
        }
      }
    })

    const toggleDarkMode = () =>
    {
    if(!!localStorage.getItem('darkModeCheck'))
    {
        localStorage.removeItem('darkModeCheck');
        setDarkMode(false);
    }
    else
    {
        localStorage.setItem('darkModeCheck', 'darkModeActive');
        setDarkMode(true);
    }
  }




    return (

    <ThemeProvider theme={muiTheme}>
        <ParticleBackground />
        <MuiAppBar navigationDrawerOpen={navigationDrawerOpen} setNavigationDrawerOpen={setNavigationDrawerOpen} toggleDarkMode={toggleDarkMode}>
            <Container>
                              
            </ Container>
        </MuiAppBar>
            <Outlet context={[darkMode, setDarkMode, navigationDrawerOpen, setNavigationDrawerOpen]}/>
    </ThemeProvider>
    )
}

export default PortfolioLayout;