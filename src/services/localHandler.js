/** save product on localStorage by
1 - verify if there's already a localStorage key
2 - if there's then save the new product after the saved ones otherwise just create a localStorage key for product
*/
export const saveProduct = (product) => {
  const currentLocal = JSON.parse(localStorage.getItem('cartItems'));
  if (currentLocal) {
    localStorage.setItem('cartItems', JSON.stringify([...currentLocal, product]));
  } else {
    localStorage.setItem('cartItems', JSON.stringify([product]));
  }
};

// gets products from localStorage
export const getProducts = () => JSON.parse(localStorage.getItem('cartItems')) || [];

// remove products from localStorage by ID
export const removeProductById = (productID) => {
  const localProducts = JSON.parse(localStorage.getItem('cartItems'));
  // filter current localStorage then sets the new one without the product with provided ID as parameter
  const newLocal = localProducts.filter((item) => item.id !== productID);
  localStorage.setItem('cartItems', JSON.stringify(newLocal));
};
