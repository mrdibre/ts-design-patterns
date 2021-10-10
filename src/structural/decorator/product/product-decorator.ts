import { ProductProtocol } from "./product-protocol";

class ProductDecorator implements ProductProtocol {
  constructor(protected readonly product: ProductProtocol) {}

  getName(): string {
    return this.product.getName();
  }

  getPrice(): number {
    return this.product.getPrice();
  }

}

export { ProductDecorator };
