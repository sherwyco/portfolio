import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ProjectTemplate from './ProjectTemplate'
import { useQuery } from '@apollo/react-hooks'
import CircularProgress from '@material-ui/core/CircularProgress'
import { GET_REPOSITORY } from '../../../api'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}))

function Projects () {
  const classes = useStyles()

  const { loading, error, data } = useQuery(GET_REPOSITORY)
  if (loading) {
    return (
      <div>
        <CircularProgress color="inherit" />
      </div>
    )
  }
  if (error) return <div>`Error! ${error}`</div>
  if (data) {
    return (
      <Grid
        container
        className={classes.root}
        spacing={3}
        justify="space-evenly"
      >
        <Grid item xs={12}>
          <Typography variant="h4"> Below are my projects on GitHub</Typography>
        </Grid>
        {data.viewer.repositories.nodes.map((t, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            align="center"
          >
            <ProjectTemplate
              key={index}
              image={t.openGraphImageUrl}
              name={t.name}
              createDate={t.createdAt}
              description={t.description}
              url={t.url}
            />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default Projects
