import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import { useAlert } from 'react-alert';
import { Paper } from '@material-ui/core';

const randomAlertMessage = () => {
  const quoteArray = [
    '1,500 Games added to cart!',
    'Today we are eating!',
    'Your father is proud.',
    'Credit card cloned.',
    'You better add another one to the cart...',
    "ABRACADABRA! Nope, you're still uggly.",
    'and BOOM! Just like that our intern gets paid this month.',
    'For every game you purchase our founder gets to pay for child support.',
    'What doesn’t kill you. Disappoints me.',
    'The people who tolerate you on a daily basis are the real heroes.',
    'Don’t be ashamed of who you are. That’s your parent’s job.',
    'You can’t Photoshop personality.',
    'You have your entire life to be a jerk. Why not take today off?',
    'Remember, for every game you buy our founders drink a shot in your honor.',
  ];

  const randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
  return randomQuote;
};

export default function Product({ product, onAddToCart }) {
  const alert = useAlert();
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Paper elevation={3} className={classes.product}>
      <CardActionArea className={classes.productCard}>
        <CardMedia
          className={classes.productCardImage}
          component="img"
          alt="Rekt The Game"
          src={product.media.source}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.productContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
          <Typography variant="h5" color="textSecondary" component="h5">
            ${product.price.formatted}
          </Typography>

          <CardActions className={classes.productButtons}>
            <Button
              size="large"
              variant="contained"
              className={classes.productButton}
              onClick={() => {
                handleAddToCart();
                alert.success(randomAlertMessage());
              }}
            >
              Buy
            </Button>
            <Button
              component={Link}
              className={classes.productButton}
              to="/productpage"
              size="large"
              variant="contained"
            >
              Learn More
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Paper>
  );
}
