export async function getCategories() {
  try {
    const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categoriesToJson = await categories.json();
    return categoriesToJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const productResponse = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const products = await productResponse.json();
    return products;
  } catch (error) {
    console.error(error);
  }
}
