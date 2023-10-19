import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import About from '../AboutMe';
import Educacion from '../Educacion';
import Habilidades from '../Habilidades';
import Proyectos from '../Proyectos';

const Navigation = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="About Me" value="1" />
            <Tab label="Skills" value="2" />
            <Tab label="Education" value="3" />

          </TabList>
        </Box>
        <TabPanel value="1"><About/></TabPanel>
        <TabPanel value="2"><Habilidades/></TabPanel>
        <TabPanel value="3"><Educacion/></TabPanel>

      </TabContext>
    </Box>
    )
}

export default Navigation