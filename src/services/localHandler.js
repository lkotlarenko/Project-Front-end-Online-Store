export const saveProduct = (product) => {
  const currentLocal = JSON.parse(localStorage.getItem('cartItems'));
  if (currentLocal) {
    localStorage.setItem('cartItems', JSON.stringify([...cartItems, product]));
  } else {
    localStorage.setItem('cartItems', JSON.stringify([product]));
  }
};

export const getProducts = () => JSON.parse(localStorage.getItem('cartItems')) || [];

export const removeProductById = (productID) => {
  const localProducts = JSON.parse(localStorage.getItem('cartItems'));
  const newLocal = localProducts.filter((item) => item.id !== productID);
  localStorage.setItem('cartItems', JSON.stringify(newLocal));
};
