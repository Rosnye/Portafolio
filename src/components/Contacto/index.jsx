import React from 'react';
import { Container, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import "./contact.css"

const Contact = () => {
    return (
        <Container className='contain'>
            <Typography variant="h4">Información de Contacto</Typography>
            <List>
                <ListItem button component="a" href="https://www.linkedin.com/in/david-fletes-729018228" target="_blank" rel="noopener noreferrer">
                <ListItemIcon>
                    <LinkedIn />
                </ListItemIcon>
                <ListItemText primary="LinkedIn" />
                </ListItem>
                <ListItem button component="a" href="https://github.com/Rosnye" target="_blank" rel="noopener noreferrer">
                <ListItemIcon>
                    <GitHub />
                </ListItemIcon>
                <ListItemText primary="GitHub" />
                </ListItem>
                <ListItem>
                <ListItemIcon>
                    <Email />
                </ListItemIcon>
                <ListItemText primary="Email: davd326at@gmail.com" />
                </ListItem>
            </List>
        </Container>
    )
}

export default Contact
