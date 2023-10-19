import { Box, Container } from "@mui/material"

const Habilidades = () => {
    return (
        <Container>
            <Box>
                <p style={{padding:"90px"}}>
                    I hold a Front-End Development certification from Alura Latam, with a primary focus on React JS. 
                    In addition, I possess a strong foundation in Back-End development with Java, accrued through hands-on experience. 
                    With four years of programming experience, 
                    I have dedicated the last six months to specialize in Front-End development using React, 
                    showcasing my commitment to staying at the forefront of industry trends. Proficient in Git and GitHub, 
                    I ensure effective version control and collaborative coding. 
                    My project management skills extend to using Figma and Trello for team organization, 
                    fostering efficient workflows. Complementing my technical prowess, I bring a range of soft skills to the table, 
                    including strong communication, teamwork, persistence, efficiency, problem-solving, and proactive initiative, 
                    all of which contribute to my well-rounded and effective approach to project development.
                </p>
            </Box>
            <Box style={{display:"flex", justifyContent:"space-around"}}>
                <img src="https://lthub.ubc.ca/files/2021/06/GitHub-Logo.png" alt="github" style={{height:"10rem"}}/>
                <img src="https://iconape.com/wp-content/files/ni/64759/png/git-icon.png" alt="git" style={{height:"10rem"}}/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" style={{height:"10rem"}}/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" style={{height:"10rem"}}/>
            </Box>
        </Container>
    )
}

export default Habilidades