import React, { FC } from 'react'
import Grid from '@material-ui/core/Grid';
import profilePic from './profile.png';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';

const HomePage: FC = () => (
  <Grid
  container
  spacing={2}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
>
    <Grid md={12}
    container
    spacing={0}
    alignItems="center"
    justify="center"
  >
    <Grid container md={6} justify="center" alignItems="center">
      <img src={profilePic} alt="Profile pic" style={{ height: '30vh'}}/>
    </Grid>
    <Grid container md={6} justify="space-between" direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h3">I'm <strong>João Rodrigues</strong></Typography>
        <Typography variant="h6">Email: <span>joaorodrigues.xp.15@gmail.com</span></Typography>
        <Typography variant="h6">I'm a frontend developer.</Typography>
      </Grid>
      <Grid item>
        <IconButton aria-label="Facebook" size="medium">
          <FacebookIcon scale={2} fontSize="large"/>
        </IconButton>
        <IconButton aria-label="Instagram" size="medium">
          <InstagramIcon scale={2} fontSize="large"/>
        </IconButton>
        <IconButton aria-label="LinkedIn" size="medium">
          <LinkedInIcon scale={2} fontSize="large"/>
        </IconButton>
        <IconButton aria-label="LinkedIn" size="medium">
          <TwitterIcon scale={2} fontSize="large"/>
        </IconButton>
      </Grid>
    </Grid>
  </Grid>
</Grid>
)

export default HomePage