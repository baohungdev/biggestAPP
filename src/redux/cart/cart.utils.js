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
