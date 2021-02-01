import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import productImage from '../../../assets/mutt.jpg';

import useStyles from './styles';

export default function Product({ product, onAddToCart }) {
  console.log('PRODUCT', product);
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.product}>
      <CardActionArea className={classes.productCard}>
        <CardMedia
          className={classes.productCardImage}
          component="img"
          alt="Contemplative Reptile"
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
              size="small"
              color="primary"
              variant="contained"
              onClick={handleAddToCart}
            >
              Buy
            </Button>
            <Button size="small" color="primary" variant="contained">
              Learn More
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
