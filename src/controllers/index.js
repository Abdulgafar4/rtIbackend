import mongoose from "mongoose";
import { ProductSchema } from "../models/index";

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "abdulgafar4",
  api_key: "466349187453724",
  api_secret: "QNOYvHf3b706dsGEtuoNryvaoYU",
});

const Product = mongoose.model("Product", ProductSchema);

export const addNewProduct = (req, res) => {
  let newProduct = new Product(req.body);

  newProduct.save((err, product) => {
    if (err) {
      res.send(err);
    }
    res.json(product);
  });
  const data = {
    productImage: req.body.productImage,
  };

  cloudinary.uploader
    .upload(data.productImage, {
      overwrite: true,
      invalidate: true,
      width: 810,
      height: 456,
      crop: "limit",
    })
    .then((res) => res.json())
    .then((result) => {
      response.status(200).send({
        message: "success",
        result,
      });
    })
    .catch((error) => {
      response.status(500).send({
        message: "failure",
        error,
      });
    });
};

export const getProducts = (req, res) => {
  Product.find({}, (err, product) => {
    if (err) {
      res.send(err);
    }
    res.json(product);
  });
};

export const getProductWithID = (req, res) => {
  Product.findById(req.params.productId, (err, product) => {
    if (err) {
      res.send(err);
    }
    res.json(product);
  });
};

export const updateProduct = (req, res) => {
  Product.findOneAndUpdate(
    { _id: req.params.productId },
    req.body,
    { new: true },
    (err, product) => {
      if (err) {
        res.send(err);
      }
      res.json(product);
    }
  );
};

export const deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.productId }, (err, product) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted product" });
  });
};
