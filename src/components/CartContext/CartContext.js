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
  try {
    const incomingOrder = await commerce.checkout.capture(
      checkoutTokenId,
      newOrder
    );
    setOrder(incomingOrder);
    refreshCart();
  } catch (error) {
    setErrorMessage(error.data.error.message);
  }
};
