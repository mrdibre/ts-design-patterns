import { ProductDecorator } from "./product-decorator";

class ProductCustomDecorator extends ProductDecorator {
  getPrice(): number {
    return super.getPrice() + 10;
  }

  getName(): string {
    return `${super.getName()} Customizada`;
  }
}

export { ProductCustomDecorator };
