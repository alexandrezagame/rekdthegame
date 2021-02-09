import React from 'react';
import useStyles from './styles';
import {
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import pic1 from '../../assets/logosandpics/IMG-1807.JPG';
import pic2 from '../../assets/logosandpics/IMG-1786.JPG';
import pic3 from '../../assets/logosandpics/IMG-1796.JPG';
// import Button from '@material-ui/core/Button';

const Hero = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.heroContainer}>
        <Card className={classes.product}>
          <CardActionArea className={classes.productCard}>
            <CardMedia
              className={classes.productCardImage}
              component="img"
              alt="image 1"
              src={pic1}
              title="image 1"
            />
            <CardContent className={classes.productContent}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ textAlign: 'center' }}
              >
                <h2>Hilarious Gameplay</h2>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Every square will lead to a different hysterical action for one
                or more players. From Challenges that play like mini-games to
                get ahead, to Punishments that will have your friends in
                stitches! And don’t forget the Specials, which can completely
                change the game. Every roll will bring excitement and humor!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.product}>
          <CardActionArea className={classes.productCard}>
            <CardMedia
              className={classes.productCardImage}
              component="img"
              alt="image 2"
              src={pic2}
              title="image 2"
            />
            <CardContent className={classes.productContent}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ textAlign: 'center' }}
              >
                <h2>Get Competitive</h2>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                The road to the finish is a dangerous one. Your first enemy is
                the board, but your most deadly foe will be your friends.
                Challenges will have you taking sides, feuds will be created and
                Specials will awaken the competitive spirits in the room. Just
                remember: taking that winning selfie is everything.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.product}>
          <CardActionArea className={classes.productCard}>
            <CardMedia
              className={classes.productCardImage}
              component="img"
              alt="image 3"
              src={pic3}
              title="image 3"
            />
            <CardContent className={classes.productContent}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ textAlign: 'center' }}
              >
                <h2>Play Your Way</h2>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                The game lets you make your own choices - and live with the
                consequences. You can take the treacherous shortcuts and try to
                get ahead, at your own peril. You may be faced with the
                opportunity to send a player back to the start, creating a
                rivalry. You can decide where to send drinks and who to call out
                on Specials. It’s up to you.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default Hero;
