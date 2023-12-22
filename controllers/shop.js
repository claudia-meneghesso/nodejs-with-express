const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) =>
    res.render("shop/product-list", {
      pageTitle: "All Products",
      path: "/products",
      hasProducts: products.length > 0,
      products,
    })
  );
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) =>
    res.render("shop/index", {
      pageTitle: "My Shop",
      path: "/",
      products,
      hasProducts: products.length > 0,
    })
  );
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", { pageTitle: "Your Cart", path: "/cart" });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", { pageTitle: "Checkout", path: "/checkout" });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", { pageTitle: "Orders", path: "/orders" });
};
