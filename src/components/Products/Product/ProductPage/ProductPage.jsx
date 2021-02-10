import React from 'react';
import useStyles from './styles';
import productImage1 from '../../../../assets/logosandpics/IMG-1771.JPG';
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
        <div className={classes.productImageContainer}>
            <img className={classes.productImage} src={productImage2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
