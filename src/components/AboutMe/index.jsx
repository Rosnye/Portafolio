import { Box, Container } from "@mui/material"
import "./about.css"



const About = () => {
    return(
        <Container>
            <Box className="caja">
                <p>
                    I am a junior React JS developer certified by Alura Latam, with a background in customer service, 
                    and a strong foundation in social and communication skills. In addition to my technical expertise, 
                    I possess fluent English language skills. I am an adept problem solver with a creative mindset, 
                    consistently delivering efficient solutions. My leadership abilities complement my versatile skill set. 
                    Outside of my professional life, I am an active individual, engaging in sports and music, 
                    demonstrating a well-rounded and dynamic personality.
                </p>
                <img src="https://github.com/rosnye.png" alt="Profile image" className="perfil" />
            </Box>
        </Container>

    )
}

export default About