import mongoose from "mongoose";

const cartproductSchema = new mongoose.Schema({
  url: String,
  detailurl: String,
  price: Object,
  title: Object,
  quantity: Number,
  description: String,
  tagline: String,
});

const CartProduct = mongoose.model("cart", cartproductSchema);
export default CartProduct;
