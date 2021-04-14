import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Card.scss';

const useStyles = makeStyles({
  root: {
    width: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard({ name, count }) {
  console.log('Working?');

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <article className="single-card">
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Suspect
          </Typography>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Caught on Video
          </Typography>
          <Typography variant="body2" component="p">
            {count} times
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View Details</Button>
        </CardActions>
      </Card>
    </article>
  );
}
