import { ProductDAO } from "./ProductDAO";

const productDAO = new ProductDAO();

productDAO.addProduct ('keyboard',1200,5);
const product = productDAO.findProductById(1);
if (product){
    console.log(`ก่อนสั่งซื้อ : ${product.getName()} สต็อกคงเหลือ = ${product.getStock()}`);
}