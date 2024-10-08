const makeProducts = () => {
  const products = [
    {
      id: 1,
      name: "Choco Bliss",
      price: 1200,
      picture: "choco_bliss.jpg", // Link to the chocolate image
      description: "A smooth and creamy milk chocolate with a hint of vanilla. Perfect for chocolate lovers!",
    },
    {
      id: 2,
      name: "Candy Delight",
      price: 800,
      picture: "candy_delight.jpg", // Link to the candy image
      description: "Delicious fruity candies that melt in your mouth. Great for kids and adults alike!",
    },
    {
      id: 3,
      name: "Bonbon Royale",
      price: 3000,
      picture: "bonbon_royale.jpg", // Link to the bonbon image
      description: "Premium bonbons filled with exotic flavors. A luxurious treat for special occasions.",
    },
    {
      id: 4,
      name: "Hazel Dream",
      price: 1500,
      picture: "hazel_dream.jpg", // Link to the hazelnut chocolate image
      description: "Rich dark chocolate with crunchy hazelnut pieces. Perfect for those who enjoy a nutty flavor!",
    },
    {
      id: 5,
      name: "Lemon Chew",
      price: 500,
      picture: "lemon_chew.jpg", // Link to the lemon candy image
      description: "Tangy lemon chews that pack a punch of citrusy flavor. Refreshing and sweet!",
    },
    {
      id: 6,
      name: "Caramel Treat",
      price: 2000,
      picture: "caramel_treat.jpg", // Link to the caramel chocolate image
      description: "Smooth caramel covered in milk chocolate. A delightful combination of sweetness and richness.",
    },
    {
      id: 7,
      name: "Berry Blast",
      price: 1000,
      picture: "berry_blast.jpg", // Link to the berry candy image
      description: "Mixed berry-flavored candies that burst with juicy flavors in every bite. Great for snacking!",
    },
    {
      id: 8,
      name: "Truffle Heaven",
      price: 4000,
      picture: "truffle_heaven.jpg", // Link to the truffle image
      description: "Decadent chocolate truffles filled with smooth ganache. Perfect for gifting or indulging.",
    },
    {
      id: 9,
      name: "Minty Fresh",
      price: 700,
      picture: "minty_fresh.jpg", // Link to the mint candy image
      description: "Refreshing mint candies that leave a cool sensation in your mouth. Great after meals!",
    },
    {
      id: 10,
      name: "Crunchy Delight",
      price: 2500,
      picture: "crunchy_delight.jpg", // Link to the crunchy chocolate image
      description: "A delightful chocolate bar with crispy rice pieces for an extra crunch in every bite.",
    },
    {
      id: 11,
      name: "Vanilla Bonbon",
      price: 3500,
      picture: "vanilla_bonbon.jpg", // Link to the vanilla bonbon image
      description: "Soft and creamy vanilla bonbons with a touch of white chocolate. A delicate and delicious treat.",
    },
    {
      id: 12,
      name: "Orange Twist",
      price: 600,
      picture: "orange_twist.jpg", // Link to the orange candy image
      description: "Zesty orange-flavored candies that are sweet, tangy, and perfect for a citrus kick.",
    }
  ];
  // map
const content = products.map(product =>
  `<div class="product-card" id=${product.id}>
                    <img src="${product.picture}" alt="${product.productName}">
                    <h3>${product.productName}</h3>
                    <p>${product.description}</p>
                    <p>${product.price}</p>
                    <button class="add-to-cart-btn">Kosárba</button>
                  </div>`);
    return content;
}

const productContent = makeProducts();

// render
const renderPage = () => {
  const productsRender = document.querySelector(".products")
  productsRender.innerHTML = "";
  productsRender.innerHTML = products().join('');
}

// Szűrés
const getMinimumInputValue = () => {
    const value = parseFloat(document.querySelector("#min-price").value);
    return isNaN(value) ? 0 : value;
}

const getMaximumInputValue = () => {
  const value = parseFloat(document.querySelector("#min-price").value);
  return isNaN(value) ? 0 : value;
}

const filterOptions = () => {
    const minPrice = getMinInputValue();
    const maxPrice = getMaxInputValue();
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}

const showResult = () => {
    const filteredList = filterOptions();
    renderPage(filteredList);
}

document.addEventListener("DOMContentLoaded", () => {
  renderPage(products);
  const filterBtn = document.queryselector("filter-btn");
  filterBtn.addEventListener("click", showResult);
})
