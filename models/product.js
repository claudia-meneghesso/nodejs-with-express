const fs = require("fs");
const path = require("path");

const getDirName = require("../utils/path");

const pathToProducts = path.join(getDirName, "data", "products.json");

const getProductsFromFile = (callback) => {
  fs.readFile(pathToProducts, (error, data) => {
    if (error) {
      return callback([]);
    }

    return callback(JSON.parse(data));
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);

      fs.writeFile(pathToProducts, JSON.stringify(products), (error) => {
        console.log(error);
      });
    });
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};
