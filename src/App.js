import './App.css';
import ReactGA from 'react-ga';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { commerce } from './lib/commerce';
import { useEffect, useState } from 'react';
import {
  Cart,
  Navbar,
  Products,
  Checkout,
  ProductPage,
  Hero,
  Banner,
  Reviews,
  SplashPage,
  DownloadableGame,
  Video,
  Contact,
  Footer,
  PlayOnline,
  Newsletter,
  Questions,
} from './components';

import RouteChangeTracker from './components/RouteChangeTracker';

import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

const TRACKING_ID = 'G-NSBK9GMDF4'; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview('/');

// function initializeReactGA() {
//   ReactGA.initialize('G-NSBK9GMDF4');
//   ReactGA.pageview('/');
// }

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [splashPage, setSplashPage] = useState(true);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    // console.log('checkout tokenId', checkoutTokenId);
    // console.log('neworder', newOrder);
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      // console.log('INCOMING ORDER', incomingOrder);
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const removeSplashPage = () => {
    setSplashPage(false);
  };

  if (splashPage) {
    return (
      <Router>
        <Route path="/">
          <SplashPage removePage={removeSplashPage} />
        </Route>
      </Router>
    );
  }

  return (
    <Provider template={AlertTemplate} {...options}>
      <Router>
        <RouteChangeTracker />
        <Navbar
          products={products}
          onAddToCart={handleAddToCart}
          totalItems={cart.total_items}
        />
        <Switch>
          <Route exact path="/">
            {/* <Banner /> */}
            <Products products={products} onAddToCart={handleAddToCart} />
            <Video />
            <Hero />
            <Reviews />
            <PlayOnline />
            <Contact />
            <Newsletter />
            <DownloadableGame />

            <Footer />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
          <Route exact path="/productpage">
            <ProductPage products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/faqpage">
            <Questions />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
