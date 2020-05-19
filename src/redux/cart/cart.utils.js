export const addItemToCart = (CartItems, ItemToAdd) => {
  const existingItem = CartItems.find(
    (CartItem) => CartItem.id === ItemToAdd.id
  );

  if (existingItem) {
    return CartItems.map((CartItem) =>
      CartItem.id === ItemToAdd.id
        ? {
            ...CartItem,
            quantity: CartItem.quantity + 1,
          }
        : CartItem
    );
  }

  return [...CartItems, { ...ItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
