import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';

import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  if (!products.length) return <p>Loading...</p>;
  return (
    <main className={classes.content}>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={12} md={12} lg={12}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
export default Products;
