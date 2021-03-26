import React from 'react';
import useStyles from './styles';
import Carousel from 'react-material-ui-carousel';
import Button from '@material-ui/core/Button';
import { useAlert } from 'react-alert';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import productImage2 from '../../../../assets/logosandpics/IMG-1774.JPG';
import productImage3 from '../../../../assets/logosandpics/IMG-1786.JPG';
import productImage4 from '../../../../assets/logosandpics/IMG-1792.JPG';
import productImage5 from '../../../../assets/logosandpics/IMG-1796.JPG';
import productImage6 from '../../../../assets/logosandpics/IMG-1807.JPG';
import productImage7 from '../../../../assets/logosandpics/IMG-2204.JPG';
import productImage8 from '../../../../assets/logosandpics/IMG-3250.JPG';
import productImage9 from '../../../../assets/logosandpics/IMG-4008.JPG';
import productImage10 from '../../../../assets/logosandpics/IMG-4283.JPG';
import aboutus from '../../../../assets/logosandpics/us.jpeg';

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

const contactMessage = () => {
  const messageArray = [
    'How about no?',
    'Fuck you!',
    'We are busy right now, try us never.',
    'Shhhhhh',
    'Why are you so obsessed with me?',
  ];
  const randomMessage =
    messageArray[Math.floor(Math.random() * messageArray.length)];
  return randomMessage;
};

const ProductPage = ({ products, onAddToCart }) => {
  const classes = useStyles();
  const alert = useAlert();

  const handleAddToCart = () => onAddToCart(products[0].id, 1);
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
          <h2 className={classes.productParts}>WHAT IS REKD?</h2>
          <p className={classes.productParts}>
            REKD is a game for those who aren't scared of a challenge or
            blacking out. We designed this game with malice and ill-intent to
            bring joy and laughter as you see your friends suffer through
            punishments and challenges.
          </p>
          <p className={classes.productParts}>
            The board is brutal, the cards are hilarious and the game will bring
            your competitive juices to a whole new level. A drinking game where
            anything can happen. 10% luck, 20% skill, 15% concentrated power of
            will, 5.5% pleasure, 52% pain and 102.5% reason to remember the
            Game. Get ready to get REKD.
          </p>
          <Button
            variant="contained"
            className={classes.productButton}
            onClick={() => {
              handleAddToCart();
              alert.success(randomAlertMessage());
            }}
          >
            {' '}
            BUY THE GAME
          </Button>
        </div>
        <Carousel
          className={classes.productImageContainer}
          autoPlay
          interval="6000"
          indicators={false}
          navButtonsAlwaysVisible={true}
        >
          {items.map((item, i) => (
            <img
              key={i}
              src={item}
              className={classes.productImage}
              alt="game images"
            />
          ))}
        </Carousel>
      </div>

      <div className={classes.carouselTitle}>
        <Typography>
          <h2>
            Got questions about the game? Check our{' '}
            <Button
              component={Link}
              to="/faqpage"
              // className={classes.faqbutton}
              size="large"
              variant="contained"
              style={{ color: 'black' }}
            >
              FAQ
            </Button>
          </h2>
        </Typography>
      </div>

      <div className={classes.productInfoContainer}>
        <div
          className={classes.productImageUsContainer}
          style={{ marginBottom: '1rem' }}
        >
          <img
            src={aboutus}
            className={classes.productImageUS}
            alt="game images"
          />
        </div>
        <div className={classes.productInfo}>
          <h2 className={classes.productParts}>ABOUT US</h2>
          <p className={classes.productParts}>
            We are 3 drunken entrepreneurs with a blurry double vision. To make
            America fun again and spread good times amongst friends. 7 years
            after graduation we decided to embark in the adventure of revamping
            and commercializing this game that brought us so much joy in
            college.
          </p>
          <p className={classes.productParts}>
            REKD is a game that has proven to be a hit at parties and predrinks,
            that challenges players and creates long lasting memories no one
            will ever want to talk about again.
          </p>
          <Button
            variant="contained"
            className={classes.productButton}
            onClick={() => {
              alert.success(contactMessage());
            }}
          >
            {' '}
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
