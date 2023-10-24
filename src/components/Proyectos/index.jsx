import { Box, Container } from "@mui/material"

const Proyectos = () => {
    return(
        <Container>
            <Box style={{display:"flex",justifyContent:"space-evenly"}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/512px-React.svg.png" alt="react svg" style={{height:"10rem"}}/>
                <h2 style={{display:"flex", justifyContent:"center", width:"50px", fontSize:"40px"}}>+</h2>
                <img src="https://www.svgrepo.com/show/374167/vite.svg" alt="vite svg" style={{height:"10rem"}} />
            </Box>
            <Box>
                <h2>Cutting-Edge Project Technologies: React + Vite</h2>
                <p>
                This project was developed using cutting-edge technologies. 
                React and Vite were employed as the primary framework for web application development, 
                harnessing efficiency and speed to the fullest. Additionally, the popular Material UI 
                library was integrated to achieve an appealing and functional user interface. 
                Finally, the project is hosted on GitHub Pages for public access and viewing, 
                ensuring a smooth and accessible online user experience.
                </p>
            </Box>
        </Container>
    )
}

export default Proyectos