import React, { useState, useEffect } from "react";
import {
  Card,
  Grid,
  CardActions,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Tooltip,
  IconButton,
  Zoom,
  Slide,
  Fade,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

import StyledGrid from "../../components/StyledGrid";

interface IntroSectionProps {}

const IntroSection = (props: IntroSectionProps) => {
  const [showCard, setShowCard] = useState(false);
  const [showLinkedinButton, setShowLinkedInButton] = useState(false);
  const [showGitHubButton, setShowGitHubButton] = useState(false);
  const [showResumeButton, setShowResumeButton] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowCard(true);
    }, 2000);
    setTimeout(() => {
      setShowTitle(true);
    }, 2000);

    setTimeout(() => {
      setShowLinkedInButton(true);
    }, 3000);
    setTimeout(() => {
      setShowGitHubButton(true);
    }, 4000);
    setTimeout(() => {
      setShowResumeButton(true);
    }, 5000);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 350) {
      setShowCard(false);
      setShowTitle(false);
      setShowLinkedInButton(false);
      setShowGitHubButton(false);
      setShowResumeButton(false);
    } else if (scrolled <= 350) {
      setShowCard(true);
      setShowTitle(true);
      setShowLinkedInButton(true);
      setShowGitHubButton(true);
      setShowResumeButton(true);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <StyledGrid
      container
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={3}
    >
      <Grid item xs={12} md={5} alignSelf="center">
        <Fade in={showTitle} timeout={4000}>
          <Typography variant="h3" align="center">
            Professional
          </Typography>
        </Fade>
        <Fade in={showTitle} timeout={4000}>
          <Typography variant="h3" align="center">
            .NET
          </Typography>
        </Fade>
        <Fade in={showTitle} timeout={4000}>
          <Typography variant="h3" align="center">
            {`&`}
          </Typography>
        </Fade>
        <Fade in={showTitle} timeout={4000}>
          <Typography variant="h3" align="center">
            React
          </Typography>
        </Fade>
        <Fade in={showTitle} timeout={4000}>
          <Typography variant="h3" align="center">
            Developer
          </Typography>
        </Fade>
      </Grid>
      <Grid item xs={6} md={4} alignSelf="center">
        <Fade in={showCard} timeout={4000}>
          <Card sx={{ minWidth: "9rem" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={`/Photos/SeanJosephShorterHeadShot.jpg`}
                height="75%"
                title="Sean Joseph Head Shot"
              />

              <CardContent>
                <Typography variant="h6" align="center">
                  Sean Joseph
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "center" }}>
              <Slide in={showLinkedinButton} timeout={1000}>
                <Tooltip
                  arrow
                  title="My LinkedIn Profile, send me a message!"
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    href="https://www.linkedin.com/in/sean-joseph-41ab49114/"
                    aria-label="share"
                  >
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Slide>

              <Slide in={showGitHubButton} timeout={1000}>
                <Tooltip
                  arrow
                  title="My Github Profile"
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    aria-label="share"
                    href="https://github.com/sejogit28"
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Slide>

              <Slide in={showResumeButton} timeout={1000}>
                <Tooltip
                  arrow
                  title="My updated resume"
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    aria-label="share"
                    href="/Resume/SeanJosephFullStackDeveloper2021Resume.docx"
                    download="SeanJosephResume2021"
                  >
                    <CloudDownloadIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Slide>
            </CardActions>
          </Card>
        </Fade>
      </Grid>
    </StyledGrid>
  );
};

export default IntroSection;
