const department = {
  women: {
    gender: ["women", "men", "kids"],
    collections: ["indian", "western", "maternity", "footwear"],
    categories: [
      "kurta",
      "suit",
      "dress",
      "top",
      "jeans",
      "shirt",
      "shoes",
      "heels",
      "flats",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Blue", "Red", "Green", "White", "Pink"],
    materials: ["Cotton", "Silk", "Rayon", "Denim", "Polyester"],
    priceRange: {
      min: 499,
      max: 9999,
    },
    discount: [10, 20, 30, 40, 50],
  },

  men: {
    categories: ["mobile", "laptop", "audio", "accessories"],
    colors: ["Black", "White", "Blue", "Grey"],
    storage: ["64GB", "128GB", "256GB", "512GB"],
    ram: ["4GB", "6GB", "8GB", "16GB"],
    priceRange: {
      min: 999,
      max: 200000,
    },
    discount: [5, 10, 15, 20, 30, 50],
  },
};

export default department;
