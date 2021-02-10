import React from 'react';
import useStyles from './styles';
import Carousel from 'react-material-ui-carousel';
import productImage2 from '../../../../assets/logosandpics/IMG-1774.JPG';
import productImage3 from '../../../../assets/logosandpics/IMG-1786.JPG';
import productImage4 from '../../../../assets/logosandpics/IMG-1792.JPG';
import productImage5 from '../../../../assets/logosandpics/IMG-1796.JPG';
import productImage6 from '../../../../assets/logosandpics/IMG-1807.JPG';
import productImage7 from '../../../../assets/logosandpics/IMG-2204.JPG';
import productImage8 from '../../../../assets/logosandpics/IMG-3250.JPG';
import productImage9 from '../../../../assets/logosandpics/IMG-4008.JPG';
import productImage10 from '../../../../assets/logosandpics/IMG-4283.JPG';

const ProductPage = ({ onAddToCart }) => {
  const classes = useStyles();
  const items = [
    productImage2,
    productImage3,
    productImage4,
    productImage5,
    productImage6,
    productImage7,
    productImage8,
    productImage9,
    productImage10,
  ];

  return (
    <div className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.productInfoContainer}>
        <div className={classes.productInfo}>
          <h1>PRODUCT PAGE</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            iste quidem ullam quis, commodi, laudantium architecto ut aut
            inventore omnis placeat? Officia, saepe? Ab rem maiores quas. Velit
            nostrum pariatur cupiditate laborum praesentium eveniet deserunt
            asperiores! In eum ex, amet labore nisi cumque alias asperiores
            ullam ut, quas accusantium sunt.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            iste quidem ullam quis, commodi, laudantium architecto ut aut
            inventore omnis placeat? Officia, saepe? Ab rem maiores quas. Velit
            nostrum pariatur cupiditate laborum praesentium eveniet deserunt
            asperiores! In eum ex, amet labore nisi cumque alias asperiores
            ullam ut, quas accusantium sunt.
          </p>
        </div>
        {/* <div className={classes.productImageContainer}> */}
        <Carousel
          className={classes.productImageContainer}
          autoPlay
          interval="6000"
          indicators={false}
          navButtonsAlwaysVisible={true}
        >
          {items.map((item, i) => (
            <img key={i} src={item} className={classes.productImage} />
          ))}
        </Carousel>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProductPage;
