import './App.css';
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
} from './components';

import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

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
    console.log('checkout tokenId', checkoutTokenId);
    console.log('neworder', newOrder);
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      console.log('INCOMING ORDER', incomingOrder);
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
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Banner />
            <Hero />
            <Reviews />
            <Products products={products} onAddToCart={handleAddToCart} />
            <DownloadableGame />
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
            <ProductPage onAddToCart={handleAddToCart} />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
