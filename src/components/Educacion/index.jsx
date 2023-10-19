import * as React from 'react';
import { Box, Container, ImageList, ImageListItem } from "@mui/material"

const Educacion = () => {
    return(
        <Container class="container">
            <Box>
                <p>
                    I hold a certification from Alura Latam in Front-End development, specializing in React JS. 
                    My educational background encompasses four years of programming experience, 
                    with the last six months dedicated to honing my expertise in Front-End development using React. 
                    Additionally, I have gained proficiency in back-end development with Java. 
                    My proficiency extends to version control with Git and GitHub, 
                    facilitating efficient collaborative coding processes. 
                    I have also effectively utilized tools such as Figma and Trello for team organization and project management, 
                    ensuring streamlined workflows and successful project delivery.
                </p>
                <ImageList sx={{ width: 800, height: 300 }} cols={3} rowHeight={164}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Container>
    )
}



const itemData = [
    {
        img: './Certifications/CertificadoReact.jpg',
        title: 'React Certification',
    },
    {
        img: './Certifications/BusinessAgility.png',
        title: 'Bussines Agility',
    },
    {
        img: './Certifications/OracleOne.png',
        title: 'Oracle One',
    },
    {
        img: './Certifications/Front-EndDeveloper.png',
        title: 'Front End Developer',
    }
    ]  

export default Educacion