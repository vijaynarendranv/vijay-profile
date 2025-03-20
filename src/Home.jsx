import React from "react";
import { Container, AppBar, Toolbar, Typography, Card, CardContent, Button, Grid, IconButton, Box, Avatar } from "@mui/material";
import { GitHub, LinkedIn, Email, Work, School, Home as HomeIcon, Code, Business, Phone } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const PageContainer = styled("div")({
  backgroundColor: "#121212",
  color: "#fff",
  minHeight: "100vh",
  padding: "4rem 0",
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
});

const Section = styled("div")({
  margin: "6rem auto",
  maxWidth: "80%",
  padding: "4rem 2rem",
  borderRadius: "10px",
  textAlign: "center",
});

const Navbar = styled(AppBar)({
  backgroundColor: "#1f1f1f",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000,
});

const Home = () => (
  <Section id="home">
    <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
      <Avatar src="/profile.jpg" alt="Vijay Narendran" sx={{ width: 100, height: 100 }} />
      <Typography variant="h2">Vijay Narendran V</Typography>
    </Box>
    <Typography variant="h5">Full Stack Developer | Data Analyst</Typography>
    <Typography>Seeking opportunities to contribute and grow in a dynamic environment.</Typography>
  </Section>
);

const About = () => (
  <Section id="about" sx={{ backgroundColor: "#1e1e1e" }}>
    <Typography variant="h4"><School /> About Me</Typography><br/>
    <Typography>
      An inquisitive and disciplined individual with strong learning capabilities, known for reliability and
      thriving under pressure.
    </Typography>
    <Typography variant="h6">Education</Typography>
    <Typography>Coimbatore Institute of Technology - M.Sc. Software Systems (CGPA: 8.78)</Typography>
  </Section>
);

const Projects = () => {
  const projects = [
    { title: "Checkers Multiplayer Game", desc: "Built using React.js and Node.js with WebSockets.", link: "https://github.com/vijaynarendranv/Checkers-Multiplayer-game" },
    { title: "FlexFit", desc: "An Android fitness app with OpenAI integration.", link: "https://github.com/vijaynarendranv/FlexFit" },
    { title: "Dine Dash", desc: "A food ordering app with React and Node.js.", link: "https://github.com/vijaynarendranv/food_delivery_main" },
  ];

  return (
    <Section id="projects">
      <Typography variant="h4"><Code /> Projects</Typography><br/>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: "#1e1e1e", color: "#fff", padding: "1rem" }}>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography sx={{marginBottom:"20px"}}>{project.desc}</Typography>
                <Button href={project.link} target="_blank" color="primary" variant="contained">View on GitHub</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

const Experience = () => (
  <Section id="experience">
    <Typography variant="h4" sx={{marginBottom:"20px"}}><Work /> Experience</Typography>
    <Box sx={{ backgroundColor: "#FFD700", color: "#000", padding: "2rem", marginBottom: "2rem", borderRadius: "10px" }}>
      <Typography variant="h6">EY - Data Analyst Intern</Typography>
      <Typography>Analyzing financial data using Alteryx and Excel.</Typography>
    </Box>
    <Box sx={{ backgroundColor: "#98FB98", color: "#000", padding: "2rem", borderRadius: "10px" }}>
      <Typography variant="h6">Trader's Ark - Frontend Developer Intern</Typography>
      <Typography>Developed a trading web app with React and Node.js, optimized PostgreSQL, and deployed on AWS.</Typography>
    </Box>
  </Section>
);

const Contact = () => (
  <Section id="contact">
    <Typography variant="h4">Contact</Typography>
    <IconButton href="mailto:vijaynarendranvadivel@gmail.com" target="_blank" color="primary"><Email /></IconButton>
    <IconButton href="https://linkedin.com/in/vijaynarendranv" target="_blank" color="primary"><LinkedIn /></IconButton>
    <IconButton href="https://github.com/vijaynarendranv" target="_blank" color="primary"><GitHub /></IconButton>
    <IconButton href="tel:+919597357534" target="_blank" color="primary"><Phone /></IconButton>
  </Section>
);

const Main1 = () => (
  <PageContainer>
    <Navbar>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Button color="inherit" href="#home"><HomeIcon /> Home</Button>
        <Button color="inherit" href="#about">About</Button>
        <Button color="inherit" href="#projects">Projects</Button>
        <Button color="inherit" href="#experience">Experience</Button>
        <Button color="inherit" href="#contact">Contact</Button>
      </Toolbar>
    </Navbar>
    <Home />
    <About />
    <Projects />
    <Experience />
    <Contact />
  </PageContainer>
);

export default Main1;
