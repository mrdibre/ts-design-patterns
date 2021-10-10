import { TShirt } from "./product/t-shirt";
import { ProductStampDecorator } from "./product/product-stamp-decorator";
import { ProductCustomDecorator } from "./product/product-custom-decorator";

const tShirt = new TShirt();

const productWithStamp = new ProductStampDecorator(tShirt);
const productWithTwoStamps = new ProductStampDecorator(productWithStamp);
const customProduct = new ProductCustomDecorator(productWithStamp);

console.log(tShirt.getName(), tShirt.getPrice());

console.log(productWithStamp.getName(), productWithStamp.getPrice());

console.log(productWithTwoStamps.getName(), productWithTwoStamps.getPrice());

console.log(customProduct.getName(), customProduct.getPrice());
