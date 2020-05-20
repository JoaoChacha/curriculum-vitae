import React, { FC } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { technical } from './articles.json'
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';

const Articles: FC = () => (
<>
<Typography variant="h1">Articles</Typography>

<Grid
  container
  justify="center"
  style={{ minHeight: '88vh' }}
>

<List>
  {technical.map(({ chips, title, subtitle }: Article) => (
    <ListItem alignItems="center">
      <ListItemIcon>
        <CodeIcon />
      </ListItemIcon>
      <ListItemText primary={title} secondary={subtitle} />
    </ListItem>
  ))}
</List>
</Grid>
</>
)

export default Articles