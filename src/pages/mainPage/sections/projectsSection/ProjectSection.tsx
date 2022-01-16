import 
{ 
    Card, Grid, CardActions, CardMedia,CardContent, Typography, Tooltip, IconButton, Zoom
} 
from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

import projectCardData, {projCardProps} from './projectCardData';
import StyledGrid from '../../components/StyledGrid';

interface ProjectSectionProps {
    
}

const ProjectSection = (props: ProjectSectionProps) => {
    return (
        <StyledGrid 
            container 
            direction={'column'} 
            justifyContent={"center"} 
            alignItems={'center'} 
        >

            <Grid item xs={12}>
                <Typography variant='h3' align='center' gutterBottom>
                    Projects I've Built
                </Typography>
            </Grid>

            { projectCardData.map((projCard: projCardProps) =>
            {
                return (

                    <Grid item xs={9} md={9} alignSelf='center' sx={{ marginBottom: '6rem' }}>
                        <Card key={projCard.id} >               
                            <CardMedia
                                component="img"
                                src={projCard.imageSrc}
                                height="75%"                            
                                title={projCard.title}
                                sx={{ maxWidth: '40rem' }}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {projCard.description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                            {
                                projCard.liveLink ?

                                <Tooltip       
                                    arrow 
                                    title={projCard.title}
                                    TransitionComponent={Zoom}
                                >
                                    <IconButton 
                                        href={projCard.liveLink}
                                        aria-label="share"
                                    >
                                        <LinkIcon fontSize="large" />
                                    </IconButton>
                                </Tooltip>


                                :

                                <Tooltip         
                                    arrow 
                                    title='Live link coming soon' 
                                    TransitionComponent={Zoom}
                                >
                                    <IconButton 
                                        href='#'
                                        aria-label="share"
                                    >
                                        <LinkIcon fontSize="large" />
                                    </IconButton>
                                </Tooltip>
                            }
                                <Tooltip 
                                    arrow 
                                    title='Project GitHub' 
                                    TransitionComponent={Zoom}
                                >
                                    <IconButton 
                                        href={projCard.gitHubLink}
                                        aria-label="share"
                                    >
                                        <GitHubIcon fontSize="large" />
                                    </IconButton>
                                </Tooltip>
                        
                            </CardActions>
                        </Card>
                    </Grid>
                )

            })}

        </StyledGrid>
    )
}

export default ProjectSection