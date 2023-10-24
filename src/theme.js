// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF', // Cambia este valor al color principal que desees
    },
    secondary: {
      main: '#ff5722', // Cambia este valor al color secundario que desees
    },
    nav: {
      main: '#3A7DCA', // Cambia este valor al color secundario que desees
    },
    background: {
        default: '#000', // Cambia este valor al color de fondo que desees
      },
  },
});

export default theme;
