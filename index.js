(async () => {
  const productConteinerEl = document.getElementById("productContainer");
  const url = "https://fakestoreapi.com/products";
  const fetchProducts = async () => {
    try {
      const res = await fetch(url);
      return await res.json();
    } catch (error) {
      return error;
    }
  };
  const products = await fetchProducts();

  const generateProducts = (product) => {
    return `
    <div class="product_card">
        <div class="image_container">
          <img
            src="${product.image}"
            alt=""
          />
        </div>
        <div class="product_content">
          <h2>${product.title}</h2>
          <p>
           ${product.description.split(" ").slice(0, 20).join(" ")}
          </p>
          <button>${product.price}</button>
        </div>
      </div>
    `;
  };
  const renderProduct = (products) => {
    productConteinerEl.innerHTML = "";
    products.forEach((product) => {
      productConteinerEl.innerHTML += generateProducts(product);
    });
  };
  renderProduct(products);
})();
