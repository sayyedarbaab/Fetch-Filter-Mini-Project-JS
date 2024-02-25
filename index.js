(async () => {
  const productConteinerEl = document.getElementById("productContainer");
  const search_inputEl = document.getElementById("search_input");
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
          <button>${product.price} $</button>
        </div>
      </div>
    `;
  };

  const filterHandler = (event) => {
    const searchText = event.target.value.toLowerCase();
    // console.log(searchText);
    const filteredProducts = products.filter((product) => {
      return (
        product.title.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText) ||
        product.price.toString().toLowerCase().includes(searchText)
      );
    });
    renderProduct(filteredProducts);
  };
  const renderProduct = (products) => {
    productConteinerEl.innerHTML = "";
    products.forEach((product) => {
      productConteinerEl.innerHTML += generateProducts(product);
    });
  };
  search_inputEl.addEventListener("keyup", filterHandler);
  renderProduct(products);
})();
