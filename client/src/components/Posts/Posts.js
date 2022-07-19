import React from 'react'
import { Grid, CircuralProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Post from './Post/Post.js'
import useStyles from './styles.js'

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles()

  console.log(posts)
  return !posts.length ? (
    <CircuralProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing-={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Posts
